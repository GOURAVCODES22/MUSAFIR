/* =========================================================
   DATA
========================================================= */
const COUNTRIES = [
  { name:"India", lat:27.1751, lon:78.0421, tz:"Asia/Kolkata", population:"1.43 billion", area:"3,287,263 km²",
    winter:"8–22°C", summer:"32–45°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Taj_Mahal%2C_Agra%2C_UP%2C_India.jpg?width=1200",
    blurb:"Home to the Taj Mahal, the Himalayas and a coastline that runs for thousands of kilometers. India rewards travelers who move slowly.",
    places:[
      { name:"Amber Fort, Jaipur", lat:26.9855, lon:75.8513, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Amber_Fort-Jaipur-India0010.JPG?width=1000" },
      { name:"Kerala Backwaters", lat:9.4981, lon:76.3388, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/A_Houseboat_In_Kerala_Backwaters.jpg?width=1000" }
    ] },
  { name:"United States", lat:40.7128, lon:-74.0060, tz:"America/New_York", population:"335 million", area:"9,833,517 km²",
    winter:"-3–7°C", summer:"22–30°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/New_York_City_skyline.jpg?width=1200",
    blurb:"From Manhattan skylines to national parks the size of small countries — the range here is the whole point." ,
    places:[
      { name:"Grand Canyon", lat:36.1069, lon:-112.1129, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Grand_Canyon_NP-Arizona-USA.jpg?width=1000" }
    ] },
  { name:"Japan", lat:35.3606, lon:138.7274, tz:"Asia/Tokyo", population:"123.5 million", area:"377,975 km²",
    winter:"2–10°C", summer:"24–31°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Fuji_-_aerial_view_-_1394.JPG?width=1200",
    blurb:"Mount Fuji, bullet trains and centuries-old temples sitting a few streets away from neon-lit Tokyo.",
    places:[
      { name:"Fushimi Inari, Kyoto", lat:34.9671, lon:135.7727, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Fushimi_Inari_Shrine_%40_Kyoto_%2813406159605%29.jpg?width=1000" },
      { name:"Shibuya Crossing, Tokyo", lat:35.6595, lon:139.7005, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/2018_Shibuya_Crossing.jpg?width=1000" }
    ] },
  { name:"France", lat:48.8584, lon:2.2945, tz:"Europe/Paris", population:"68 million", area:"551,695 km²",
    winter:"2–8°C", summer:"18–25°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Eiffel_Tower_%40_Paris_%2825437573152%29.jpg?width=1200",
    blurb:"The Eiffel Tower is the postcard, but the countryside — Provence, the Loire, the Alps — is the reason to stay longer." ,
    places:[
      { name:"Mont Saint-Michel", lat:48.6361, lon:-1.5115, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Mont_Saint_Michel_Normandy.jpg?width=1000" }
    ] },
  { name:"Italy", lat:41.8902, lon:12.4922, tz:"Europe/Rome", population:"58.9 million", area:"301,340 km²",
    winter:"5–13°C", summer:"22–30°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum.rome.arp.jpg?width=1200",
    blurb:"Two thousand years of history stacked under Roman sun, with some of the world's best food as a side effect." ,
    places:[
      { name:"Venice", lat:45.4408, lon:12.3155, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Grand_canal_venise_08844.JPG?width=1000" }
    ] },
  { name:"United Kingdom", lat:51.5007, lon:-0.1246, tz:"Europe/London", population:"67.7 million", area:"243,610 km²",
    winter:"2–8°C", summer:"14–23°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Big_Ben_2007-1.jpg?width=1200",
    blurb:"Big Ben, ancient universities and moody countryside — all reachable by an excellent rail network." ,
    places:[
      { name:"Stonehenge", lat:51.1789, lon:-1.8262, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Stonehenge2007_07_30.jpg?width=1000" }
    ] },
  { name:"Australia", lat:-33.8568, lon:151.2153, tz:"Australia/Sydney", population:"26.6 million", area:"7,692,024 km²",
    winter:"9–17°C", summer:"19–26°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Sydney_opera_house_2010.jpg?width=1200",
    blurb:"A continent to itself — reef in the north, red desert in the center, surf cities down the east coast." ,
    places:[
      { name:"Uluru", lat:-25.3444, lon:131.0369, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/ULURU.jpg?width=1000" }
    ] },
  { name:"UAE", lat:25.1972, lon:55.2744, tz:"Asia/Dubai", population:"9.4 million", area:"83,600 km²",
    winter:"14–24°C", summer:"30–42°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Dubai_Skyline_mit_Burj_Khalifa_%28cropped%29.jpg?width=1200",
    blurb:"Dubai builds skylines faster than anywhere on earth, with desert silence just an hour outside the city." ,
    places:[
      { name:"Dubai Marina", lat:25.0805, lon:55.1403, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Dubai_Marina_Skyline.jpg?width=1000" }
    ] },
  { name:"Thailand", lat:7.7407, lon:98.7784, tz:"Asia/Bangkok", population:"71.8 million", area:"513,120 km²",
    winter:"24–31°C", summer:"27–33°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Maya_Bay%2C_Thailand_by_Mike_Clegg_Photography.jpg?width=1200",
    blurb:"Limestone islands, street food that outclasses restaurants, and some of the friendliest cities in Asia." ,
    places:[
      { name:"Wat Arun, Bangkok", lat:13.7437, lon:100.4888, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Wat_Arun_8.jpg?width=1000" }
    ] },
  { name:"Greece", lat:36.3932, lon:25.4615, tz:"Europe/Athens", population:"10.4 million", area:"131,957 km²",
    winter:"9–15°C", summer:"23–28°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Oia-Santorini-Greece.jpg?width=1200",
    blurb:"Whitewashed villages over blue water, and ruins old enough to have inspired half of Western philosophy." ,
    places:[
      { name:"Acropolis, Athens", lat:37.9715, lon:23.7267, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Acropolis_Of_Athens_Greece_04.jpg?width=1000" }
    ] },
  { name:"Iceland", lat:64.0784, lon:-16.2300, tz:"Atlantic/Reykjavik", population:"0.39 million", area:"103,000 km²",
    winter:"-3–2°C", summer:"10–15°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Jokulsarlon_lake%2C_Iceland.jpg?width=1200",
    blurb:"Glaciers, geysers and the northern lights — a small population sitting on a very dramatic piece of land." ,
    places:[
      { name:"Gullfoss Waterfall", lat:64.3271, lon:-20.1199, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Gullfoss_rainbow.JPG?width=1000" }
    ] },
  { name:"Maldives", lat:4.1755, lon:73.5093, tz:"Indian/Maldives", population:"0.52 million", area:"298 km²",
    winter:"26–30°C", summer:"27–31°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/One_of_the_beach_in_Maldives_in_2015.jpg?width=1200",
    blurb:"The lowest country on earth, made almost entirely of turquoise water and a scatter of coral islands." },
  { name:"Switzerland", lat:45.9763, lon:7.6586, tz:"Europe/Zurich", population:"8.8 million", area:"41,285 km²",
    winter:"-6–2°C", summer:"12–20°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Matterhorn-EastAndNorthside-viewedFromZermatt_landscapeformat.jpg?width=1200",
    blurb:"Alps on every horizon, trains that run to the minute, and villages that look staged even in person." ,
    places:[
      { name:"Geneva", lat:46.2044, lon:6.1432, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Gen%C3%A8ve_Jet_d%27eau.JPG?width=1000" }
    ] },
  { name:"Egypt", lat:29.9792, lon:31.1342, tz:"Africa/Cairo", population:"112.7 million", area:"1,010,408 km²",
    winter:"9–19°C", summer:"25–35°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Giza-pyramids.JPG?width=1200",
    blurb:"The last standing wonder of the ancient world, with five thousand years of history along one river.",
    places:[
      { name:"Luxor Temple", lat:25.6995, lon:32.6421, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Luxor_Temple_R05.jpg?width=1000" },
      { name:"Abu Simbel", lat:22.3372, lon:31.6258, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Abu_Simbel_main_temple.jpg?width=1000" }
    ] },
  { name:"Spain", lat:41.4036, lon:2.1744, tz:"Europe/Madrid", population:"47.6 million", area:"505,990 km²",
    winter:"6–15°C", summer:"23–30°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Sagrada_Familia_03.jpg?width=1200",
    blurb:"Gaudí's unfinished Sagrada Família still rises over Barcelona, backed by tapas culture and late-night city life." ,
    places:[
      { name:"Alhambra, Granada", lat:37.176, lon:-3.5881, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Granada_Alhambra.jpg?width=1000" }
    ] },
  { name:"Germany", lat:52.5163, lon:13.3777, tz:"Europe/Berlin", population:"84.5 million", area:"357,592 km²",
    winter:"0–6°C", summer:"18–24°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Berlin-Brandenburg_Gate_overview.jpg?width=1200",
    blurb:"The Brandenburg Gate has watched Berlin rebuild itself twice — now a city of history, techno clubs and green parks." ,
    places:[
      { name:"Cologne Cathedral", lat:50.9413, lon:6.9583, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Cologne_Cathedral.jpg?width=1000" }
    ] },
  { name:"Netherlands", lat:52.3676, lon:4.9041, tz:"Europe/Amsterdam", population:"17.9 million", area:"41,850 km²",
    winter:"1–7°C", summer:"15–22°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Amsterdam_canals_in_summer.JPG?width=1200",
    blurb:"Amsterdam's canal rings and cycling culture make it one of the easiest cities in Europe to fall for." },
  { name:"Turkey", lat:38.6431, lon:34.8286, tz:"Europe/Istanbul", population:"85.8 million", area:"783,562 km²",
    winter:"0–8°C", summer:"22–32°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Cappadocia_Aerial_View_%286998755984%29.jpg?width=1200",
    blurb:"Hot air balloons drift over Cappadocia's rock chimneys at sunrise — one of the most photographed skies on earth." ,
    places:[
      { name:"Hagia Sophia", lat:41.0086, lon:28.9802, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Hagia_Sophia_2017.jpg?width=1000" }
    ] },
  { name:"China", lat:40.4319, lon:116.5704, tz:"Asia/Shanghai", population:"1.41 billion", area:"9,596,961 km²",
    winter:"-7–2°C", summer:"20–31°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/20090529_Great_Wall_8216.jpg?width=1200",
    blurb:"The Great Wall stretches over mountains for thousands of kilometers, built across centuries by multiple dynasties." ,
    places:[
      { name:"Forbidden City", lat:39.9163, lon:116.3972, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Forbidden_City_Beijing_%283019178959%29.jpg?width=1000" }
    ] },
  { name:"South Korea", lat:37.5796, lon:126.9770, tz:"Asia/Seoul", population:"51.7 million", area:"100,210 km²",
    winter:"-5–4°C", summer:"23–29°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Gyeongbokgung_Palace.jpg?width=1200",
    blurb:"Gyeongbokgung's palace gates sit minutes from Seoul's skyscrapers — centuries of history inside a hyper-modern city." ,
    places:[
      { name:"Jeju Island", lat:33.4996, lon:126.5312, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Jeju_Island.jpg?width=1000" }
    ] },
  { name:"Vietnam", lat:20.9101, lon:107.1839, tz:"Asia/Ho_Chi_Minh", population:"98.9 million", area:"331,212 km²",
    winter:"14–20°C", summer:"28–33°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Halong_Bay_-_Vietnam_01.JPG?width=1200",
    blurb:"Thousands of limestone islands rise out of Ha Long Bay's emerald water — best seen from an overnight boat." },
  { name:"Nepal", lat:27.9881, lon:86.9250, tz:"Asia/Kathmandu", population:"30.9 million", area:"147,516 km²",
    winter:"-15–2°C", summer:"3–15°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Everest%2C_Nepal%2C_Himalayas.jpg?width=1200",
    blurb:"Home to Everest and eight of the world's ten highest peaks — a country built vertically." ,
    places:[
      { name:"Pokhara", lat:28.2096, lon:83.9856, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Pokhara_and_Phewa_Lake.jpg?width=1000" }
    ] },
  { name:"Morocco", lat:35.1688, lon:-5.2636, tz:"Africa/Casablanca", population:"37.8 million", area:"446,550 km²",
    winter:"8–17°C", summer:"22–31°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Chefchaouen_%2852189357475%29.jpg?width=1200",
    blurb:"Chefchaouen's entire old town is painted in shades of blue, tucked into the Rif Mountains." ,
    places:[
      { name:"Marrakech", lat:31.6258, lon:-7.9891, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Maroc_Marrakech_Jemaa-el-Fna_Luc_Viatour.JPG?width=1000" }
    ] },
  { name:"Russia", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", population:"146 million", area:"17,098,246 km²",
    winter:"-10–0°C", summer:"18–26°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Moscow%27s_Red_Square%2C_Moscow%2C_Russia.jpg?width=1200",
    blurb:"From Moscow's Red Square to Saint Petersburg's historic centre, Russia spans a vast range of landscapes, architecture and cultures.",
    places:[
      { name:"Red Square, Moscow", lat:55.7539, lon:37.6208, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Moscow%27s_Red_Square%2C_Moscow%2C_Russia.jpg?width=1000" },
      { name:"Saint Petersburg", lat:59.9343, lon:30.3351, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Palace_Square_in_Saint_Petersburg_01.jpg?width=1000" }
    ] },
  { name:"South Africa", lat:-33.9628, lon:18.4098, tz:"Africa/Johannesburg", population:"60.4 million", area:"1,221,037 km²",
    winter:"7–18°C", summer:"16–26°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Cape_Town_Table_Mountain.jpg?width=1200",
    blurb:"Table Mountain rises flat-topped over Cape Town, with wine country, coastline and safari all within a day's drive." ,
    places:[
      { name:"Kruger National Park", lat:-24.0084, lon:31.4522, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Kruger_Park_Elephants.jpg?width=1000" }
    ] },
  { name:"Brazil", lat:-22.9519, lon:-43.2105, tz:"America/Sao_Paulo", population:"216 million", area:"8,515,767 km²",
    winter:"18–25°C", summer:"23–30°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Christ_the_Redeemer_-_Cristo_Redentor.jpg?width=1200",
    blurb:"Christ the Redeemer looks out over Rio from Corcovado mountain, arms open above the beaches and favelas below." ,
    places:[
      { name:"Iguazu Falls", lat:-25.6953, lon:-54.4367, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Iguazu_Falls_%28Argentina%29_in_2009.jpg?width=1000" }
    ] },
  { name:"Mexico", lat:20.6843, lon:-88.5678, tz:"America/Mexico_City", population:"128 million", area:"1,964,375 km²",
    winter:"18–27°C", summer:"24–33°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_1.jpg?width=1200",
    blurb:"The step-pyramid of Chichén Itzá still tracks the equinox sun exactly as the Maya designed it centuries ago." },
  { name:"New Zealand", lat:-44.6710, lon:167.9250, tz:"Pacific/Auckland", population:"5.2 million", area:"268,838 km²",
    winter:"2–11°C", summer:"12–20°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Milford_Sound_%28New_Zealand%29.JPG?width=1200",
    blurb:"Milford Sound's cliffs drop straight into the water — often called the eighth wonder of the world." ,
    places:[
      { name:"Queenstown", lat:-45.0312, lon:168.6626, photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Queenstown_New_Zealand_September_07.jpg?width=1000" }
    ] },
  { name:"Jammu", lat:32.7266, lon:74.8570, tz:"Asia/Kolkata", population:"1.5 million (district)", area:"3,097 km²",
    winter:"4–17°C", summer:"28–42°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Bahu_Fort%2C_Jammu%2C_India.jpg?width=1200",
    blurb:"Musafir's home base — the City of Temples, gateway to Vaishno Devi, with Bahu Fort's lights reflecting off the Tawi river every evening.",
    places:[
      { name:"Shree Ganesh Glass House — Kot Bhalwal", lat:32.8120, lon:74.8188,
        photo:"./shreeganesh-glass-house-kot-bhalwal.jpg",
        directionsUrl:"https://www.google.com/maps/dir/?api=1&destination=Shree%20Ganesh%20Glass%20House%2C%20Kot%20Bhalwal%2C%20Jammu",
        blurb:"Photo destination: Shree Ganesh Glass House, Kot Bhalwal near Ring Road, Jammu." },
    ] },
  { name:"Vaishno Devi", lat:33.0303, lon:74.9490, tz:"Asia/Kolkata", population:"1.5 million (Jammu district)", area:"3,097 km² (Jammu district)",
    winter:"2–14°C", summer:"22–34°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Vaishno_Devi_Bhavan.jpg?width=1200",
    blurb:"One of India's most visited pilgrimage sites — a shrine set into the Trikuta hills above Katra, reached by a steep mountain trek." },
  { name:"Canada", lat:43.0962, lon:-79.0377, tz:"America/Toronto", population:"38.9 million", area:"9,984,670 km²",
    winter:"-10–0°C", summer:"18–27°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Niagara_Falls_in_Canada.jpg?width=1200",
    blurb:"Niagara Falls roars along the US border, while the Rockies and endless forests stretch out behind it." },
  { name:"Singapore", lat:1.2834, lon:103.8607, tz:"Asia/Singapore", population:"5.9 million", area:"728 km²",
    winter:"24–31°C", summer:"25–32°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Marina_Bay_Sands_%28I%29.jpg?width=1200",
    blurb:"A city-state that turned strict planning into a design language — gardens, hawker food, and one of the world's densest skylines." },
  { name:"Malaysia", lat:3.1579, lon:101.7116, tz:"Asia/Kuala_Lumpur", population:"34 million", area:"330,803 km²",
    winter:"23–32°C", summer:"24–33°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/The_Petronas_Twin_Towers_in_Kuala_Lumpur_%28Malaysia%29.JPG?width=1200",
    blurb:"The Petronas Towers still define Kuala Lumpur's skyline, with rainforest and island beaches just hours away." },
  { name:"Indonesia", lat:-7.6079, lon:110.2038, tz:"Asia/Jakarta", population:"279 million", area:"1,904,569 km²",
    winter:"23–31°C", summer:"24–33°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur_Temple.jpg?width=1200",
    blurb:"Borobudur is the world's largest Buddhist temple, one of 17,000+ islands that make up the Indonesian archipelago." },
  { name:"Portugal", lat:38.6916, lon:-9.216, tz:"Europe/Lisbon", population:"10.5 million", area:"92,212 km²",
    winter:"8–15°C", summer:"18–28°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Belem_Tower%2C_Lisbon%2C_Portugal.JPG?width=1200",
    blurb:"Lisbon's Belém Tower once welcomed explorers home — now it welcomes visitors to a city built on seven hills." },
  { name:"Saudi Arabia", lat:24.7136, lon:46.6753, tz:"Asia/Riyadh", population:"36.4 million", area:"2,149,690 km²",
    winter:"8–21°C", summer:"27–43°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Riyadh_Skyline.jpg?width=1200",
    blurb:"Riyadh's skyline has grown fast, while AlUla's carved rock tombs sit quietly in the desert a flight away." },
  { name:"Austria", lat:48.1858, lon:16.3122, tz:"Europe/Vienna", population:"9.1 million", area:"83,879 km²",
    winter:"-1–4°C", summer:"18–26°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Schloss_Schoenbrunn_August_2006_406.jpg?width=1200",
    blurb:"Vienna's Schönbrunn Palace sums up the city's habit of turning imperial history into something walkable." },
  { name:"Philippines", lat:9.85, lon:124.1435, tz:"Asia/Manila", population:"117 million", area:"300,000 km²",
    winter:"24–30°C", summer:"25–34°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate_Hills_overview.JPG?width=1200",
    blurb:"Over a thousand grass-covered hills turn brown every dry season, giving Bohol's Chocolate Hills their name." },
  { name:"Norway", lat:62.1049, lon:7.2062, tz:"Europe/Oslo", population:"5.5 million", area:"323,802 km²",
    winter:"-7–0°C", summer:"13–20°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Geirangerfjord_2.jpg?width=1200",
    blurb:"Geirangerfjord's cliffs drop straight into still water — one of the most dramatic drives and cruises in Europe." },
  { name:"Ireland", lat:52.9715, lon:-9.4309, tz:"Europe/Dublin", population:"5.1 million", area:"70,273 km²",
    winter:"3–8°C", summer:"13–19°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Cliffs_of_Moher%2C_Irland.jpg?width=1200",
    blurb:"The Cliffs of Moher drop 200 meters into the Atlantic — the dramatic edge of Ireland's green interior." },
  { name:"Croatia", lat:42.6507, lon:18.0944, tz:"Europe/Zagreb", population:"3.9 million", area:"56,594 km²",
    winter:"6–12°C", summer:"22–29°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Dubrovnik_-_Croatia.jpg?width=1200",
    blurb:"Dubrovnik's walled old town sits right on the Adriatic — medieval stone streets that double as a film set." },
  { name:"Pakistan", lat:31.588, lon:74.3095, tz:"Asia/Karachi", population:"241 million", area:"881,913 km²",
    winter:"5–19°C", summer:"28–41°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Badshahi_Mosque_front_picture.jpg?width=1200",
    blurb:"Lahore's Badshahi Mosque was once the world's largest — a Mughal-era centerpiece in a country that also holds K2." },
  { name:"Qatar", lat:25.2854, lon:51.531, tz:"Asia/Qatar", population:"2.7 million", area:"11,586 km²",
    winter:"14–23°C", summer:"32–42°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Doha_Dhow_Harbour_Skyline_View_01.jpg?width=1200",
    blurb:"Doha's skyline rose out of the desert coastline in a generation — traditional dhows still work the harbour below it." },
  { name:"Jordan", lat:30.3285, lon:35.4444, tz:"Asia/Amman", population:"11.3 million", area:"89,342 km²",
    winter:"3–12°C", summer:"22–32°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Petra_Jordan_BW_21.JPG?width=1200",
    blurb:"Petra's rose-red facades were carved directly into canyon walls over two thousand years ago." },
  { name:"Peru", lat:-13.1631, lon:-72.545, tz:"America/Lima", population:"34 million", area:"1,285,216 km²",
    winter:"6–19°C", summer:"9–21°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Machu_Picchu%2C_Peru.jpg?width=1200",
    blurb:"Machu Picchu sits on a ridge above the Urubamba valley, reachable only by train, trail, or helicopter." },
  { name:"Argentina", lat:-50.4967, lon:-73.1387, tz:"America/Argentina/Buenos_Aires", population:"45.8 million", area:"2,780,400 km²",
    winter:"-5–5°C", summer:"5–15°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Perito_Moreno_Glacier_South.jpg?width=1200",
    blurb:"The Perito Moreno Glacier calves house-sized chunks of ice into the lake — one of the few glaciers still advancing." },
  { name:"Colombia", lat:10.391, lon:-75.4794, tz:"America/Bogota", population:"52 million", area:"1,141,748 km²",
    winter:"24–31°C", summer:"24–32°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/131_Cathedral_San_Pedro_Claver_Dome_Cartagena.JPG?width=1200",
    blurb:"Cartagena's walled colonial old town glows in Caribbean heat, colour-soaked balconies over cobblestone streets." },
  { name:"Chile", lat:-27.1127, lon:-109.3497, tz:"Pacific/Easter", population:"19.6 million", area:"756,096 km²",
    winter:"18–22°C", summer:"20–26°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Easter_Island%2C_Ahu_Tongariki_%286691207937%29.jpg?width=1200",
    blurb:"Easter Island's moai statues stand watch over the Pacific, thousands of kilometers from mainland Chile." },
  { name:"Nigeria", lat:6.5244, lon:3.3792, tz:"Africa/Lagos", population:"223 million", area:"923,768 km²",
    winter:"24–31°C", summer:"24–29°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Lagos_skyline.jpg?width=1200",
    blurb:"Lagos is Africa's largest city by some counts — a sprawling, fast-moving economic engine on the Gulf of Guinea." },
  { name:"Ghana", lat:5.1053, lon:-1.2466, tz:"Africa/Accra", population:"34 million", area:"238,533 km²",
    winter:"24–31°C", summer:"23–29°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Cape_Coast_Castle%2C_Cape_Coast%2C_Ghana.JPG?width=1200",
    blurb:"Cape Coast Castle sits on the Gulf of Guinea, a preserved but heavy piece of history along Ghana's coastline." },
  { name:"Kenya", lat:-1.5, lon:35.1, tz:"Africa/Nairobi", population:"55.1 million", area:"580,367 km²",
    winter:"12–24°C", summer:"14–27°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/African_elephants_in_Maasai_Mara_National_Reserve_-_Kenya.jpg?width=1200",
    blurb:"The Maasai Mara hosts the Great Migration every year — millions of wildebeest crossing crocodile-filled rivers." },
  { name:"Tanzania", lat:-3.0674, lon:37.3556, tz:"Africa/Dar_es_Salaam", population:"67.4 million", area:"947,303 km²",
    winter:"10–25°C", summer:"15–30°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Mlima_Kilimanjaro.jpg?width=1200",
    blurb:"Kilimanjaro rises straight from the savannah to snow-capped summit — Africa's highest point, climbable without ropes." },
  { name:"Sri Lanka", lat:7.957, lon:80.7603, tz:"Asia/Colombo", population:"22.2 million", area:"65,610 km²",
    winter:"22–30°C", summer:"24–32°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Sigiriya_Lion_Rock_%2843143914520%29.jpg?width=1200",
    blurb:"Sigiriya's rock fortress rises 200 meters above the jungle, with a 5th-century palace once built on top." },
  { name:"Czechia", lat:50.0865, lon:14.4114, tz:"Europe/Prague", population:"10.5 million", area:"78,871 km²",
    winter:"-2–3°C", summer:"17–24°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Prague_panorama_at_castle.jpg?width=1200",
    blurb:"Prague Castle looks over a city of spires and cobblestones that survived the 20th century almost untouched." },
  { name:"Cuba", lat:23.1367, lon:-82.3589, tz:"America/Havana", population:"11 million", area:"109,884 km²",
    winter:"20–27°C", summer:"25–32°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/El_Capitolio_Havana_Cuba.jpg?width=1200",
    blurb:"Havana's streets run on classic American cars from the 1950s, parked in front of crumbling colonial facades." },
  { name:"Spiti Valley", lat:32.246, lon:78.0203, tz:"Asia/Kolkata", population:"~12,000 (sub-division)", area:"~12,210 km²",
    winter:"-20–(-5)°C", summer:"5–20°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Key_Monastery%2C_Spiti_Valley.JPG?width=1200",
    blurb:"A cold desert valley high in the Himalayas — monasteries clinging to cliffs and some of the starkest landscapes in India." },
  { name:"Ladakh", lat:33.7527, lon:78.6584, tz:"Asia/Kolkata", population:"~290,000 (UT)", area:"59,146 km²",
    winter:"-25–(-10)°C", summer:"5–20°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Pangong_Lake_-_Ladakh.jpg?width=1200",
    blurb:"High-altitude desert meets glacial lakes — Pangong's water shifts colour through the day against bare mountains." },
  { name:"Uttarakhand", lat:30.7346, lon:79.0669, tz:"Asia/Kolkata", population:"~11 million (state)", area:"53,483 km²",
    winter:"-10–0°C", summer:"5–18°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Kedarnath_Temple.jpg?width=1200",
    blurb:"Kedarnath sits at 3,583m, one of the holiest and most remote temples in the Himalayas, snowbound most of the year." },
  { name:"Himachal Pradesh", lat:32.219, lon:76.3234, tz:"Asia/Kolkata", population:"~7.5 million (state)", area:"55,673 km²",
    winter:"2–12°C", summer:"18–28°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Dhauladhar_peak_from_McLeod_Ganj.jpg?width=1200",
    blurb:"McLeod Ganj sits under the jagged Dhauladhar range — prayer flags, Tibetan culture, and mountains that rise straight out of town." },
  { name:"Kullu", lat:31.9576, lon:77.1095, tz:"Asia/Kolkata", population:"~18,000 (town)", area:"5,503 km² (district)",
    winter:"0–12°C", summer:"18–30°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Himalayas_from_Kullu_Valley%2C_Himachal_Pradesh.jpg?width=1200",
    blurb:"The valley that gave Himachal its nickname 'Valley of Gods' — apple orchards backed by snow peaks." },
  { name:"Manali", lat:32.2432, lon:77.1892, tz:"Asia/Kolkata", population:"~8,000 (town)", area:"Kullu district",
    winter:"-2–10°C", summer:"15–25°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Manali_%2CHimachal_Pradesh%2C_India.jpg?width=1200",
    blurb:"Old Manali's cafes and the Beas river sit below Rohtang Pass — the honeymoon-and-backpacker capital of Himachal." },
  { name:"Manimahesh", lat:32.4833, lon:76.6167, tz:"Asia/Kolkata", population:"Uninhabited (pilgrimage site)", area:"Glacial lake",
    winter:"-15–(-2)°C", summer:"5–18°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Mt._Kailash_Manimahesh_Lake.jpg?width=1200",
    blurb:"A glacial lake at 4,080m below Mount Kailash's Himachal namesake peak — reached only on foot, mostly by pilgrims." },
  { name:"Srinagar", lat:34.0837, lon:74.7973, tz:"Asia/Kolkata", population:"~1.4 million", area:"1,979 km² (district)",
    winter:"-2–8°C", summer:"18–30°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/India_-_Srinagar_-_023_-_Nishat_Bagh_Mughal_Gardens.jpg?width=1200",
    blurb:"Mughal gardens, houseboats and Dal Lake's floating markets — the summer capital of Jammu & Kashmir." },
  { name:"Dal Lake", lat:34.1197, lon:74.8631, tz:"Asia/Kolkata", population:"~50,000 (lake dwellers)", area:"18 km² (lake)",
    winter:"-2–8°C", summer:"20–30°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Dal_Lake_Hazratbal_Srinagar.jpg?width=1200",
    blurb:"Shikara boats drift between floating gardens and houseboats on Srinagar's most photographed lake." },
  { name:"Pahalgam", lat:34.0161, lon:75.3152, tz:"Asia/Kolkata", population:"~10,000 (town)", area:"Anantnag district",
    winter:"-5–5°C", summer:"12–24°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Pahalgam_views_33.JPG?width=1200",
    blurb:"Pine forests and the Lidder river running through meadows — a base camp for the Amarnath Yatra and Kashmir's valley views." },
  { name:"Patnitop", lat:33.0903, lon:75.3264, tz:"Asia/Kolkata", population:"~600 (hamlet)", area:"Udhampur district",
    winter:"-2–8°C", summer:"18–28°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Snowpeaks_Patnitop.jpg?width=1200",
    blurb:"A meadow-covered hill station at 2,024m on the Jammu-Srinagar highway, blanketed in snow through winter." },
  { name:"Nathatop", lat:33.105, lon:75.345, tz:"Asia/Kolkata", population:"Uninhabited (viewpoint)", area:"Udhampur district",
    winter:"-4–6°C", summer:"15–25°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Nathatop%2C_Jammu.jpg?width=1200",
    blurb:"A higher ridge above Patnitop with sweeping Himalayan views — often snow-covered when the valley below isn't." },
  { name:"Shimla", lat:31.1048, lon:77.1734, tz:"Asia/Kolkata", population:"~170,000", area:"25 km² (town)",
    winter:"0–10°C", summer:"19–28°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Christ_Church%2C_Mall_Road%2C_Shimla.jpg?width=1200",
    blurb:"The former summer capital of British India — colonial architecture, a pedestrian Mall Road, and the Kalka-Shimla toy train." },
  { name:"Triyund", lat:32.2496, lon:76.3339, tz:"Asia/Kolkata", population:"Uninhabited (campsite)", area:"Kangra district",
    winter:"-5–5°C", summer:"10–20°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Cloudy_Triund%2C_above_Mcleod_Ganj%2C_Himachal_Pradesh.jpg?width=1200",
    blurb:"A grassy ridge at 2,850m above McLeod Ganj — one of the most popular short treks in the Dhauladhar range." },
  { name:"Kinnaur Kailash", lat:31.53, lon:78.25, tz:"Asia/Kolkata", population:"~500 (Kalpa village)", area:"Kinnaur district",
    winter:"-10–2°C", summer:"10–22°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Kinnaur_Kailash%2C_Himachal%2C_India.jpg?width=1200",
    blurb:"A 79-foot rock pillar resembling a Shivling sits atop this peak — one of the five sacred Panch Kailash mountains." },
  { name:"Shrikhand Mahadev", lat:31.8464, lon:77.7396, tz:"Asia/Kolkata", population:"Uninhabited (pilgrimage trek)", area:"Kullu district",
    winter:"-15–(-2)°C", summer:"2–15°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Nain_Sarowar%2C_Shrikhand_Mahadev.jpg?width=1200",
    blurb:"One of India's toughest treks, climbing to a 75-foot natural Shivling at 18,570 feet in the Kullu Himalayas." },
  { name:"Kasol", lat:32.01, lon:77.3145, tz:"Asia/Kolkata", population:"~1,700 (village)", area:"Parvati Valley",
    winter:"0–10°C", summer:"15–25°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Kasol_Valley.jpg?width=1200",
    blurb:"A small village on the Parvati river that became a backpacker hub — cafes, mountains, and Israeli food menus." },
  { name:"Sonamarg", lat:34.302, lon:75.2933, tz:"Asia/Kolkata", population:"~2,700 (town)", area:"Ganderbal district",
    winter:"-8–2°C", summer:"10–22°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Thajiwas_Park%2C_Sonamarg%2C_Jammu_and_Kashmir%2C_India.jpg?width=1200",
    blurb:"The 'Meadow of Gold' — gateway to the Thajiwas Glacier and the high-altitude route toward Ladakh." },
  { name:"Anantnag", lat:33.55, lon:75.25, tz:"Asia/Kolkata", population:"~110,000", area:"3,984 km² (district)",
    winter:"-2–8°C", summer:"16–28°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Mughal_Spring%2C_Verinag%2C_Kashmir.jpg?width=1200",
    blurb:"Home to the Verinag spring, source of the Jhelum river, set inside an octagonal Mughal-era stone garden." },
  { name:"Bangladesh", lat:22.4953, lon:89.5403, tz:"Asia/Dhaka", population:"171 million", area:"148,460 km²",
    winter:"12–26°C", summer:"27–34°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/A_View_of_the_Largest_Mangrove_Forest_in_the_World.JPG?width=1200",
    blurb:"Home to the Sundarbans, the world's largest mangrove forest, shared with India and home to the Bengal tiger." },
  { name:"Cambodia", lat:13.4125, lon:103.867, tz:"Asia/Phnom_Penh", population:"17 million", area:"181,035 km²",
    winter:"20–32°C", summer:"24–35°C",
    photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Angkor_Wat%2C_Cambodia_%282211490487%29.jpg?width=1200",
    blurb:"Angkor Wat is the largest religious monument on earth — a 12th-century temple complex still active today." },
];

/* =========================================================
   THREE.JS GLOBE
========================================================= */
const canvas = document.getElementById('globe-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
let camDist = 6.4;
camera.position.set(0, 0, camDist);

function resize(){
  const rect = canvas.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height, false);
  const aspect = rect.width/rect.height;
  camera.aspect = aspect;
  // on narrow (portrait) screens, dolly the camera back so the globe never gets cropped left/right
  camDist = aspect < 1 ? (6.4 / aspect) * 0.62 : 6.4;
  camera.position.z = camDist;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();
// re-check after fonts/layout settle (common cause of a stale canvas size on mobile)
window.addEventListener('load', resize);
setTimeout(resize, 300);
setTimeout(resize, 1000);
if(window.ResizeObserver){
  new ResizeObserver(()=>resize()).observe(canvas.parentElement);
}

// galaxy starfield: dense, colorful, varied-size stars with subtle twinkle
{
  const starGeo = new THREE.BufferGeometry();
  const starCount = 6000;
  const positions = new Float32Array(starCount*3);
  const colors = new Float32Array(starCount*3);
  const sizes = new Float32Array(starCount);
  const palette = [
    [1.0, 1.0, 1.0],   // white
    [0.75, 0.82, 1.0], // cool blue-white
    [1.0, 0.86, 0.7],  // warm amber
    [0.82, 0.75, 1.0], // soft violet
    [0.7, 0.9, 1.0],   // pale cyan
  ];
  for(let i=0;i<starCount;i++){
    const r = 55 + Math.random()*180;
    const theta = Math.random()*Math.PI*2;
    const phi = Math.acos((Math.random()*2)-1);
    positions[i*3]   = r*Math.sin(phi)*Math.cos(theta);
    positions[i*3+1] = r*Math.sin(phi)*Math.sin(theta);
    positions[i*3+2] = r*Math.cos(phi);
    const c = palette[Math.floor(Math.random()*palette.length)];
    const brightness = 0.55 + Math.random()*0.45;
    colors[i*3] = c[0]*brightness; colors[i*3+1] = c[1]*brightness; colors[i*3+2] = c[2]*brightness;
    sizes[i] = Math.random() < 0.08 ? (0.55 + Math.random()*0.5) : (0.15 + Math.random()*0.3);
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions,3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(colors,3));
  starGeo.setAttribute('size', new THREE.BufferAttribute(sizes,1));
  const starMat = new THREE.PointsMaterial({ size:0.35, vertexColors:true, transparent:true, opacity:0.9, sizeAttenuation:true });
  const starField = new THREE.Points(starGeo, starMat);
  scene.add(starField);

  // a few soft nebula-glow sprites scattered far behind the globe for a galaxy feel
  function makeGlowTexture(colorA, colorB){
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(128,128,0,128,128,128);
    g.addColorStop(0, colorA); g.addColorStop(0.4, colorB); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,256,256);
    return new THREE.CanvasTexture(c);
  }
  const nebulaSpecs = [
    { color:['rgba(130,90,220,0.55)','rgba(90,60,160,0.18)'], pos:[-90,40,-120], scale:170 },
    { color:['rgba(60,120,220,0.5)','rgba(40,80,160,0.15)'],  pos:[110,-60,-150], scale:200 },
    { color:['rgba(220,110,170,0.4)','rgba(160,70,120,0.12)'],pos:[-60,-90,-180], scale:150 },
  ];
  nebulaSpecs.forEach(n=>{
    const tex = makeGlowTexture(n.color[0], n.color[1]);
    const mat = new THREE.SpriteMaterial({ map:tex, transparent:true, depthWrite:false, blending:THREE.AdditiveBlending });
    const sprite = new THREE.Sprite(mat);
    sprite.position.set(...n.pos);
    sprite.scale.set(n.scale, n.scale, 1);
    scene.add(sprite);
  });

  window.__starField = starField;
}

// lights
scene.add(new THREE.AmbientLight(0x6f88ad, 1.1));
const sun = new THREE.DirectionalLight(0xffffff, 1.15);
sun.position.set(5,3,5);
scene.add(sun);

// globe group (everything that rotates together)
const globeGroup = new THREE.Group();
scene.add(globeGroup);

const RADIUS = 2;
const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = (url, loaded, total) => {
  const pct = Math.round((loaded/total)*100);
  document.getElementById('loadBar').style.width = pct+'%';
  document.getElementById('loadPct').textContent = 'LOADING THE WORLD — '+pct+'%';
};
loadingManager.onLoad = () => {
  gsap.to('#loader', { opacity:0, duration:0.7, delay:0.15, onComplete:()=>{ document.getElementById('loader').classList.add('hidden'); } });
};
const texLoader = new THREE.TextureLoader(loadingManager);
texLoader.setCrossOrigin('anonymous');
const EARTH_TEX_PRIMARY = 'https://raw.githubusercontent.com/mrdoob/three.js/r128/examples/textures/planets/earth_atmos_2048.jpg';
const EARTH_TEX_BACKUP = 'https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg';

const earthTex = texLoader.load(
  EARTH_TEX_PRIMARY,
  undefined, undefined,
  () => {
    // primary source failed — try a second known-good world map texture before giving up
    texLoader.load(
      EARTH_TEX_BACKUP,
      (tex) => { globeMat.map = tex; globeMat.needsUpdate = true; document.getElementById('loader').classList.add('hidden'); },
      undefined,
      () => {
        // both sources failed — flat ocean-blue material so the globe still reads as a planet, not a blank ball
        globeMat.map = null;
        globeMat.color.set(0x1c4f86);
        globeMat.needsUpdate = true;
        document.getElementById('loader').classList.add('hidden');
      }
    );
  }
);

earthTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
earthTex.minFilter = THREE.LinearMipmapLinearFilter;
earthTex.magFilter = THREE.LinearFilter;
const globeMat = new THREE.MeshPhongMaterial({ map:earthTex, shininess:6, specular:0x223355 });
const globeMesh = new THREE.Mesh(new THREE.SphereGeometry(RADIUS, 64, 64), globeMat);
globeGroup.add(globeMesh);

// atmosphere glow
const atmoMat = new THREE.MeshBasicMaterial({ color:0x4a8fd6, transparent:true, opacity:0.18, side:THREE.BackSide });
const atmoMesh = new THREE.Mesh(new THREE.SphereGeometry(RADIUS*1.06, 64, 64), atmoMat);
globeGroup.add(atmoMesh);

// lat/lon -> vector on unit sphere (local/object space)
function latLonToVector3(lat, lon, r=1){
  const phi = (90-lat)*(Math.PI/180);
  const theta = (lon+180)*(Math.PI/180);
  return new THREE.Vector3(
    -r*Math.sin(phi)*Math.cos(theta),
    r*Math.cos(phi),
    r*Math.sin(phi)*Math.sin(theta)
  );
}

// markers
const markerGeo = new THREE.SphereGeometry(0.028, 12, 12);
const markerMat = new THREE.MeshBasicMaterial({ color:0xd4af6a });
const markers = [];
function makeGlowTexture(colorA, colorB){
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64,64,0,64,64,64);
  g.addColorStop(0, colorA); g.addColorStop(0.5, colorB); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0,0,128,128);
  return new THREE.CanvasTexture(c);
}
const markerGlowTex = makeGlowTexture('rgba(212,175,106,0.9)', 'rgba(212,175,106,0.25)');

COUNTRIES.forEach(c=>{
  const dir = latLonToVector3(c.lat, c.lon, 1);
  const m = new THREE.Mesh(markerGeo, markerMat.clone());
  m.position.copy(dir.clone().multiplyScalar(RADIUS*1.01));
  m.userData.country = c;
  globeGroup.add(m);
  markers.push(m);

  // soft circular glow behind marker
  const ringMat = new THREE.SpriteMaterial({ map:markerGlowTex, transparent:true, opacity:0.8, depthWrite:false, blending:THREE.AdditiveBlending });
  const ring = new THREE.Sprite(ringMat);
  ring.scale.set(0.11,0.11,1);
  ring.position.copy(dir.clone().multiplyScalar(RADIUS*1.012));
  globeGroup.add(ring);
});

/* =========================================================
   DRAG / TOUCH ROTATE + INERTIA — MOBILE ROBUST
========================================================= */
let dragging=false, lastX=0, lastY=0, velX=0, velY=0, downX=0, downY=0, downTime=0, moved=false;
let autoRotate = true, flying = false;
let rotateMode = false;
let lastTapTime = 0;
let pinchStartDist = null;
let pinchStartCamDist = camDist;
let activePointerId = null;

function applyDelta(dx, dy){
  const scale = 0.006;
  const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), dx*scale);
  const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), dy*scale);
  globeGroup.quaternion.premultiply(qYaw).premultiply(qPitch);
}

function smoothZoom(targetDist){
  const target = Math.min(11, Math.max(3.25, targetDist));
  gsap.killTweensOf(camera.position);
  gsap.to(camera.position, {
    z: target,
    duration: 0.65,
    ease: 'power2.out',
    onUpdate: ()=>{ camDist = camera.position.z; }
  });
}

function setRotateMode(on){
  rotateMode = !!on;
  canvas.style.touchAction = 'none';
  const badge = document.getElementById('rotateBadge');
  if(badge){
    badge.textContent = rotateMode
      ? '✨ Explore mode • Tap a country • Pinch to zoom'
      : '👆 Double-tap to explore';
  }
}
// Normal mode: the globe may be dragged/rotated, but a single tap NEVER opens a country.
// Explore mode is deliberately unlocked only by a double-tap.
setRotateMode(false);

function unlockExplore(){
  if(flying) return;
  setRotateMode(true);
  autoRotate = false;
  smoothZoom(Math.max(3.8, camDist - 0.8));
}

function startDrag(e){
  if(flying) return;
  if(e.pointerType === 'mouse' && e.button !== 0) return;
  activePointerId = e.pointerId;
  dragging = true;
  moved = false;
  autoRotate = false;
  lastX = downX = e.clientX;
  lastY = downY = e.clientY;
  downTime = performance.now();
  velX = velY = 0;
  try{ canvas.setPointerCapture(e.pointerId); }catch(_){ }
}

canvas.addEventListener('pointerdown', (e)=>{
  const now = performance.now();
  const isTouch = e.pointerType === 'touch' || e.pointerType === 'pen';
  const isDoubleTap = now - lastTapTime < 360;

  // Double-tap is the only gesture that unlocks zoom/country selection.
  if(isDoubleTap && isTouch){
    unlockExplore();
  } else if(isDoubleTap && e.pointerType === 'mouse'){
    unlockExplore();
  }
  lastTapTime = now;

  // Rotation is always available; exploration is not.
  startDrag(e);
}, {passive:true});

canvas.addEventListener('pointermove', (e)=>{
  if(!dragging || activePointerId !== e.pointerId || flying) return;
  const dx = e.clientX-lastX;
  const dy = e.clientY-lastY;
  if(Math.abs(e.clientX-downX)>3 || Math.abs(e.clientY-downY)>3) moved = true;
  applyDelta(dx,dy);
  velX = dx; velY = dy;
  lastX=e.clientX; lastY=e.clientY;
  e.preventDefault();
}, {passive:false});

canvas.addEventListener('pointerup', (e)=>{
  if(activePointerId !== e.pointerId) return;
  const tapDt=performance.now()-downTime;
  if(!moved && tapDt<360 && rotateMode && !flying){
    // In explore mode, a tap may select a marker. In normal mode it does nothing.
    const hit=raycastMarker(e.clientX,e.clientY);
    if(hit) flyTo(hit.userData.country);
  }
  dragging=false;
  activePointerId=null;
  try{ canvas.releasePointerCapture(e.pointerId); }catch(_){ }
  if(Math.abs(velX)>0.4 || Math.abs(velY)>0.4){
    const vx=velX, vy=velY;
    gsap.to({}, {duration:0.55,ease:'power2.out',onUpdate:function(){
      const p=1-this.progress();
      applyDelta(vx*p*0.8,vy*p*0.8);
    }});
  }
  setTimeout(()=>{ if(!dragging) autoRotate=true; },1800);
}, {passive:true});

canvas.addEventListener('pointercancel', ()=>{
  dragging=false; activePointerId=null;
  setTimeout(()=>{ if(!dragging) autoRotate=true; },1000);
});

// Pinch and wheel zoom are intentionally disabled until explore mode is unlocked.
canvas.addEventListener('touchstart',(e)=>{
  if(!rotateMode || e.touches.length!==2) return;
  dragging=false;
  const dx=e.touches[0].clientX-e.touches[1].clientX;
  const dy=e.touches[0].clientY-e.touches[1].clientY;
  pinchStartDist=Math.hypot(dx,dy);
  pinchStartCamDist=camDist;
},{passive:true});

canvas.addEventListener('touchmove',(e)=>{
  if(!rotateMode || e.touches.length!==2 || !pinchStartDist) return;
  e.preventDefault();
  autoRotate=false;
  const dx=e.touches[0].clientX-e.touches[1].clientX;
  const dy=e.touches[0].clientY-e.touches[1].clientY;
  const dist=Math.max(20,Math.hypot(dx,dy));
  const target=pinchStartCamDist*(pinchStartDist/dist);
  camDist=Math.min(11,Math.max(3.25,target));
  camera.position.z += (camDist-camera.position.z)*0.22;
},{passive:false});

canvas.addEventListener('touchend',(e)=>{
  if(e.touches.length<2){ pinchStartDist=null; setTimeout(()=>{if(!dragging)autoRotate=true;},1400); }
},{passive:true});

canvas.addEventListener('wheel',(e)=>{
  if(!rotateMode) return;
  e.preventDefault();
  smoothZoom(camDist + e.deltaY*0.0045);
},{passive:false});

// Badge can also unlock exploration, but ordinary tapping the globe cannot.
const rotateBadge = document.getElementById('rotateBadge');
if(rotateBadge){
  rotateBadge.addEventListener('click',(e)=>{
    e.preventDefault();
    unlockExplore();
  });
}

function raycastMarker(clientX, clientY){
  const rect = canvas.getBoundingClientRect();
  const mouse = new THREE.Vector2(
    ((clientX-rect.left)/rect.width)*2-1,
    -((clientY-rect.top)/rect.height)*2+1
  );
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(markers);
  return hits.length ? hits[0].object : null;
}
const raycaster = new THREE.Raycaster();

/* =========================================================
   CINEMATIC FLY-TO
========================================================= */
function flyTo(country){
  flying = true; autoRotate = false;
  document.getElementById('searchMsg').textContent = '';

  const dir = latLonToVector3(country.lat, country.lon, 1);
  const targetQuat = new THREE.Quaternion().setFromUnitVectors(dir.clone().normalize(), new THREE.Vector3(0,0,1));
  const startQuat = globeGroup.quaternion.clone();
  const proxy = { t:0 };
  const startDist = camDist;
  const closestDist = RADIUS + 0.9; // close enough to feel cinematic, far enough that the texture doesn't turn to mush

  gsap.timeline({
    onComplete:()=>{ flying=false; openPanel(country); setTimeout(()=>{ camDist = startDist; camera.position.z = camDist; }, 50); }
  })
  .to(proxy, {
    t:1, duration:2.2, ease:"power3.inOut",
    onUpdate:()=>{ THREE.Quaternion.slerp(startQuat, targetQuat, globeGroup.quaternion, proxy.t); }
  }, 0)
  .to({}, { duration:2.2, ease:"power2.in",
    onUpdate:function(){
      const p = this.progress();
      camDist = startDist - (startDist-closestDist)*p;
      camera.position.z = camDist;
    }
  }, 0);
}

/* =========================================================
   RENDER LOOP
========================================================= */
const placeTagsEl = document.getElementById('placeTags');
const placeTagEls = COUNTRIES.map(c => {
  const el = document.createElement('div');
  el.className = 'place-tag';
  el.innerHTML = `<span class="pin">●</span><span>${c.name}</span>`;
  el.style.pointerEvents = 'auto';
  el.style.cursor = 'pointer';
  el.addEventListener('click', ()=>{ if(rotateMode && !flying) flyTo(c); });
  el.addEventListener('touchend', (e)=>{ e.preventDefault(); e.stopPropagation(); if(rotateMode && !flying) flyTo(c); });
  if(placeTagsEl) placeTagsEl.appendChild(el);
  return { country:c, el };
});

function updatePlaceTags(){
  if(!placeTagsEl || flying) { placeTagEls.forEach(p => p.el.classList.remove('visible')); return; }
  const rect = canvas.getBoundingClientRect();
  const camDir = new THREE.Vector3(0,0,1);
  placeTagEls.forEach(({country, el}) => {
    const localDir = latLonToVector3(country.lat, country.lon, 1);
    const worldDir = localDir.clone().applyQuaternion(globeGroup.quaternion);
    const facing = worldDir.dot(camDir);
    if(facing < 0.45){ el.classList.remove('visible'); return; }
    const worldPos = worldDir.clone().multiplyScalar(RADIUS*1.01);
    const proj = worldPos.project(camera);
    const x = (proj.x*0.5+0.5) * rect.width;
    const y = (-proj.y*0.5+0.5) * rect.height;
    el.style.left = x+'px';
    el.style.top = y+'px';
    el.classList.add('visible');
  });
}

function animate(){
  requestAnimationFrame(animate);
  if(window.__starField) window.__starField.rotation.y += 0.00008;
  if(autoRotate && !flying){
    globeGroup.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), 0.0016));
  } else if(!dragging && !flying && (Math.abs(velX)>0.02 || Math.abs(velY)>0.02)){
    applyDelta(velX, velY);
    velX *= 0.94; velY *= 0.94;
  }
  const t = performance.now()*0.002;
  markers.forEach((m,i)=>{ m.scale.setScalar(1 + Math.sin(t+i)*0.08); });
  updatePlaceTags();
  renderer.render(scene, camera);
}
animate();

/* =========================================================
   PANEL
========================================================= */
const WEATHER_CODES = {
  0:['☀️','Clear sky'], 1:['🌤️','Mainly clear'], 2:['⛅','Partly cloudy'], 3:['☁️','Overcast'],
  45:['🌫️','Fog'], 48:['🌫️','Icy fog'],
  51:['🌦️','Light drizzle'], 53:['🌦️','Drizzle'], 55:['🌦️','Heavy drizzle'],
  61:['🌧️','Light rain'], 63:['🌧️','Rain'], 65:['🌧️','Heavy rain'],
  71:['🌨️','Light snow'], 73:['🌨️','Snow'], 75:['❄️','Heavy snow'],
  80:['🌦️','Rain showers'], 81:['🌧️','Heavy showers'], 82:['⛈️','Violent showers'],
  95:['⛈️','Thunderstorm'], 96:['⛈️','Thunderstorm + hail'], 99:['⛈️','Severe thunderstorm']
};

async function fetchLiveWeather(lat, lon){
  try{
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`);
    const data = await res.json();
    const c = data?.current;
    if(!c) return null;
    return {
      temp: c.temperature_2m,
      feels: c.apparent_temperature,
      humidity: c.relative_humidity_2m,
      wind: c.wind_speed_10m,
      code: c.weather_code
    };
  }catch(e){ return null; }
}

document.getElementById('statCountries').textContent = COUNTRIES.length;

/* ---------- WEATHER BOARD (single searchable widget) ---------- */
async function fetchBoardWeather(lat, lon){
  try{
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,cloud_cover,wind_speed_10m,weather_code&hourly=precipitation_probability&forecast_days=2&timezone=auto`);
    const data = await res.json();
    const cur = data.current, hourly = data.hourly;
    let rainLabel = 'No rain expected soon';
    if(hourly && hourly.time && cur){
      const idx = hourly.time.indexOf(cur.time);
      if(idx !== -1){
        for(let i=idx; i<Math.min(idx+12, hourly.time.length); i++){
          if(hourly.precipitation_probability[i] >= 50){
            const hourLabel = hourly.time[i].substr(11,5);
            rainLabel = i===idx ? `Raining now (${hourly.precipitation_probability[i]}%)` : `Rain likely ~${hourLabel} (${hourly.precipitation_probability[i]}%)`;
            break;
          }
        }
      }
    }
    return { temp:cur.temperature_2m, feels:cur.apparent_temperature, humidity:cur.relative_humidity_2m, cloud:cur.cloud_cover, wind:cur.wind_speed_10m, code:cur.weather_code, rainLabel };
  }catch(e){ return null; }
}

function loadWeatherSingle(place){
  document.getElementById('weatherSingleImg').src = place.photo || '';
  document.getElementById('wsPlace').textContent = place.name;
  document.getElementById('wsIcon').textContent = '🌍';
  document.getElementById('wsTemp').textContent = '…';
  document.getElementById('wsCond').textContent = 'Loading…';
  document.getElementById('wsFeels').textContent = '…';
  document.getElementById('wsHumidity').textContent = '…';
  document.getElementById('wsCloud').textContent = '…';
  document.getElementById('wsWind').textContent = '…';
  document.getElementById('wsRain').textContent = '…';

  fetchBoardWeather(place.lat, place.lon).then(w=>{
    if(!w){ document.getElementById('wsCond').textContent = 'Unavailable'; return; }
    const [icon,label] = WEATHER_CODES[w.code] || ['🌍','Unknown'];
    document.getElementById('wsIcon').textContent = icon;
    document.getElementById('wsTemp').textContent = `${Math.round(w.temp)}°C`;
    document.getElementById('wsCond').textContent = label;
    document.getElementById('wsFeels').textContent = `${Math.round(w.feels)}°C`;
    document.getElementById('wsHumidity').textContent = `${Math.round(w.humidity)}%`;
    document.getElementById('wsCloud').textContent = `${Math.round(w.cloud)}%`;
    document.getElementById('wsWind').textContent = `${Math.round(w.wind)} km/h`;
    document.getElementById('wsRain').textContent = w.rainLabel;
  });
}

function doWeatherSearch(){
  const val = document.getElementById('weatherSearchInput').value.trim().toLowerCase();
  const msg = document.getElementById('weatherSearchMsg');
  if(!val) return;
  const match = COUNTRIES.find(c=>c.name.toLowerCase()===val) || COUNTRIES.find(c=>c.name.toLowerCase().includes(val));
  if(match){ msg.textContent=''; loadWeatherSingle(match); }
  else{ msg.textContent = `"${document.getElementById('weatherSearchInput').value}" not found in Musafir's places — try a name from the main search above.`; }
}
document.getElementById('weatherSearchBtn').addEventListener('click', doWeatherSearch);
document.getElementById('weatherSearchInput').addEventListener('keydown', e=>{ if(e.key==='Enter') doWeatherSearch(); });

// default view on load
loadWeatherSingle(COUNTRIES.find(c=>c.name==="Jammu") || COUNTRIES[0]);

document.getElementById('rotateBadge').addEventListener('click', ()=>{
  if(flying) return;
  gsap.to({}, { duration:1, onUpdate:function(){
    globeGroup.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), 0.025));
  }});
});

document.getElementById('navJourneys').addEventListener('click', (e)=>{
  e.preventDefault();
  document.getElementById('chatPanel').classList.add('open');
});


const panel = document.getElementById('panel');
const favSet = new Set();
let clockTimer = null;

let leafletMap = null;

function renderCountryMap(country){
  const locations = [
    { name: country.name, lat: country.lat, lon: country.lon, photo: country.photo, blurb: country.blurb },
    ...(country.places || [])
  ];

  if(leafletMap){ leafletMap.remove(); leafletMap = null; }
  leafletMap = L.map('panelMapLeaflet', { zoomControl:true, scrollWheelZoom:false });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution:'&copy; OpenStreetMap &copy; CARTO', maxZoom:18
  }).addTo(leafletMap);

  const goldIcon = (big)=> L.divIcon({
    className:'',
    html:`<div style="width:${big?16:11}px;height:${big?16:11}px;border-radius:50%;background:#d4af6a;border:2px solid #0b0f16;box-shadow:0 0 10px rgba(212,175,106,0.8)"></div>`,
    iconSize:[big?16:11, big?16:11]
  });

  const markers = [];
  locations.forEach((loc, i)=>{
    const m = L.marker([loc.lat, loc.lon], { icon: goldIcon(i===0) }).addTo(leafletMap);
    const locDirections = loc.directionsUrl || `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lon}`;
    m.bindPopup(`
      <div style="text-align:center;min-width:150px">
        <a href="${locDirections}" target="_blank" rel="noopener noreferrer" style="display:block">
          <img src="${loc.photo}" style="width:100%;height:90px;object-fit:cover;border-radius:8px;margin-bottom:6px;display:block" onerror="this.style.display='none'">
        </a>
        <b style="font-size:0.85rem">${loc.name}</b><br>
        <a href="${locDirections}" target="_blank" rel="noopener noreferrer" style="color:#d4af6a;font-size:0.78rem">Directions →</a>
      </div>
    `);
    markers.push(m);
  });

  if(locations.length > 1){
    leafletMap.fitBounds(L.latLngBounds(locations.map(l=>[l.lat,l.lon])), { padding:[36,36] });
  } else {
    leafletMap.setView([country.lat, country.lon], 6);
  }

  const directionsUrl = country.directionsUrl || `https://www.google.com/maps/dir/?api=1&destination=${country.lat},${country.lon}`;
  const directionsBtn = document.getElementById('panelDirections');
  directionsBtn.onclick = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    window.location.href = directionsUrl;
  };
  directionsBtn.onpointerup = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    window.location.href = directionsUrl;
  };

  // thumbnail strip
  const strip = document.getElementById('placesStrip');
  strip.innerHTML = '';
  locations.forEach((loc, i)=>{
    const card = document.createElement('div');
    card.className = 'place-card' + (i===0 ? ' active' : '');
    card.innerHTML = `<img src="${loc.photo}" onerror="this.style.display='none'"><div class="pname">${loc.name}</div>`;
    if(loc.directionsUrl){
      card.setAttribute('title','Tap photo to open directions');
      card.setAttribute('aria-label',`Open directions to ${loc.name}`);
    }
    card.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      if(loc.directionsUrl){
        window.open(loc.directionsUrl, '_blank', 'noopener,noreferrer');
        return;
      }
      strip.querySelectorAll('.place-card').forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
      leafletMap.flyTo([loc.lat, loc.lon], 11, { duration:1.1 });
      markers[i].openPopup();
    });
    strip.appendChild(card);
  });

  setTimeout(()=>{ if(leafletMap) leafletMap.invalidateSize(); }, 350);
}

function openPanel(country){
  const panelImgEl = document.getElementById('panelImg');
  panelImgEl.src = country.photo;
  panelImgEl.onerror = function(){ this.style.opacity=0; };
  if(country.dynamic){
    panelImgEl.style.objectFit = 'contain';
    panelImgEl.style.background = '#0a1420';
    panelImgEl.style.padding = '10vh 20vw';
  } else {
    panelImgEl.style.objectFit = 'cover';
    panelImgEl.style.background = '';
    panelImgEl.style.padding = '0';
  }
  document.getElementById('panelTitle').textContent = country.name;
  document.getElementById('statPop').textContent = country.population;
  document.getElementById('statArea').textContent = country.area;
  document.getElementById('statTz').textContent = country.tz ? country.tz.replace('_',' ') : 'Live lookup';
  document.getElementById('statWinter').textContent = country.winter;
  document.getElementById('statSummer').textContent = country.summer;
  document.getElementById('panelBlurb').textContent = country.blurb;

  renderCountryMap(country);
  document.getElementById('panelFullMap').href =
    `https://www.openstreetmap.org/?mlat=${country.lat}&mlon=${country.lon}#map=11/${country.lat}/${country.lon}`;

  const tempEl = document.getElementById('statTemp');
  const weatherEl = document.getElementById('statWeather');
  const feelsEl = document.getElementById('statFeels');
  const humidityEl = document.getElementById('statHumidity');
  const windEl = document.getElementById('statWind');
  tempEl.textContent = '…'; weatherEl.textContent = '…'; feelsEl.textContent = '…'; humidityEl.textContent = '…'; windEl.textContent = '…';

  fetchLiveWeather(country.lat, country.lon).then(w=>{
    if(!w){ tempEl.textContent='N/A'; weatherEl.textContent='N/A'; feelsEl.textContent='N/A'; humidityEl.textContent='N/A'; windEl.textContent='N/A'; return; }
    const [icon,label] = WEATHER_CODES[w.code] || ['🌍','Unknown'];
    tempEl.textContent = `${Math.round(w.temp)}°C`;
    weatherEl.textContent = `${icon} ${label}`;
    feelsEl.textContent = `${Math.round(w.feels)}°C`;
    humidityEl.textContent = `${Math.round(w.humidity)}%`;
    windEl.textContent = `${Math.round(w.wind)} km/h`;
  });

  clearInterval(clockTimer);
  const updateClock = ()=>{
    let timeStr;
    if(country.tz){
      timeStr = new Intl.DateTimeFormat('en-US', {
        hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true, timeZone: country.tz
      }).format(new Date());
    } else {
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset()*60000;
      const target = new Date(utcMs + (country.utcOffsetMinutes||0)*60000);
      timeStr = target.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true });
    }
    document.getElementById('statTime').textContent = timeStr;
  };
  updateClock();
  clockTimer = setInterval(updateClock, 1000);

  panel.classList.add('open');
  document.body.classList.add('panel-is-open');
}
function closePanel(){
  panel.classList.remove('open');
  clearInterval(clockTimer);
  autoRotate = true;
  flying = false;
  dragging = false;
  document.body.classList.remove('panel-is-open');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  setRotateMode(false);
  // Force the actual page to the home hero after the fixed panel is removed.
  const goHome = ()=>{
    window.scrollTo(0,0);
    if(document.scrollingElement) document.scrollingElement.scrollTop = 0;
  };
  requestAnimationFrame(()=>{
    requestAnimationFrame(goHome);
    setTimeout(goHome, 80);
  });
}
window.__closePanel = closePanel;

const panelCloseBtn = document.getElementById('panelClose');
if(panelCloseBtn){
  const closeFromUser = (e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    closePanel();
  };
  panelCloseBtn.addEventListener('click', closeFromUser, true);
  panelCloseBtn.addEventListener('pointerup', closeFromUser, true);
  panelCloseBtn.addEventListener('touchend', closeFromUser, {passive:false, capture:true});
}
window.closeMusafirHome = closePanel;
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && panel.classList.contains('open')) closePanel();
});

/* =========================================================
   SEARCH + CHIPS
========================================================= */
const datalist = document.getElementById('countryList');
COUNTRIES.forEach(c=>{ const o=document.createElement('option'); o.value=c.name; datalist.appendChild(o); });

function parseUtcOffset(tzStr){
  const m = (tzStr||'').match(/UTC([+-])(\d{2}):(\d{2})/);
  if(!m) return 0;
  const sign = m[1]==='-' ? -1 : 1;
  return sign*(parseInt(m[2])*60+parseInt(m[3]));
}

const PEOPLE_ALIASES = {
  "gorav patyal":"Gorav Patyal", "gourav patyal":"Gorav Patyal", "goravpatyal":"Gorav Patyal",
  "goravpatya":"Gorav Patyal", "gorav":"Gorav Patyal", "gourav":"Gorav Patyal", "codetocreation":"Gorav Patyal",
  "arinish kumar":"Arinish Kumar (Nishu)", "arinish":"Arinish Kumar (Nishu)", "nishu":"Arinish Kumar (Nishu)", "dream decors":"Arinish Kumar (Nishu)",
  "kuldeep singh":"Kuldeep Singh", "kuldeep":"Kuldeep Singh", "shreeganesh glass house":"Kuldeep Singh", "shreeganesh":"Kuldeep Singh",
  "arjun":"Arjun (Panju Don)", "panju don":"Arjun (Panju Don)", "panjudon":"Arjun (Panju Don)", "pajgotra":"Arjun (Panju Don)"
};
function checkPeopleSearch(val){
  const key = val.trim().toLowerCase();
  for(const alias in PEOPLE_ALIASES){
    if(key === alias || key.includes(alias)) return PEOPLE_ALIASES[alias];
  }
  return null;
}

async function doSearch(){
  const raw = document.getElementById('searchInput').value.trim();
  const val = raw.toLowerCase();
  if(!val) return;

  const personMatch = checkPeopleSearch(raw);
  if(personMatch){
    document.getElementById('searchMsg').textContent = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('chatPanel').classList.add('open');
    chatOpen = true;
    document.getElementById('chatInput').value = `Tell me about ${personMatch}`;
    sendChat();
    return;
  }

  const match = COUNTRIES.find(c => c.name.toLowerCase() === val) ||
                COUNTRIES.find(c => c.name.toLowerCase().includes(val));
  if(match){ flyTo(match); return; }

  document.getElementById('searchMsg').textContent = 'Looking that up…';
  try{
    const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(raw)}?fields=name,capital,population,area,region,subregion,latlng,flags,timezones`);
    if(!res.ok) throw new Error('not found');
    const list = await res.json();
    const c = list[0];
    if(!c || !c.latlng) throw new Error('no coords');
    const dynCountry = {
      name: c.name.common,
      lat: c.latlng[0], lon: c.latlng[1],
      utcOffsetMinutes: parseUtcOffset(c.timezones && c.timezones[0]),
      population: c.population ? c.population.toLocaleString() : 'N/A',
      area: c.area ? `${Math.round(c.area).toLocaleString()} km²` : 'N/A',
      winter:'—', summer:'—',
      photo: c.flags?.svg || c.flags?.png || '',
      blurb: `${c.capital?.[0] ? c.capital[0]+' is the capital of ' : ''}${c.name.common}, located in ${c.subregion || c.region || 'the world'}. This country isn't in Musafir's curated deep-dive list yet, but here's its live basic data.`,
      dynamic:true
    };
    document.getElementById('searchMsg').textContent = '';
    flyTo(dynCountry);
  }catch(e){
    document.getElementById('searchMsg').textContent = `Couldn't find "${raw}" — check the spelling and try again.`;
  }
}
document.getElementById('searchBtn').addEventListener('click', doSearch);
document.getElementById('searchInput').addEventListener('keydown', e=>{ if(e.key==='Enter') doSearch(); });

const chipNames = ["India","Japan","France","UAE","Greece","Maldives","Jammu","Russia","Vaishno Devi"];
const chipsEl = document.getElementById('chips');
chipNames.forEach(n=>{
  const c = COUNTRIES.find(x=>x.name===n);
  const b = document.createElement('button');
  b.className='chip'; b.textContent=n;
  b.addEventListener('click', ()=>flyTo(c));
  chipsEl.appendChild(b);
});

/* =========================================================
   CUSTOM CURSOR
========================================================= */
if(window.matchMedia('(pointer:fine)').matches){
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let rx=0, ry=0, mx=0, my=0;
  window.addEventListener('mousemove', e=>{
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  });
  (function loop(){
    rx += (mx-rx)*0.18; ry += (my-ry)*0.18;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
}

/* =========================================================
   AI CHAT — Anthropic API
========================================================= */
const chatBtn = document.getElementById('chatBtn');
const chatPanel = document.getElementById('chatPanel');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
let chatHistory = [];
let chatOpen = false;

chatBtn.addEventListener('click', ()=>{
  chatOpen = !chatOpen;
  chatPanel.classList.toggle('open', chatOpen);
});

function addMsg(text, who){
  const d = document.createElement('div');
  d.className = 'msg '+who;
  d.textContent = text;
  chatBody.appendChild(d);
  chatBody.scrollTop = chatBody.scrollHeight;
  return d;
}

async function sendChat(){
  const text = chatInput.value.trim();
  if(!text) return;
  chatInput.value='';
  addMsg(text, 'user');
  chatHistory.push({ role:'user', content:text });

  const typingEl = document.createElement('div');
  typingEl.className='msg ai typing';
  typingEl.innerHTML='<span></span><span></span><span></span>';
  chatBody.appendChild(typingEl);
  chatBody.scrollTop = chatBody.scrollHeight;

  const systemPrompt = `You are Musafir AI, the friendly in-app travel assistant for a globe-exploring website called Musafir.
Reply in a warm, concise way (2-5 sentences max unless asked for detail). If the user writes in Hinglish/Hindi, reply in the same casual Hinglish tone; otherwise match their language.

About the creator (share this naturally if someone asks who built Musafir, who the developer is, or about "goravpatya" / "codetocreation"):
- Musafir was designed and developed by Gorav Patyal — he is your (Musafir AI's) creator/owner.
- He is a professional web developer, web designer, and SEO specialist.
- He also works with AI/builds AI-powered features into his projects.
- He is based in Jammu, India.
- He owns the codetocreation Instagram channel (@codetocreation, also known as goravpatya).
- Some of the websites he has built: avengersuniverse.vercel.app, theleafandloretea.vercel.app, a Vikings-themed website project, and this Musafir website itself.
Only mention these details when the user actually asks about the creator/developer/site — don't bring it up unprompted in unrelated answers.

You also personally know a few local business owners — only bring these up if the user specifically asks about them by name or business:
- Arinish Kumar, also known as "Nishu", is the owner of Dream Decors, with his shop located at Porkhoo Morh. He is a professional trader known for motivating everyone around him.
- Kuldeep Singh owns Shreeganesh Glass House, located in Kot Bhalwal, near Ring Road, Jammu. He is a professional in glass cutting and aluminium work, handling all types of modern glass/aluminium fabrication. Contact: 9682314529.
- Arjun is the owner of Pajgotra Fastfood, with his shop in Kot. Locally, everyone knows him by the name "Panju Don".

You have this curated dataset of countries and places currently on the globe — use it when relevant:
${JSON.stringify(COUNTRIES.map(c=>({name:c.name, population:c.population, area:c.area, timezone:c.tz, winter_avg:c.winter, summer_avg:c.summer, about:c.blurb})))}
For places not in this list, answer using your own general knowledge, and mention they aren't on the interactive globe yet if relevant. You can discuss population, area, time zones, current or seasonal temperature, best time to visit, culture, food, or general travel advice.`;

  try{
    const res = await fetch("/api/chat", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({
        system: systemPrompt,
        messages: chatHistory
      })
    });
    const data = await res.json();
    typingEl.remove();
    if(data.error){
      addMsg("⚠️ " + data.error, 'ai');
      return;
    }
    const reply = (data.content||[]).map(b=>b.text||'').join('\n').trim() || "Sorry, I couldn't fetch that right now.";
    addMsg(reply, 'ai');
    chatHistory.push({ role:'assistant', content:reply });
  }catch(err){
    typingEl.remove();
    addMsg("Connection hiccup — try asking again in a moment.", 'ai');
  }
}
document.getElementById('chatSend').addEventListener('click', sendChat);
chatInput.addEventListener('keydown', e=>{ if(e.key==='Enter') sendChat(); });
