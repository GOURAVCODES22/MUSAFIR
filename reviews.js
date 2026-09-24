// Vercel serverless function: /api/reviews
//  Public : GET (approved reviews) · GET ?photo=<id>&i=<n> (image) · POST (submit -> goes to "pending")
//  Admin  : header x-admin-token = REVIEWS_ADMIN_TOKEN -> GET ?admin=1 · POST ?action=approve|reject|delete
// Storage: Upstash Redis (Vercel Marketplace -> Upstash Redis -> connect to this project).
const BASE  = process.env.UPSTASH_REDIS_REST_URL   || process.env.KV_REST_API_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const ADMIN = process.env.REVIEWS_ADMIN_TOKEN;
const APPROVED = 'musafir:approved', PENDING = 'musafir:pending';
const MAX_PHOTOS = 3, MAX_PHOTO_B64 = 240000, MAX_PENDING = 100;

async function redis(cmds) {
  const r = await fetch(BASE + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmds)
  });
  if (!r.ok) throw new Error('redis ' + r.status);
  return r.json(); // [{ result }, ...]
}
const clean = (s, n) => String(s || '').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, n);
const parse = arr => (arr || []).map(x => { try { return JSON.parse(x); } catch { return null; } }).filter(Boolean);
const safeId = s => String(s || '').replace(/[^a-z0-9]/gi, '').slice(0, 24);
const photoKeys = (id, n) => Array.from({ length: n || 0 }, (_, i) => ['DEL', `musafir:photo:${id}:${i}`]);

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!BASE || !TOKEN) return res.status(503).json({ error: 'Reviews storage is not connected yet.' });
  const q = req.query || {};
  const isAdmin = !!ADMIN && req.headers['x-admin-token'] === ADMIN;
  try {
    // ---- photo ----
    if (req.method === 'GET' && q.photo) {
      const [r] = await redis([['GET', `musafir:photo:${safeId(q.photo)}:${parseInt(q.i) || 0}`]]);
      if (!r.result) return res.status(404).end();
      res.setHeader('Content-Type', 'image/jpeg');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.status(200).send(Buffer.from(r.result, 'base64'));
    }
    // ---- admin: list ----
    if (req.method === 'GET' && q.admin) {
      if (!isAdmin) return res.status(401).json({ error: 'Wrong password' });
      const [p, a] = await redis([['HVALS', PENDING], ['LRANGE', APPROVED, 0, 199]]);
      return res.status(200).json({ pending: parse(p.result).sort((x, y) => y.ts - x.ts), approved: parse(a.result) });
    }
    // ---- public: approved list ----
    if (req.method === 'GET') {
      const [r] = await redis([['LRANGE', APPROVED, 0, 59]]);
      return res.status(200).json({ reviews: parse(r.result) });
    }
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    const b = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});

    // ---- admin: approve / reject / delete ----
    if (q.action) {
      if (!isAdmin) return res.status(401).json({ error: 'Wrong password' });
      const id = safeId(b.id);
      if (q.action === 'approve' || q.action === 'reject') {
        const [g] = await redis([['HGET', PENDING, id]]);
        if (!g.result) return res.status(404).json({ error: 'Not found' });
        if (q.action === 'approve') await redis([['LPUSH', APPROVED, g.result], ['LTRIM', APPROVED, 0, 499], ['HDEL', PENDING, id]]);
        else await redis([['HDEL', PENDING, id], ...photoKeys(id, JSON.parse(g.result).photos)]);
        return res.status(200).json({ ok: true });
      }
      if (q.action === 'delete') {
        const [l] = await redis([['LRANGE', APPROVED, 0, -1]]);
        const raw = (l.result || []).find(x => { try { return JSON.parse(x).id === id; } catch { return false; } });
        if (!raw) return res.status(404).json({ error: 'Not found' });
        await redis([['LREM', APPROVED, 1, raw], ...photoKeys(id, JSON.parse(raw).photos)]);
        return res.status(200).json({ ok: true });
      }
      return res.status(400).json({ error: 'Unknown action' });
    }

    // ---- public: submit review (goes to pending) ----
    if (b.website) return res.status(200).json({ ok: true, pending: true });   // honeypot
    const name = clean(b.name, 40), place = clean(b.place, 50), text = clean(b.text, 400);
    const rating = Math.round(Number(b.rating));
    if (name.length < 2 || text.length < 5 || !(rating >= 1 && rating <= 5))
      return res.status(400).json({ error: 'Please add your name, a star rating and a short review.' });
    const photos = [];
    for (const p of (Array.isArray(b.photos) ? b.photos.slice(0, MAX_PHOTOS) : [])) {
      const m = /^data:image\/jpeg;base64,([A-Za-z0-9+/]+={0,2})$/.exec(String(p));
      const head = m && Buffer.from(m[1].slice(0, 8), 'base64');
      if (!m || m[1].length > MAX_PHOTO_B64 || head[0] !== 0xFF || head[1] !== 0xD8)
        return res.status(400).json({ error: 'Photos must be JPEG images (they are resized automatically).' });
      photos.push(m[1]);
    }
    const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
    const [len, lock] = await redis([['HLEN', PENDING], ['SET', 'musafir:rl:' + ip, '1', 'NX', 'EX', 60]]);
    if (lock.result !== 'OK') return res.status(429).json({ error: 'Please wait a minute before posting again.' });
    if (len.result >= MAX_PENDING) return res.status(429).json({ error: 'Too many reviews waiting for approval. Please try later.' });
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const review = { id, name, place, text, rating, ts: Date.now(), photos: photos.length };
    await redis([['HSET', PENDING, id, JSON.stringify(review)], ...photos.map((p, i) => ['SET', `musafir:photo:${id}:${i}`, p])]);
    return res.status(201).json({ ok: true, pending: true });
  } catch (e) {
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
