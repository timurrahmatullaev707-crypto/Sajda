const UZBEK_CITIES = [
  { name: 'Toshkent', region: 'Toshkent', country: 'O‘zbekiston', lat: 41.2995, lon: 69.2401 },
  { name: 'Samarqand', region: 'Samarqand', country: 'O‘zbekiston', lat: 39.6542, lon: 66.9597 },
  { name: 'Buxoro', region: 'Buxoro', country: 'O‘zbekiston', lat: 39.7747, lon: 64.4286 },
  { name: 'Andijon', region: 'Andijon', country: 'O‘zbekiston', lat: 40.7821, lon: 72.3446 },
  { name: 'Namangan', region: 'Namangan', country: 'O‘zbekiston', lat: 40.999, lon: 71.669 },
  { name: 'Fargʻona', region: 'Fargʻona', country: 'O‘zbekiston', lat: 40.3864, lon: 71.7866 },
  { name: 'Qarshi', region: 'Qashqadaryo', country: 'O‘zbekiston', lat: 38.8608, lon: 65.7997 },
  { name: 'Navoiy', region: 'Navoiy', country: 'O‘zbekiston', lat: 40.0844, lon: 65.3792 },
  { name: 'Jizzax', region: 'Jizzax', country: 'O‘zbekiston', lat: 40.1158, lon: 67.8422 },
  { name: 'Termiz', region: 'Surxondaryo', country: 'O‘zbekiston', lat: 37.216, lon: 67.2788 },
  { name: 'Guliston', region: 'Sirdaryo', country: 'O‘zbekiston', lat: 40.4897, lon: 68.7847 },
  { name: 'Urganch', region: 'Xorazm', country: 'O‘zbekiston', lat: 41.5514, lon: 60.6317 },
  { name: 'Nukus', region: 'Qoraqalpogʻiston', country: 'O‘zbekiston', lat: 42.4531, lon: 59.6103 },
  { name: 'Xiva', region: 'Xorazm', country: 'O‘zbekiston', lat: 41.3783, lon: 60.3639 },
  { name: 'Chirchiq', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 41.4689, lon: 69.5822 },
  { name: 'Angren', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 40.9069, lon: 70.0283 },
  { name: 'Olmaliq', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 40.8447, lon: 69.5983 },
  { name: 'Bekobod', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 40.2208, lon: 69.2697 },
  { name: 'Yangiyo‘l', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 41.1121, lon: 69.0587 },
  { name: 'Nurafshon', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 41.0381, lon: 69.3625 },
  { name: 'Parkent', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 41.2944, lon: 69.6769 },
  { name: 'Zangiota', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 41.5189, lon: 69.1722 },
  { name: 'Ohangaron', region: 'Toshkent viloyati', country: 'O‘zbekiston', lat: 40.9061, lon: 69.6383 },
  { name: 'Kattaqo‘rg‘on', region: 'Samarqand', country: 'O‘zbekiston', lat: 39.8989, lon: 66.2561 },
  { name: 'Shahrisabz', region: 'Qashqadaryo', country: 'O‘zbekiston', lat: 39.0578, lon: 66.8342 },
  { name: 'Denov', region: 'Surxondaryo', country: 'O‘zbekiston', lat: 38.2762, lon: 67.8983 },
  { name: 'Chust', region: 'Namangan', country: 'O‘zbekiston', lat: 41.0031, lon: 71.2373 },
  { name: 'Marg‘ilon', region: 'Farg‘ona', country: 'O‘zbekiston', lat: 40.4724, lon: 71.7246 },
  { name: 'Qo‘qon', region: 'Farg‘ona', country: 'O‘zbekiston', lat: 40.5286, lon: 70.9425 },
  { name: 'Rishton', region: 'Farg‘ona', country: 'O‘zbekiston', lat: 40.3567, lon: 71.2846 },
  { name: 'Zarafshon', region: 'Navoiy', country: 'O‘zbekiston', lat: 41.5783, lon: 64.2044 },
  { name: 'Shirin', region: 'Sirdaryo', country: 'O‘zbekiston', lat: 40.2239, lon: 69.0917 },
  { name: 'Yangiyer', region: 'Sirdaryo', country: 'O‘zbekiston', lat: 40.2750, lon: 68.8228 },
  { name: 'Mo‘ynoq', region: 'Qoraqalpog‘iston', country: 'O‘zbekiston', lat: 43.7683, lon: 59.0214 }
];

const SAJDA_CONFIG = {
  timezone: 'Asia/Tashkent',
  defaultCity: 'Toshkent',
  ramadanStart: new Date('2026-02-18T00:00:00+05:00'),
  ramadanEnd: new Date('2026-03-19T23:59:59+05:00'),
  cityProfiles: Object.fromEntries(UZBEK_CITIES.map((city) => [city.name, { lat: city.lat, lon: city.lon, region: city.region, country: city.country }]))
};

const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
const prayerNameMap = {
  Fajr: 'Bomdod',
  Sunrise: 'Quyosh chiqishi',
  Dhuhr: 'Peshin',
  Asr: 'Asr',
  Maghrib: 'Shom',
  Isha: 'Xufton'
};

const quranCollection = [
  { number: 1, name: 'Al-Fatihah', translation: 'Fotiha surasi', arabic: 'بِسْمِ ٱللّٰهِ', category: 'Namoz', ayahCount: 7 },
  { number: 2, name: 'Al-Baqarah', translation: 'Baqara surasi', arabic: 'الم', category: 'Tafsir', ayahCount: 286 },
  { number: 3, name: 'Ali Imran', translation: 'Imron surasi', arabic: 'الم', category: 'Tafsir', ayahCount: 200 },
  { number: 4, name: 'An-Nisa', translation: 'Niso surasi', arabic: 'يٰسۤ', category: 'Hayot', ayahCount: 176 },
  { number: 17, name: 'Al-Isra', translation: 'Isro surasi', arabic: 'سَبِّحِ', category: 'Travel', ayahCount: 111 },
  { number: 18, name: 'Al-Kahf', translation: 'Kahf surasi', arabic: 'ٱلْحَمْدُ', category: 'Maqsad', ayahCount: 110 },
  { number: 36, name: 'Ya-Sin', translation: 'Yosin surasi', arabic: 'يس', category: 'Qalb', ayahCount: 83 },
  { number: 55, name: 'Ar-Rahman', translation: 'Rahmon surasi', arabic: 'ٱلرَّحْمَٰنُ', category: 'Rahmat', ayahCount: 78 },
  { number: 67, name: 'Al-Mulk', translation: 'Mulk surasi', arabic: 'تَبَارَكَ', category: 'Qidirlash', ayahCount: 30 },
  { number: 94, name: 'Ash-Sharh', translation: 'Sharh surasi', arabic: 'أَلَمْ', category: 'Kamtarlik', ayahCount: 8 }
];

const duaCategories = ['Barchasi', 'Morning', 'Evening', 'Sleep', 'Food', 'Travel', 'Protection', 'Daily life'];
const duaCollection = [
  { id: 1, title: 'Tong duo', category: 'Morning', arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا', transliteration: 'Allohumma bika asbahna', translation: 'Ey Alloh, Sen bilan tongga yetdik.', favorite: false },
  { id: 2, title: 'Kechki duo', category: 'Evening', arabic: 'أَمْسَيْنَا وَأَمْسَى', transliteration: 'Amsayna', translation: 'Kechga kiramiz, barcha narsalar Sening ixtiyoringda.', favorite: false },
  { id: 3, title: 'Uyqudan oldingi duo', category: 'Sleep', arabic: 'بِسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', transliteration: 'Bismika allahumma amutu wa ahya', translation: 'Ey Alloh, Sening isming bilan o\'laman va tirilaman.', favorite: false },
  { id: 4, title: 'Ovqat oldidan dua', category: 'Food', arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيهِ', transliteration: 'Allohumma barik lana fihi', translation: 'Ey Alloh, bizga unda baraka bergin.', favorite: false },
  { id: 5, title: 'Sayohat duo', category: 'Travel', arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا', transliteration: 'Subhana allaziy sakhkhara lana hazha', translation: 'Buni bizga qulay qilib bergan Zoti qudratli Allohga pokliklar bo\'lsin.', favorite: false },
  { id: 6, title: 'Panoh duo', category: 'Protection', arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', transliteration: "A'udzu billahi minash shaytanir rajim", translation: 'Mardud shaytondan Allohga panoh so\'rayman.', favorite: false },
  { id: 7, title: 'Kunlik iltijo', category: 'Daily life', arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً', transliteration: 'Rabbana atina fid-dunya hasanatan', translation: 'Ey Rabbimiz, bizga dunyoda yaxshilik ber.', favorite: false },
  { id: 8, title: 'Tongda duo', category: 'Morning', arabic: 'اللَّهُمَّ أَصْبَحْنَا', transliteration: 'Allohumma asbahna', translation: 'Ey Alloh, bugun tongga yetdik.', favorite: false }
];

const dailyVerses = [
  { text: 'Men haq yo\'lga yo\'naltiraman; kim meni ergashsa, haqiqiy yo\'l topadi.', ref: 'Al-Anbiya 21:73' },
  { text: 'Rozi bo\'lgani uchun Alloh o\'z bandalarini bulutlar ostida olib keladi.', ref: 'Al-Baqarah 2:286' },
  { text: 'Allohning rahmatidan umid uzmang; u ko\'plarini mag\'firat qiladi.', ref: 'An-Nisa 4:48' },
  { text: 'Alloh uchun eng oliy maqomga erishing.', ref: 'Al-Mulk 67:2' }
];

const dailyDuas = ['Ey Alloh, mening qalbimni tozala.', 'Ey Rabbim, menga sabr va imon ber.', 'Ey Alloh, hayotimni barakali qilmang.', 'Ey Alloh, mening ishlarimni to\'g\'ri qilmang.'];
const dailyReminders = ['Namozni vaqtida o\'qish uchun eslatma oling.', 'Kattaroq rahmat uchun bir daqiqalik zikr qiling.', 'Har bir kishiga xayr so\'zi bilan yondashing.', 'Yaxshi niyat bilan bugun boshlang.'];
const dailyDeeds = ['Bir kimsaga do\' st qilish.', 'Qur\'onning bir oyatiga nazar soling.', 'Yashash joyingizdagi ifloslikni tozalang.', 'Aylanishi kerak bo\'lgan bir kishi bilan muomala qiling.'];

const appState = {
  selectedCity: localStorage.getItem('sajda-city') || SAJDA_CONFIG.defaultCity,
  manualCitySelected: localStorage.getItem('sajda-city-source') === 'manual',
  duaFilter: 'Barchasi',
  quranSearch: '',
  locationState: {
    latitude: null,
    longitude: null,
    accuracy: null,
    city: null,
    region: null,
    country: null,
    source: 'manual'
  },
  cityCoordinates: getStoredJSON('sajda-city-coordinates', null)
};

const cityService = {
  list: UZBEK_CITIES,
  onlineResults: new Map(),
  getAll() {
    return [...this.list];
  },
  getByName(name) {
    const normalizedName = normalizeCityQuery(name);
    return this.list.find((city) => normalizeCityQuery(city.name) === normalizedName)
      || [...this.onlineResults.values()].flat().find((city) => normalizeCityQuery(city.name) === normalizedName)
      || null;
  },
  search(query) {
    const cleaned = normalizeCityQuery(query);
    if (!cleaned) return this.list;
    return this.list.filter((city) => (
      normalizeCityQuery(city.name).includes(cleaned)
      || normalizeCityQuery(city.region).includes(cleaned)
      || normalizeCityQuery(city.country).includes(cleaned)
    )).slice(0, 8);
  },
  async searchOnline(query, signal) {
    const cleaned = String(query || '').trim();
    if (cleaned.length < 3) return [];
    const cacheKey = normalizeCityQuery(cleaned);
    if (this.onlineResults.has(cacheKey)) return this.onlineResults.get(cacheKey);

    const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
    url.search = new URLSearchParams({
      name: cleaned,
      count: '8',
      language: 'uz',
      format: 'json',
      countryCode: 'UZ'
    });
    const response = await fetchWithTimeout(url.toString(), { headers: { Accept: 'application/json' }, signal }, 8000);
    if (!response.ok) throw new Error('City search service unavailable');
    const payload = await response.json();
    const results = (Array.isArray(payload.results) ? payload.results : []).map((place) => ({
      name: place.name,
      region: place.admin1 || place.admin2 || 'O‘zbekiston',
      country: 'O‘zbekiston',
      lat: Number(place.latitude),
      lon: Number(place.longitude),
      source: 'geocoding'
    })).filter((place) => place.name
      && Number.isFinite(place.lat) && place.lat >= -90 && place.lat <= 90
      && Number.isFinite(place.lon) && place.lon >= -180 && place.lon <= 180);
    this.onlineResults.set(cacheKey, results);
    return results;
  },
  getNearest(latitude, longitude) {
    if (!Number.isFinite(Number(latitude)) || Number(latitude) < -90 || Number(latitude) > 90
      || !Number.isFinite(Number(longitude)) || Number(longitude) < -180 || Number(longitude) > 180) {
      return this.getByName(appState.selectedCity) || this.list[0];
    }

    let nearest = this.list[0];
    let shortestDistance = Number.POSITIVE_INFINITY;

    this.list.forEach((city) => {
      const distance = haversineDistanceKm(Number(latitude), Number(longitude), city.lat, city.lon);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearest = city;
      }
    });

    return nearest;
  }
};

function normalizeCityQuery(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[ʻʼ‘’`´]/g, "'")
    .trim()
    .toLowerCase();
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 10000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  const externalSignal = options.signal;
  const abortFromCaller = () => controller.abort();
  if (externalSignal) {
    if (externalSignal.aborted) controller.abort();
    else externalSignal.addEventListener('abort', abortFromCaller, { once: true });
  }
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
    if (externalSignal) externalSignal.removeEventListener('abort', abortFromCaller);
  }
}

let nominatimRequestChain = Promise.resolve();
let lastNominatimRequestAt = 0;

function requestNominatim(url) {
  const request = nominatimRequestChain.then(async () => {
    const waitMs = Math.max(0, 1100 - (Date.now() - lastNominatimRequestAt));
    if (waitMs) await new Promise((resolve) => setTimeout(resolve, waitMs));
    lastNominatimRequestAt = Date.now();
    return fetchWithTimeout(url, {
      headers: { 'Accept-Language': 'uz,en', Accept: 'application/json' }
    }, 8000);
  });
  nominatimRequestChain = request.then(() => undefined, () => undefined);
  return request;
}
const locationService = {
  isSecureContext() {
    return window.isSecureContext
      || (window.location.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(window.location.hostname));
  },
  async requestCurrentLocation() {
    if (!this.isSecureContext()) {
      const error = new Error('Secure connection required for location');
      error.code = 'INSECURE_CONTEXT';
      throw error;
    }
    if (!navigator.geolocation) {
      const error = new Error('Geolocation is unsupported');
      error.code = 'UNSUPPORTED';
      throw error;
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90
            || !Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
            const error = new Error('Geolocation returned invalid coordinates');
            error.code = 'INVALID_POSITION';
            reject(error);
            return;
          }
          resolve({ latitude, longitude, accuracy, timestamp: position.timestamp });
        },
        (error) => reject(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
      );
    });
  },

  async reverseGeocode(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`;
    const response = await requestNominatim(url);
    if (!response.ok) throw new Error('Reverse geocoding unavailable');

    const data = await response.json();
    const address = data && data.address ? data.address : {};
    const city = address.city || address.town || address.village || address.municipality || address.county || '';
    const region = address.state || address.region || address.province || '';
    const country = address.country || '';
    if (!city && !region) return null;

    return { city, region, country, display: [city, region, country].filter(Boolean).join(', ') };
  }
};

const mosqueService = {
  cache: new Map(),
  async getNearbyMosques(latitude, longitude, forceRefresh = false) {
    const cacheKey = `${latitude.toFixed(3)},${longitude.toFixed(3)}`;
    const cached = this.cache.get(cacheKey);
    if (!forceRefresh && cached && Date.now() - cached.timestamp < 300000) return cached.items;
    const latOffset = 8000 / 111320;
    const lonOffset = latOffset / Math.max(0.2, Math.cos((latitude * Math.PI) / 180));
    const searchUrl = new URL('https://nominatim.openstreetmap.org/search');
    searchUrl.search = new URLSearchParams({
      format: 'jsonv2',
      q: 'mosque',
      viewbox: `${longitude - lonOffset},${latitude + latOffset},${longitude + lonOffset},${latitude - latOffset}`,
      bounded: '1',
      limit: '30',
      addressdetails: '1',
      extratags: '1'
    });
    let nominatimError = null;
    try {
      const response = await requestNominatim(searchUrl.toString());
      if (!response.ok) throw new Error(`Nominatim returned ${response.status}`);
      const payload = await response.json();
      const items = (Array.isArray(payload) ? payload : [])
        .filter((place) => place.category === 'amenity'
          && ['place_of_worship', 'mosque'].includes(place.type)
          && (!place.extratags?.religion || /muslim|islam/i.test(place.extratags.religion)))
        .map((place) => {
          const lat = Number(place.lat);
          const lon = Number(place.lon);
          if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
          return {
            id: `${place.osm_type || 'place'}-${place.osm_id || place.place_id}`,
            name: place.name || place.extratags?.['name:uz'] || place.display_name?.split(',')[0] || 'Masjid',
            address: place.display_name || 'Manzil xarita ma’lumotida ko‘rsatilmagan',
            distance: haversineDistanceKm(latitude, longitude, lat, lon),
            lat,
            lon,
            phone: place.extratags?.phone || place.extratags?.['contact:phone'] || '',
            openingHours: place.extratags?.opening_hours || '',
            rating: Number(place.extratags?.rating) || null,
            image: typeof place.extratags?.image === 'string' && /^https:\/\//i.test(place.extratags.image)
              ? place.extratags.image
              : ''
          };
        })
        .filter(Boolean)
        .filter((place) => place.distance <= 8)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 24);
      if (items.length) {
        this.cache.set(cacheKey, { items, timestamp: Date.now() });
        return items;
      }
    } catch (error) {
      nominatimError = error;
    }

    const overpassQuery = `
      [out:json][timeout:10];
      (
        node["amenity"="place_of_worship"]["religion"="muslim"](around:8000,${latitude},${longitude});
        way["amenity"="place_of_worship"]["religion"="muslim"](around:8000,${latitude},${longitude});
        relation["amenity"="place_of_worship"]["religion"="muslim"](around:8000,${latitude},${longitude});
        node["building"="mosque"](around:8000,${latitude},${longitude});
        way["building"="mosque"](around:8000,${latitude},${longitude});
      );
      out tags center;
    `;

    const endpoints = [
      'https://overpass-api.de/api/interpreter',
      'https://overpass.kumi.systems/api/interpreter'
    ];
    let lastError;
    for (const endpoint of endpoints) {
      try {
        const url = `${endpoint}?data=${encodeURIComponent(overpassQuery)}`;
        const response = await fetchWithTimeout(url, { headers: { Accept: 'application/json' } }, 8000);
        if (!response.ok) throw new Error(`Mosque service returned ${response.status}`);
        const payload = await response.json();
        const seen = new Set();
        const items = (Array.isArray(payload.elements) ? payload.elements : [])
          .map((element) => {
            const tags = element.tags || {};
            const lon = element.lon ?? (element.center && element.center.lon);
            const lat = element.lat ?? (element.center && element.center.lat);
            if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
            const id = `${element.type || 'place'}-${element.id}`;
            if (seen.has(id)) return null;
            seen.add(id);
            const address = [
              tags['addr:street'],
              tags['addr:housenumber'],
              tags['addr:suburb'] || tags['addr:city']
            ].filter(Boolean).join(', ');
            return {
              id,
              name: tags.name || tags['name:uz'] || tags['name:en'] || 'Nomsiz masjid',
              address: address || tags['addr:full'] || 'Manzil xarita ma’lumotida ko‘rsatilmagan',
              distance: haversineDistanceKm(latitude, longitude, lat, lon),
              lat,
              lon,
              phone: tags.phone || tags['contact:phone'] || '',
              openingHours: tags.opening_hours || '',
              rating: Number(tags.rating) || null,
              image: typeof tags.image === 'string' && /^https:\/\//i.test(tags.image) ? tags.image : ''
            };
          })
          .filter(Boolean)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 24);
        this.cache.set(cacheKey, { items, timestamp: Date.now() });
        return items;
      } catch (error) {
        lastError = error;
      }
    }

    throw new Error('Mosque data services are unavailable', { cause: lastError || nominatimError });
  }
};

const quranService = {
  getAll() {
    return quranCollection;
  },
  getById(id) {
    return quranCollection.find((surah) => surah.number === Number(id)) || null;
  },
  getSurahAudioUrl(id) {
    return `https://download.quranicaudio.com/quran/abdul_basit_murattal/${String(Number(id)).padStart(3, '0')}.mp3`;
  },
  getAyahAudioUrl(surahId, ayahId) {
    return `https://everyayah.com/data/Alafasy_128kbps/${String(Number(surahId)).padStart(3, '0')}${String(Number(ayahId)).padStart(3, '0')}.mp3`;
  }
};

const duaService = {
  getAll() {
    return duaCollection;
  },
  getById(id) {
    return duaCollection.find((item) => item.id === Number(id)) || null;
  },
  getAudioUrl(id) {
    const item = this.getById(id);
    const reciterIndex = ((Number(id) || 1) % 10) + 1;
    return `https://download.quranicaudio.com/quran/abdul_basit_murattal/${String(reciterIndex).padStart(3, '0')}.mp3`;
  }
};

const audioService = {
  activeSource: null,
  player: null,
  status: null,
  title: null,
  currentTime: null,
  duration: null,
  progress: null,
  volume: null,
  mute: null,
  playButton: null,
  audioStateKey: 'sajda-audio-state',

  ensurePlayer() {
    if (this.player) return this.player;

    const player = document.getElementById('global-audio');
    const status = document.getElementById('audio-status');
    const title = document.getElementById('audio-title');
    const currentTime = document.getElementById('audio-current-time');
    const duration = document.getElementById('audio-duration');
    const progress = document.getElementById('audio-progress');
    const volume = document.getElementById('audio-volume');
    const mute = document.getElementById('audio-mute');
    const playButton = document.getElementById('audio-play-toggle');
    const stopButton = document.getElementById('audio-stop');
    const closeButton = document.getElementById('audio-close');

    this.player = player;
    this.status = status;
    this.title = title;
    this.currentTime = currentTime;
    this.duration = duration;
    this.progress = progress;
    this.volume = volume;
    this.mute = mute;
    this.playButton = playButton;

    if (player) {
      player.volume = 0.8;
      player.addEventListener('loadedmetadata', () => {
        if (this.duration) this.duration.textContent = this.formatTime(player.duration || 0);
      });

      player.addEventListener('timeupdate', () => {
        if (this.currentTime) this.currentTime.textContent = this.formatTime(player.currentTime || 0);
        if (this.progress) {
          const percentage = player.duration ? (player.currentTime / player.duration) * 100 : 0;
          this.progress.value = Math.min(100, Math.max(0, percentage));
        }
        this.persistCurrentState();
      });

      player.addEventListener('play', () => {
        if (this.playButton) this.playButton.textContent = '❚❚';
        if (this.status) this.status.textContent = 'Audio ijro qilinmoqda...';
      });

      player.addEventListener('pause', () => {
        if (this.playButton) this.playButton.textContent = '▶';
      });

      player.addEventListener('ended', () => {
        this.stop();
      });

      player.addEventListener('error', () => {
        if (this.status) this.status.textContent = 'Audio yuklanmadi. Internet aloqangizni tekshiring.';
        if (this.title) this.title.textContent = 'Audio mavjud emas';
      });
    }

    if (progress) {
      progress.addEventListener('input', (event) => {
        const value = Number(event.target.value || 0);
        const player = this.player;
        if (!player || !player.duration) return;
        player.currentTime = (player.duration / 100) * value;
      });
    }

    if (volume) {
      volume.addEventListener('input', (event) => {
        const value = Number(event.target.value || 80) / 100;
        if (this.player) {
          this.player.volume = value;
          if (this.mute) {
            this.mute.textContent = value === 0 ? '🔇' : '🔊';
          }
        }
      });
    }

    if (mute) {
      mute.addEventListener('click', () => {
        if (!this.player) return;
        this.player.muted = !this.player.muted;
        this.mute.textContent = this.player.muted ? '🔇' : '🔊';
      });
    }

    if (playButton) {
      playButton.addEventListener('click', () => {
        if (!this.player || !this.player.src) {
          if (this.status) this.status.textContent = 'Birinchi sura yoki duoni tanlang.';
          return;
        }

        if (this.player.paused) {
          this.player.play().catch(() => {
            if (this.status) this.status.textContent = 'Audio yuklanmadi. Internet aloqangizni tekshiring.';
          });
        } else {
          this.player.pause();
        }
      });
    }

    if (stopButton) {
      stopButton.addEventListener('click', () => this.stop());
    }

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        if (this.player && this.player.pause) this.player.pause();
        const panel = document.getElementById('audio-player-panel');
        if (panel) panel.classList.add('hidden');
      });
    }

    return this.player;
  },

  formatTime(seconds) {
    const total = Number(seconds) || 0;
    const minutes = Math.floor(total / 60);
    const secs = Math.floor(total % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },

  persistCurrentState() {
    if (!this.activeSource) return;
    const state = {
      ...this.activeSource,
      time: this.player ? this.player.currentTime : 0
    };
    localStorage.setItem(this.audioStateKey, JSON.stringify(state));
  },

  saveState({ title, type, id, source, time = 0 }) {
    const state = { title, type, id, source, time };
    localStorage.setItem(this.audioStateKey, JSON.stringify(state));
    this.activeSource = state;
  },

  clearState() {
    this.activeSource = null;
    localStorage.removeItem(this.audioStateKey);
  },

  stop() {
    if (!this.player) return;
    this.player.pause();
    this.player.currentTime = 0;
    if (this.progress) this.progress.value = 0;
    if (this.currentTime) this.currentTime.textContent = '00:00';
    if (this.playButton) this.playButton.textContent = '▶';
    this.clearState();
  },

  async play({ title, type, id, source, label, autoResume = false }) {
    const existing = this.ensurePlayer();
    if (!existing || !source) {
      if (this.status) this.status.textContent = 'Audio mavjud emas. Iltimos, boshqa manbani tanlang.';
      return;
    }

    this.activeSource = { title, type, id, source, time: 0 };

    if (this.title) this.title.textContent = title;
    if (this.status) this.status.textContent = 'Audio yuklanmoqda...';
    if (this.player) {
      const panel = document.getElementById('audio-player-panel');
      if (panel) panel.classList.remove('hidden');
      if (!this.player.paused) {
        this.player.pause();
      }
      const savedState = JSON.parse(localStorage.getItem(this.audioStateKey) || 'null');
      const resumeTime = autoResume && savedState && savedState.source === source ? Number(savedState.time || 0) : 0;
      this.player.src = source;
      this.player.load();
      this.player.muted = false;
      if (this.mute) this.mute.textContent = '🔊';
      if (this.volume) this.volume.value = '80';
      this.player.volume = 0.8;
      this.player.currentTime = resumeTime;
      this.saveState({ title, type, id, source, time: resumeTime });
      try {
        await this.player.play();
      } catch (error) {
        if (this.status) this.status.textContent = 'Audio yuklanmadi. Internet aloqangizni tekshiring.';
      }
    }
  },

  resumeIfAvailable() {
    const saved = localStorage.getItem(this.audioStateKey);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (!parsed || !parsed.source || !parsed.title) return;
      const panel = document.getElementById('audio-player-panel');
      if (panel) panel.classList.remove('hidden');
      const resumeButton = document.createElement('button');
      resumeButton.type = 'button';
      resumeButton.className = 'continue-listening';
      resumeButton.textContent = `Continue listening: ${parsed.title}`;
      resumeButton.addEventListener('click', () => {
        this.play({
          title: parsed.title,
          type: parsed.type,
          id: parsed.id,
          source: parsed.source,
          label: parsed.title,
          autoResume: true
        });
      });
      const status = document.getElementById('audio-status');
      if (status) {
        status.innerHTML = `Continue listening: <span>${parsed.title}</span>`;
        status.appendChild(resumeButton);
      }
    } catch (error) {
      localStorage.removeItem(this.audioStateKey);
    }
  }
};

function getStoredJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function setStoredJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatClock(totalMinutes) {
  const normalized = ((totalMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function parseTimeToMinutes(timeText) {
  const [hours, minutes] = String(timeText).split(':').map(Number);
  return hours * 60 + minutes;
}

function haversineDistanceKm(latitude1, longitude1, latitude2, longitude2) {
  const radians = (degrees) => (degrees * Math.PI) / 180;
  const deltaLatitude = radians(latitude2 - latitude1);
  const deltaLongitude = radians(longitude2 - longitude1);
  const a = Math.sin(deltaLatitude / 2) ** 2
    + Math.cos(radians(latitude1)) * Math.cos(radians(latitude2)) * Math.sin(deltaLongitude / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function getCityData(cityName) {
  return cityService.getByName(cityName);
}

function getCurrentTimeMinutesInTashkent() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Tashkent',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  });
  const parts = formatter.format(now).split(':').map(Number);
  return parts[0] * 60 + parts[1] + parts[2] / 60;
}

function getTashkentDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: SAJDA_CONFIG.timezone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.day}-${values.month}-${values.year}`;
}

function getSelectedCoordinates(cityName = appState.selectedCity) {
  const location = appState.locationState;
  if (location.source === 'gps' && Number.isFinite(location.latitude) && Number.isFinite(location.longitude)) {
    return { latitude: location.latitude, longitude: location.longitude };
  }
  if (cityName === appState.selectedCity && appState.cityCoordinates
    && Number.isFinite(appState.cityCoordinates.latitude)
    && Number.isFinite(appState.cityCoordinates.longitude)) {
    return appState.cityCoordinates;
  }
  const city = getCityData(cityName);
  if (!city || !Number.isFinite(city.lat) || !Number.isFinite(city.lon)) return null;
  return { latitude: city.lat, longitude: city.lon };
}

async function fetchPrayerTimesForCity(cityName, coordinates, signal) {
  const date = getTashkentDateKey();
  const apiUrl = new URL(`https://api.aladhan.com/v1/timings/${date}`);
  apiUrl.search = new URLSearchParams({
    latitude: String(coordinates.latitude),
    longitude: String(coordinates.longitude),
    method: '3',
    school: '1'
  });
  const response = await fetchWithTimeout(apiUrl.toString(), { cache: 'no-store', signal }, 10000);
  if (!response.ok) throw new Error(`Prayer times service returned ${response.status}`);

  const payload = await response.json();
  const timings = payload && payload.data && payload.data.timings;
  if (!timings || payload.code !== 200) throw new Error('Prayer times response was invalid');

  const result = {};
  prayerOrder.forEach((name) => {
    const match = String(timings[name] || '').match(/\d{1,2}:\d{2}/);
    if (!match) throw new Error(`Prayer time missing: ${name}`);
    result[name] = match[0].padStart(5, '0');
  });
  return { cityName, date, times: result };
}

const prayerTimesState = { times: null, cityName: '', date: '', requestId: 0 };
const salahOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
let prayerRequestController;

function updatePrayerCountdown() {
  const { times } = prayerTimesState;
  if (!times) return;

  const nowMinutes = getCurrentTimeMinutesInTashkent();
  const entries = salahOrder.map((name) => ({ name, minutes: parseTimeToMinutes(times[name]) }));
  const next = entries.find((entry) => entry.minutes > nowMinutes) || entries[0];
  const current = [...entries].reverse().find((entry) => entry.minutes <= nowMinutes) || entries[entries.length - 1];
  const nextMinutes = next.minutes > nowMinutes ? next.minutes : next.minutes + 24 * 60;
  const remainingSeconds = Math.max(0, Math.ceil((nextMinutes - nowMinutes) * 60));
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const nextPrayerName = document.getElementById('next-prayer-name');
  if (nextPrayerName) nextPrayerName.textContent = prayerNameMap[next.name];
  const nextPrayerTime = document.getElementById('next-prayer-time');
  if (nextPrayerTime) nextPrayerTime.textContent = times[next.name];
  document.querySelectorAll('[data-prayer-card]').forEach((card) => {
    const active = card.dataset.prayerCard === next.name;
    card.classList.toggle('active', active);
    const label = card.querySelector('small');
    if (label) label.textContent = active ? 'Keyingi' : '';
  });

  const countdownEl = document.getElementById('countdown-timer');
  if (countdownEl) countdownEl.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  const statusLabel = document.getElementById('prayer-status-label');
  if (statusLabel) statusLabel.textContent = prayerNameMap[current.name];
}

function renderPrayerTimes(cityName) {
  const statusEl = document.getElementById('prayer-api-status');
  const retryButton = document.getElementById('prayer-retry-btn');
  const requestId = ++prayerTimesState.requestId;
  if (retryButton) retryButton.hidden = true;
  const coordinates = getSelectedCoordinates(cityName);
  if (!coordinates) {
    prayerTimesState.times = null;
    if (statusEl) statusEl.textContent = 'Bu joy uchun koordinata aniqlanmadi. Internetga ulanib shaharni qayta tanlang.';
    if (retryButton) retryButton.hidden = false;
    return;
  }
  if (prayerRequestController) prayerRequestController.abort();
  prayerRequestController = new AbortController();
  if (statusEl) statusEl.textContent = 'Vaqtlar hisoblanmoqda...';
  fetchPrayerTimesForCity(cityName, coordinates, prayerRequestController.signal)
    .then((result) => {
      if (requestId !== prayerTimesState.requestId || cityName !== appState.selectedCity) return;
      prayerTimesState.times = result.times;
      prayerTimesState.cityName = result.cityName;
      prayerTimesState.date = result.date;
      prayerOrder.forEach((name) => {
        const field = document.getElementById(`time-${name.toLowerCase()}`);
        if (field) field.textContent = result.times[name];
      });
      if (statusEl) statusEl.textContent = `Aladhan • ${cityName} • Toshkent vaqti (UTC+5)`;
      if (retryButton) retryButton.hidden = true;
      updatePrayerCountdown();
      updateRamadanPrayerTimes();
    })
    .catch(() => {
      if (requestId !== prayerTimesState.requestId) return;
      prayerTimesState.times = null;
      prayerOrder.forEach((name) => {
        const field = document.getElementById(`time-${name.toLowerCase()}`);
        if (field) field.textContent = '--:--';
      });
      document.querySelectorAll('[data-prayer-card]').forEach((card) => card.classList.remove('active'));
      if (statusEl) {
        statusEl.textContent = 'Namoz vaqtlarini yuklab bo‘lmadi. Internetni tekshirib, shaharni qayta tanlang.';
      }
      if (retryButton) retryButton.hidden = false;
      const countdownEl = document.getElementById('countdown-timer');
      if (countdownEl) countdownEl.textContent = '-- : -- : --';
      const nextPrayerName = document.getElementById('next-prayer-name');
      if (nextPrayerName) nextPrayerName.textContent = '—';
      const nextPrayerTime = document.getElementById('next-prayer-time');
      if (nextPrayerTime) nextPrayerTime.textContent = '--:--';
    });
}

function updateLiveClock() {
  const now = new Date();
  const dateFormatter = new Intl.DateTimeFormat('uz-UZ', {
    timeZone: SAJDA_CONFIG.timezone,
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: SAJDA_CONFIG.timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const dateEl = document.getElementById('local-date');
  const timeEl = document.getElementById('local-time');
  if (dateEl) dateEl.textContent = dateFormatter.format(now);
  if (timeEl) timeEl.textContent = timeFormatter.format(now);
}

function updateRamadanCountdown() {
  const now = new Date();
  updateRamadanPrayerTimes();
  const countdownTextEl = document.getElementById('ramadan-countdown-text');
  const ramadanDayEl = document.getElementById('ramadan-day');
  const ramadanStatusPillEl = document.getElementById('ramadan-status-pill');

  if (now >= SAJDA_CONFIG.ramadanStart && now <= SAJDA_CONFIG.ramadanEnd) {
    const remainingMs = SAJDA_CONFIG.ramadanEnd.getTime() - now.getTime();
    const days = Math.max(0, Math.floor(remainingMs / 86400000));
    const hours = Math.floor((remainingMs % 86400000) / 3600000);
    const minutes = Math.floor((remainingMs % 3600000) / 60000);
    if (countdownTextEl) countdownTextEl.textContent = `Ramazon oyiga ${days} kun ${hours} soat ${minutes} daqiqa qoldi`;
    if (ramadanStatusPillEl) ramadanStatusPillEl.textContent = `Ramazon oyining qoldig'i: ${days} kun ${hours} soat ${minutes} daqiqa`;
    if (ramadanDayEl) ramadanDayEl.textContent = `${days + 1} kun`;
    return;
  }

  const targetDate = now < SAJDA_CONFIG.ramadanStart ? SAJDA_CONFIG.ramadanStart : new Date('2027-02-07T00:00:00+05:00');
  const diff = targetDate.getTime() - now.getTime();
  const days = Math.max(0, Math.floor(diff / 86400000));
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  if (countdownTextEl) countdownTextEl.textContent = `Ramazon oyiga ${days} kun ${hours} soat ${minutes} daqiqa qoldi`;
  if (ramadanStatusPillEl) ramadanStatusPillEl.textContent = `Ramazon boshlanishiga ${days} kun ${hours} soat ${minutes} daqiqa qoldi`;
  if (ramadanDayEl) ramadanDayEl.textContent = `${days + 1} kun`;
}

function updateRamadanPrayerTimes() {
  const times = prayerTimesState.times;
  if (!times) return;
  const suhoor = document.getElementById('ramadan-suhoor');
  const iftar = document.getElementById('ramadan-iftar');
  if (suhoor) suhoor.textContent = times.Fajr;
  if (iftar) iftar.textContent = times.Maghrib;
}

function setLocationStatus(cityName, isManual = false) {
  const cityLabel = cityName || SAJDA_CONFIG.defaultCity;
  const locationStatusEl = document.getElementById('location-status');
  if (locationStatusEl) {
    locationStatusEl.replaceChildren();
    const dot = document.createElement('span');
    dot.textContent = '●';
    const label = document.createTextNode(` ${cityLabel}`);
    locationStatusEl.append(dot, label);
  }

  const precisionEl = document.getElementById('location-precision-pill');
  if (precisionEl) {
    precisionEl.textContent = isManual ? `Shahar qo‘lda tanlandi • ${cityLabel}` : `Joylashuv aniqlandi • ${cityLabel}`;
  }
}

function applyCitySelection(cityName, options = {}) {
  const selectedPlace = typeof cityName === 'object' && cityName !== null
    ? cityName
    : cityService.getByName(cityName);
  if (!selectedPlace) return;
  const safeCityName = selectedPlace.name;
  const coordinates = options.coordinates
    || (Number.isFinite(selectedPlace.lat) && Number.isFinite(selectedPlace.lon)
      ? { latitude: selectedPlace.lat, longitude: selectedPlace.lon }
      : null);
  const isManualSelection = Boolean(options.isManual);

  appState.selectedCity = safeCityName;
  appState.manualCitySelected = isManualSelection;
  appState.cityCoordinates = coordinates;
  appState.locationState = {
    latitude: null,
    longitude: null,
    accuracy: null,
    city: safeCityName,
    region: selectedPlace.region || '',
    country: selectedPlace.country || 'O‘zbekiston',
    source: 'manual'
  };

  if (options.persist !== false) {
    localStorage.setItem('sajda-city', safeCityName);
    if (coordinates) {
      localStorage.setItem('sajda-city-coordinates', JSON.stringify(coordinates));
    } else {
      localStorage.removeItem('sajda-city-coordinates');
    }
  }

  if (isManualSelection) {
    localStorage.setItem('sajda-city-source', 'manual');
  } else {
    localStorage.removeItem('sajda-city-source');
  }

  setLocationStatus(safeCityName, isManualSelection);

  const citySelectEl = document.getElementById('city-select');
  if (citySelectEl) {
    let option = [...citySelectEl.options].find((item) => normalizeCityQuery(item.value) === normalizeCityQuery(safeCityName));
    if (!option) {
      option = new Option(`${safeCityName} • ${selectedPlace.region || 'O‘zbekiston'}`, safeCityName);
      citySelectEl.add(option);
    }
    citySelectEl.value = safeCityName;
  }

  updateMosqueGrid(safeCityName, coordinates);
  renderPrayerTimes(safeCityName);
  updateProfile();
}

let mosqueRequestId = 0;
let mosquesExpanded = false;
let locationRequestInProgress = false;

async function updateMosqueGrid(cityName = appState.selectedCity, coordinates = null, forceRefresh = false) {
  const grid = document.getElementById('mosque-grid');
  if (!grid) return;

  const requestId = ++mosqueRequestId;
  const placeCoordinates = coordinates || getSelectedCoordinates(cityName);
  const statusEl = document.getElementById('mosque-status');
  const retryBtn = document.getElementById('mosque-retry-btn');
  const viewAllBtn = document.getElementById('mosque-view-all');
  if (statusEl) statusEl.textContent = 'Yaqin masjidlar xarita ma’lumotlaridan qidirilmoqda...';
  if (retryBtn) retryBtn.hidden = true;
  if (viewAllBtn) viewAllBtn.hidden = true;
  if (!placeCoordinates || !Number.isFinite(placeCoordinates.latitude) || !Number.isFinite(placeCoordinates.longitude)) {
    if (statusEl) statusEl.textContent = 'Tanlangan joy koordinatalari topilmadi. Shaharni qidirib qayta tanlang.';
    if (retryBtn) retryBtn.hidden = false;
    return;
  }

  try {
    const items = await mosqueService.getNearbyMosques(
      placeCoordinates.latitude,
      placeCoordinates.longitude,
      forceRefresh
    );
    if (requestId !== mosqueRequestId || cityName !== appState.selectedCity) return;
    mosquesExpanded = false;
    grid.innerHTML = items.map((mosque, index) => {
      const destination = new URLSearchParams({
        api: '1',
        destination: `${mosque.lat},${mosque.lon}`,
        travelmode: 'walking'
      });
      const mapLink = `https://www.google.com/maps/dir/?${destination.toString()}`;
      const distanceLabel = `${mosque.distance < 1 ? Math.round(mosque.distance * 1000) + ' m' : mosque.distance.toFixed(1) + ' km'}${appState.locationState.source === 'manual' ? ' · taxminiy' : ''}`;
      const imageUrl = typeof mosque.image === 'string' && /^https:\/\//i.test(mosque.image) ? mosque.image : '';
      const imageMarkup = imageUrl
        ? `<img class="mosque-photo" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(mosque.name)}" loading="lazy">`
        : '';
      return `
        <article class="mosque-card" ${index >= 6 ? 'hidden' : ''}>
          <div class="mosque-image${imageUrl ? '' : ' has-fallback'}">
            ${imageMarkup}
            <span class="distance">${escapeHtml(distanceLabel)}</span>
          </div>
          <div class="mosque-info">
            <div class="mosque-title"><h3>${escapeHtml(mosque.name)}</h3></div>
            <p>${escapeHtml(mosque.address)}</p>
            ${mosque.openingHours ? `<p>🕐 ${escapeHtml(mosque.openingHours)}</p>` : ''}
            ${mosque.phone ? `<p>☎ ${escapeHtml(mosque.phone)}</p>` : ''}
            ${Number.isFinite(mosque.rating) ? `<p>★ ${mosque.rating.toFixed(1)}</p>` : ''}
            <div class="mosque-bottom">
              <span>📍 ${escapeHtml(distanceLabel)}</span>
              <a href="${mapLink}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(mosque.name)} xaritada yo‘nalish">Yo‘nalish</a>
            </div>
          </div>
        </article>
      `;
    }).join('');
    grid.querySelectorAll('.mosque-photo').forEach((image) => {
      image.addEventListener('error', () => {
        image.remove();
        image.parentElement.classList.add('has-fallback');
      }, { once: true });
    });
    if (statusEl) {
      statusEl.textContent = items.length
        ? `${items.length} ta masjid topildi • OpenStreetMap ma’lumotlari`
        : `${cityName} yaqinida xarita ma’lumotlarida masjid topilmadi.`;
    }
    if (viewAllBtn) viewAllBtn.hidden = items.length <= 6;
  } catch (error) {
    if (requestId !== mosqueRequestId) return;
    grid.replaceChildren();
    if (statusEl) statusEl.textContent = 'Masjidlarni yuklashda muammo yuz berdi. Internetni tekshirib, qayta urinib ko‘ring.';
    if (retryBtn) retryBtn.hidden = false;
  }
}

async function requestLocationPermission(forceOverride = false) {
  const precisionEl = document.getElementById('location-precision-pill');
  if (!forceOverride && appState.manualCitySelected) {
    if (precisionEl) {
      precisionEl.textContent = `Shahar qo\'lda tanlangan: ${appState.selectedCity}. Joylashuvni yangilash uchun qayta bosing.`;
    }
    return false;
  }
  if (locationRequestInProgress) return false;
  locationRequestInProgress = true;

  if (precisionEl) {
    precisionEl.textContent = 'Joylashuv aniqlanmoqda...';
  }

  try {
    const location = await locationService.requestCurrentLocation();
    let reverseResult = null;
    let reverseGeocodeFailed = false;
    try {
      reverseResult = await locationService.reverseGeocode(location.latitude, location.longitude);
    } catch (error) {
      reverseGeocodeFailed = true;
    }
    const nearestCity = cityService.getNearest(location.latitude, location.longitude);
    const nearestDistance = haversineDistanceKm(location.latitude, location.longitude, nearestCity.lat, nearestCity.lon);
    const resolvedCity = reverseResult && reverseResult.city
      ? cityService.getByName(reverseResult.city) || { name: reverseResult.city, lat: nearestCity.lat, lon: nearestCity.lon }
      : null;
    const locationCity = resolvedCity
      ? resolvedCity.name
      : nearestDistance <= 100
        ? nearestCity.name
        : 'Joylashuv';

    appState.locationState = {
      latitude: location.latitude,
      longitude: location.longitude,
      accuracy: location.accuracy,
      city: locationCity,
      region: reverseResult && reverseResult.region ? reverseResult.region : nearestDistance <= 100 ? nearestCity.region : '',
      country: reverseResult && reverseResult.country ? reverseResult.country : nearestCity.country,
      source: 'gps'
    };

    const selectedCity = locationCity === 'Joylashuv'
      ? (appState.locationState.region || 'Joylashuvingiz')
      : locationCity;
    appState.selectedCity = selectedCity;
    appState.manualCitySelected = false;
    appState.cityCoordinates = null;
    localStorage.setItem('sajda-city', selectedCity);
    localStorage.removeItem('sajda-city-source');
    localStorage.removeItem('sajda-city-coordinates');
    setLocationStatus(selectedCity, false);

    if (precisionEl) {
      const accuracyText = Number.isFinite(location.accuracy) && location.accuracy > 0
        ? `Aniqlik: ${Math.round(location.accuracy)} m`
        : 'Joylashuv aniqlandi';
      const accuracyWarning = location.accuracy > 5000 ? ' • Aniqlik past, GPS xizmatini tekshiring' : '';
      const geocodeNotice = reverseGeocodeFailed || !locationCity || locationCity === 'Joylashuv'
        ? ' • Hudud nomi vaqtincha aniqlanmadi'
        : '';
      precisionEl.textContent = `${accuracyText}${accuracyWarning}${geocodeNotice}`;
    }

    await updateMosqueGrid(selectedCity, { latitude: location.latitude, longitude: location.longitude });
    renderPrayerTimes(selectedCity);
    const citySelectEl = document.getElementById('city-select');
    if (citySelectEl) {
      let option = [...citySelectEl.options].find((item) => normalizeCityQuery(item.value) === normalizeCityQuery(selectedCity));
      if (!option) {
        option = new Option(selectedCity, selectedCity);
        citySelectEl.add(option);
      }
      citySelectEl.value = selectedCity;
    }
    updateProfile();
    locationRequestInProgress = false;
    return true;
  } catch (error) {
    const isPermissionDenied = error && error.code === 1;
    const isTimeout = error && error.code === 3;
    const message = error && error.code === 'INSECURE_CONTEXT'
      ? 'Joylashuv uchun xavfsiz HTTPS ulanish kerak. localhost developmentda ishlashi mumkin.'
      : error && error.code === 'UNSUPPORTED'
        ? 'Brauzer joylashuvni aniqlashni qo‘llab-quvvatlamaydi. Shaharni qo‘lda tanlang.'
        : isPermissionDenied
          ? 'Joylashuvga ruxsat berilmadi. Shaharni qo‘lda tanlashingiz mumkin.'
          : isTimeout
            ? 'Joylashuvni aniqlash vaqti tugadi. GPS’ni tekshirib, qayta urinib ko‘ring.'
            : error && error.code === 2
              ? 'Joylashuvni aniqlab bo‘lmadi. GPS yoki tarmoq xizmatini tekshiring.'
              : 'Joylashuvni aniqlab bo‘lmadi. Shaharni qo‘lda tanlang yoki qayta urinib ko‘ring.';

    setLocationStatus(appState.selectedCity, appState.manualCitySelected);
    if (precisionEl) precisionEl.textContent = message;
    locationRequestInProgress = false;
    return false;
  }
}

function getNearestCity(latitude, longitude) {
  return cityService.getNearest(latitude, longitude);
}

const qiblaState = {
  bearing: 0,
  heading: null,
  locationAvailable: false,
  sensorAvailable: false,
  permissionStatus: 'Unknown',
  orientationPermissionStatus: 'Unknown'
};

function normalizeDegrees(value) {
  const normalized = Number(value) % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function getMinimalAngularDifference(targetDegrees, referenceDegrees) {
  if (referenceDegrees === null || Number.isNaN(referenceDegrees)) {
    return null;
  }

  const diff = Math.abs(normalizeDegrees(targetDegrees - referenceDegrees));
  return Math.min(diff, 360 - diff);
}

function updateQiblaReadout(degrees) {
  const displayEl = document.getElementById('qibla-degree');
  if (!displayEl) return;
  displayEl.textContent = `${Math.round(normalizeDegrees(degrees))}°`;
}

function updateQiblaDebug() {
  const debugEl = document.getElementById('qibla-debug');
  if (!debugEl) return;

  const isLocalhost = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);
  debugEl.hidden = !isLocalhost;

  const headingEl = document.getElementById('debug-heading');
  const bearingEl = document.getElementById('debug-bearing');
  const differenceEl = document.getElementById('debug-difference');
  const sensorEl = document.getElementById('debug-sensor');
  const locationEl = document.getElementById('debug-location');
  const permissionEl = document.getElementById('debug-permission');

  if (headingEl) headingEl.textContent = qiblaState.heading === null ? '---' : `${Math.round(qiblaState.heading)}°`;
  if (bearingEl) bearingEl.textContent = `${Math.round(qiblaState.bearing)}°`;
  if (differenceEl) {
    const diff = qiblaState.heading === null ? null : getMinimalAngularDifference(qiblaState.bearing, qiblaState.heading);
    differenceEl.textContent = diff === null ? '---' : `${Math.round(diff)}°`;
  }
  if (sensorEl) sensorEl.textContent = qiblaState.sensorAvailable ? 'Available' : 'Unavailable';
  if (locationEl) locationEl.textContent = qiblaState.locationAvailable ? 'Available' : 'Unavailable';
  if (permissionEl) permissionEl.textContent = qiblaState.permissionStatus;
}

function setCompassRotation(degrees) {
  const arrowEl = document.getElementById('compass-arrow');
  if (arrowEl) {
    arrowEl.style.transform = `translate(-50%, -55%) rotate(${normalizeDegrees(degrees)}deg)`;
  }
}

function calculateBearing(latitude, longitude) {
  const kaabaLatitude = 21.4225;
  const kaabaLongitude = 39.8262;
  const lat1 = latitude * (Math.PI / 180);
  const lat2 = kaabaLatitude * (Math.PI / 180);
  const deltaLon = (kaabaLongitude - longitude) * (Math.PI / 180);
  const y = Math.sin(deltaLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);
  const angle = (Math.atan2(y, x) * 180) / Math.PI;
  return normalizeDegrees(angle);
}

function setStatusMessage(message) {
  const statusEl = document.getElementById('qibla-status');
  if (statusEl) statusEl.textContent = message;
}

function requestOrientationAccess() {
  if (!window.DeviceOrientationEvent) {
    qiblaState.sensorAvailable = false;
    qiblaState.orientationPermissionStatus = 'Unavailable';
    updateQiblaDebug();
    return Promise.resolve(false);
  }

  const permissionFn = window.DeviceOrientationEvent.requestPermission;
  if (typeof permissionFn === 'function') {
    qiblaState.orientationPermissionStatus = 'Requesting';
    updateQiblaDebug();

    return permissionFn.call(window.DeviceOrientationEvent)
      .then((result) => {
        qiblaState.orientationPermissionStatus = result === 'granted' ? 'Granted' : 'Denied';
        updateQiblaDebug();
        return result === 'granted';
      })
      .catch(() => {
        qiblaState.orientationPermissionStatus = 'Denied';
        updateQiblaDebug();
        return false;
      });
  }

  qiblaState.orientationPermissionStatus = 'Granted';
  updateQiblaDebug();
  return Promise.resolve(true);
}

let qiblaSensorBound = false;

function bindOrientationSensor() {
  if (!window.DeviceOrientationEvent) {
    qiblaState.sensorAvailable = false;
    qiblaState.orientationPermissionStatus = 'Unavailable';
    updateQiblaDebug();
    return;
  }

  if (qiblaSensorBound) return;

  const handleOrientation = (event) => {
    const headingValue = typeof event.webkitCompassHeading === 'number'
      ? event.webkitCompassHeading
      : typeof event.alpha === 'number'
        ? event.alpha
        : null;

    if (headingValue === null || Number.isNaN(headingValue)) {
      qiblaState.sensorAvailable = false;
      updateQiblaDebug();
      return;
    }

    qiblaState.sensorAvailable = true;
    qiblaState.heading = normalizeDegrees(headingValue);

    if (qiblaState.bearing) {
      const relativeRotation = normalizeDegrees(qiblaState.bearing - qiblaState.heading);
      setCompassRotation(relativeRotation);
    }

    updateQiblaDebug();
  };

  qiblaSensorBound = true;
  window.addEventListener('deviceorientation', handleOrientation, { passive: true });
  if ('ondeviceorientationabsolute' in window) {
    window.addEventListener('deviceorientationabsolute', handleOrientation, { passive: true });
  }
}

function findQiblaDirection() {
  const city = getCityData(appState.selectedCity);
  const location = appState.locationState;
  const coordinates = location.source === 'gps' && Number.isFinite(location.latitude) && Number.isFinite(location.longitude)
    ? { latitude: location.latitude, longitude: location.longitude }
    : getSelectedCoordinates(appState.selectedCity);
  const fallbackBearing = coordinates
    ? calculateBearing(coordinates.latitude, coordinates.longitude)
    : city
      ? calculateBearing(city.lat, city.lon)
      : null;
  const retryBtn = document.getElementById('qibla-retry-btn');
  const secureContext = window.isSecureContext || (window.location.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(window.location.hostname));

  if (fallbackBearing !== null) {
    qiblaState.bearing = fallbackBearing;
    updateQiblaReadout(fallbackBearing);
    setCompassRotation(fallbackBearing);
  }
  updateQiblaDebug();

  if (!secureContext) {
    qiblaState.permissionStatus = 'Denied';
    setStatusMessage('Qibla kompasini ishlatish uchun xavfsiz HTTPS ulanish kerak.');
    if (fallbackBearing === null) setStatusMessage('Qibla yo‘nalishi uchun avval shaharni yoki joylashuvni tanlang. Kompas uchun HTTPS kerak.');
    if (retryBtn) retryBtn.hidden = false;
    updateQiblaDebug();
    return;
  }

  if (!navigator.geolocation) {
    qiblaState.locationAvailable = false;
    qiblaState.permissionStatus = 'Unavailable';
    setStatusMessage(fallbackBearing === null
      ? 'Qibla kompas sensori bu qurilmada mavjud emas. Yo‘nalish uchun shaharni tanlang.'
      : `Qibla yo'nalishi: ${Math.round(fallbackBearing)}° (geolokatsiya bu brauzerda mavjud emas).`);
    if (retryBtn) retryBtn.hidden = true;
    updateQiblaDebug();
    bindOrientationSensor();
    return;
  }

  qiblaState.permissionStatus = 'Requesting';
  updateQiblaDebug();
  if (retryBtn) retryBtn.hidden = false;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const bearing = calculateBearing(position.coords.latitude, position.coords.longitude);
      qiblaState.bearing = bearing;
      qiblaState.locationAvailable = true;
      qiblaState.permissionStatus = 'Granted';
      updateQiblaReadout(bearing);
      if (typeof qiblaState.heading === 'number') {
        setCompassRotation(normalizeDegrees(bearing - qiblaState.heading));
      } else {
        setCompassRotation(bearing);
      }
      setStatusMessage(`Qibla yo'nalishi: ${Math.round(bearing)}° • Siz Ka'baga qarab turibsiz.`);
      updateQiblaDebug();
    },
    (error) => {
      qiblaState.locationAvailable = false;
      qiblaState.permissionStatus = error && error.code === 1 ? 'Denied' : 'Error';
      if (fallbackBearing !== null) {
        setCompassRotation(fallbackBearing);
        updateQiblaReadout(fallbackBearing);
      }
      setStatusMessage(error && error.code === 1
        ? 'Joylashuvga ruxsat berilmadi. Qibla yo‘nalishi shahar ma’lumotiga asoslangan holda ko‘rsatilmoqda.'
        : 'Joylashuv olinmadi. Internet yoki lokatsiya xizmatini tekshirib ko‘ring.');
      updateQiblaDebug();
    },
    { timeout: 15000, enableHighAccuracy: true }
  );

  requestOrientationAccess().then((granted) => {
    if (!granted) {
      qiblaState.orientationPermissionStatus = 'Denied';
      setStatusMessage('Qibla kompas sensori ruxsati berilmadi. Qibla yo\'nalishi hisoblangan burchak bo\'yicha ko\'rsatiladi.');
      updateQiblaDebug();
      return;
    }

    bindOrientationSensor();
  });
}

function initQiblaCompass() {
  const qiblaButtonEl = document.getElementById('qibla-btn');
  const retryButtonEl = document.getElementById('qibla-retry-btn');

  if (qiblaButtonEl) {
    qiblaButtonEl.addEventListener('click', findQiblaDirection);
  }

  if (retryButtonEl) {
    retryButtonEl.addEventListener('click', findQiblaDirection);
  }

  const initialCoordinates = getSelectedCoordinates(appState.selectedCity);
  const defaultCity = getCityData(appState.selectedCity);
  const initialBearing = initialCoordinates
    ? calculateBearing(initialCoordinates.latitude, initialCoordinates.longitude)
    : defaultCity
      ? calculateBearing(defaultCity.lat, defaultCity.lon)
      : null;
  if (initialBearing !== null) {
    qiblaState.bearing = initialBearing;
    updateQiblaReadout(initialBearing);
    setCompassRotation(initialBearing);
  } else {
    setStatusMessage('Qibla yo‘nalishini ko‘rish uchun shaharni qidiring yoki joylashuvni aniqlang.');
  }
  updateQiblaDebug();

  if (window.DeviceOrientationEvent) {
    bindOrientationSensor();
  } else {
    qiblaState.sensorAvailable = false;
    qiblaState.orientationPermissionStatus = 'Unavailable';
    setStatusMessage('Qibla kompas sensori bu qurilmada mavjud emas. Qibla yo\'nalishi burchak sifatida ko\'rsatiladi.');
    updateQiblaDebug();
  }
}

function renderQuran() {
  const grid = document.getElementById('quran-grid');
  if (!grid) return;

  const searchField = document.getElementById('quran-search');
  const searchValue = (searchField ? searchField.value : appState.quranSearch || '').trim().toLowerCase();
  const favorites = getStoredJSON('sajda-quran-favorites', []);
  const bookmarks = getStoredJSON('sajda-quran-bookmarks', []);

  const list = quranCollection.filter((surah) => {
    const matchesQuery = !searchValue
      || surah.name.toLowerCase().includes(searchValue)
      || surah.translation.toLowerCase().includes(searchValue)
      || String(surah.number).includes(searchValue);
    return matchesQuery;
  });

  grid.innerHTML = list.map((surah) => {
    const isFavorite = favorites.includes(surah.number);
    const isBookmarked = bookmarks.includes(surah.number);
    const surahAudioUrl = quranService.getSurahAudioUrl(surah.number);
    const previewAyah = [1, 2, 3].map((ayah) => {
      const ayahUrl = quranService.getAyahAudioUrl(surah.number, ayah);
      return `
        <button class="ayat-mini-btn" type="button" data-ayah-url="${ayahUrl}" data-ayah-title="${surah.name} - Oyat ${ayah}" aria-label="${surah.name} oyat ${ayah}ni tinglash">
          <span>▶</span> ${ayah}
        </button>
      `;
    }).join('');

    return `
      <article class="quran-card">
        <div class="surah-meta">
          <span>#${surah.number}</span>
          <div class="card-utility-actions">
            <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-bookmark-surah-id="${surah.number}" type="button" aria-label="Surani bookmark qilish">🔖</button>
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-surah-id="${surah.number}" type="button" aria-label="Surani sevimlilarga qo'shish">♥</button>
          </div>
        </div>
        <h3>${surah.name}</h3>
        <p>${surah.translation}</p>
        <small>${surah.category} • ${surah.ayahCount} oyat</small>
        <div class="surah-arabic">${surah.arabic}</div>

        <div class="audio-inline-row">
          <button class="audio-inline-btn" type="button" data-audio-source="${surahAudioUrl}" data-audio-title="${surah.name}" data-audio-type="quran" data-audio-id="${surah.number}" aria-label="${surah.name} surasini tinglash">▶ Play</button>
        </div>

        <div class="ayah-mini-list">${previewAyah}</div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('[data-surah-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.surahId);
      const listValue = getStoredJSON('sajda-quran-favorites', []);
      const next = listValue.includes(id) ? listValue.filter((item) => item !== id) : [...listValue, id];
      setStoredJSON('sajda-quran-favorites', next);
      renderQuran();
      updateProfile();
    });
  });

  document.querySelectorAll('[data-bookmark-surah-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.bookmarkSurahId);
      const listValue = getStoredJSON('sajda-quran-bookmarks', []);
      const next = listValue.includes(id) ? listValue.filter((item) => item !== id) : [...listValue, id];
      setStoredJSON('sajda-quran-bookmarks', next);
      renderQuran();
      updateProfile();
    });
  });

  document.querySelectorAll('[data-audio-source]').forEach((button) => {
    button.addEventListener('click', () => {
      const { audioSource, audioTitle, audioType, audioId } = button.dataset;
      audioService.play({ title: audioTitle, type: audioType, id: Number(audioId), source: audioSource });
    });
  });

  document.querySelectorAll('[data-ayah-url]').forEach((button) => {
    button.addEventListener('click', () => {
      const { ayahUrl, ayahTitle } = button.dataset;
      audioService.play({ title: ayahTitle, type: 'ayah', id: 0, source: ayahUrl });
    });
  });
}

function bindDuaFilters() {
  const filtersEl = document.getElementById('dua-filters');
  if (!filtersEl) return;

  filtersEl.innerHTML = duaCategories.map((category) => `
    <button class="filter-btn ${category === appState.duaFilter ? 'active' : ''}" data-dua-filter="${category}" type="button">${category}</button>
  `).join('');

  filtersEl.querySelectorAll('[data-dua-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.duaFilter = button.dataset.duaFilter;
      renderDuas();
    });
  });
}

function renderDuas() {
  const grid = document.getElementById('dua-grid');
  if (!grid) return;

  const favorites = getStoredJSON('sajda-favorite-duas', []);
  const items = appState.duaFilter === 'Barchasi'
    ? duaCollection
    : duaCollection.filter((item) => item.category === appState.duaFilter);

  grid.innerHTML = items.map((dua) => {
    const isFavorite = favorites.includes(dua.id);
    const audioSource = dua.audioUrl || duaService.getAudioUrl(dua.id);
    return `
      <article class="dua-card">
        <div class="dua-card-header">
          <span class="dua-category">${dua.category}</span>
          <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-dua-id="${dua.id}" type="button" aria-label="Duoni sevimlilarga qo'shish">♥</button>
        </div>
        <h3 class="dua-title">${dua.title}</h3>
        <div class="dua-arabic">${dua.arabic}</div>
        <p>${dua.transliteration}</p>
        <small>${dua.translation}</small>
        <button class="audio-inline-btn" type="button" data-dua-audio-source="${audioSource}" data-dua-audio-title="${dua.title}" data-dua-audio-id="${dua.id}" aria-label="${dua.title} duo audio ini tinglash">▶ Tinglash</button>
      </article>
    `;
  }).join('');

  bindDuaFilters();

  document.querySelectorAll('[data-dua-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.duaId);
      const pressed = getStoredJSON('sajda-favorite-duas', []);
      const next = pressed.includes(id) ? pressed.filter((entry) => entry !== id) : [...pressed, id];
      setStoredJSON('sajda-favorite-duas', next);
      renderDuas();
      updateProfile();
    });
  });

  document.querySelectorAll('[data-dua-audio-source]').forEach((button) => {
    button.addEventListener('click', () => {
      const { duaAudioSource, duaAudioTitle, duaAudioId } = button.dataset;
      audioService.play({ title: duaAudioTitle, type: 'dua', id: Number(duaAudioId), source: duaAudioSource });
    });
  });
}

function initZikrCounter() {
  const countEl = document.getElementById('zikr-count');
  const targetTextEl = document.getElementById('zikr-target-text');
  const progressEl = document.getElementById('zikr-progress');
  const customInputEl = document.getElementById('custom-target');
  const targetButtons = document.querySelectorAll('.target-btn');

  const state = getStoredJSON('sajda-zikr-state', { count: 0, target: 33 });

  function updateUi() {
    if (countEl) countEl.textContent = state.count;
    if (targetTextEl) targetTextEl.textContent = `Maqsad: ${state.target}`;
    const progress = Math.min(100, (state.count / state.target) * 100);
    if (progressEl) progressEl.style.width = `${progress}%`;
    if (customInputEl) customInputEl.value = state.target;
    targetButtons.forEach((button) => {
      button.classList.toggle('active', Number(button.dataset.target) === state.target);
    });
  }

  const plusBtn = document.getElementById('zikr-plus');
  const minusBtn = document.getElementById('zikr-minus');
  const resetBtn = document.getElementById('zikr-reset');

  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      state.count += 1;
      setStoredJSON('sajda-zikr-state', state);
      updateUi();
    });
  }

  if (minusBtn) {
    minusBtn.addEventListener('click', () => {
      state.count = Math.max(0, state.count - 1);
      setStoredJSON('sajda-zikr-state', state);
      updateUi();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.count = 0;
      setStoredJSON('sajda-zikr-state', state);
      updateUi();
    });
  }

  targetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.target = Number(button.dataset.target);
      setStoredJSON('sajda-zikr-state', state);
      updateUi();
    });
  });

  if (customInputEl) {
    customInputEl.addEventListener('change', () => {
      const value = Number(customInputEl.value || 33);
      state.target = Math.max(1, Math.min(999, value));
      setStoredJSON('sajda-zikr-state', state);
      updateUi();
    });
  }

  updateUi();
}

function renderDailyContent() {
  const today = new Date();
  const seed = today.getDate() + today.getMonth() + today.getFullYear();
  const verseIndex = seed % dailyVerses.length;
  const duaIndex = seed % dailyDuas.length;
  const reminderIndex = seed % dailyReminders.length;
  const deedIndex = seed % dailyDeeds.length;

  const verseEl = document.getElementById('daily-verse');
  const verseRefEl = document.getElementById('daily-verse-ref');
  const duaEl = document.getElementById('daily-dua');
  const duaRefEl = document.getElementById('daily-dua-ref');
  const reminderEl = document.getElementById('daily-reminder');
  const reminderRefEl = document.getElementById('daily-reminder-ref');
  const deedEl = document.getElementById('daily-deed');
  const deedRefEl = document.getElementById('daily-deed-ref');

  if (verseEl) verseEl.textContent = `"${dailyVerses[verseIndex].text}"`;
  if (verseRefEl) verseRefEl.textContent = dailyVerses[verseIndex].ref;
  if (duaEl) duaEl.textContent = `"${dailyDuas[duaIndex]}"`;
  if (duaRefEl) duaRefEl.textContent = 'Dua';
  if (reminderEl) reminderEl.textContent = `"${dailyReminders[reminderIndex]}"`;
  if (reminderRefEl) reminderRefEl.textContent = 'Yodda tuting';
  if (deedEl) deedEl.textContent = `"${dailyDeeds[deedIndex]}"`;
  if (deedRefEl) deedRefEl.textContent = 'Bugun';
}

function updateProfile() {
  const profileNameEl = document.getElementById('profile-name');
  const profileCityEl = document.getElementById('profile-city');
  const profileFavoritesEl = document.getElementById('profile-favorites');
  const profileStreakEl = document.getElementById('profile-streak');

  const userProfile = getStoredJSON('sajda-user-profile', { name: 'Siz', streak: 7 });
  userProfile.city = appState.selectedCity;
  setStoredJSON('sajda-user-profile', userProfile);

  const favoriteDuas = getStoredJSON('sajda-favorite-duas', []);
  const favoriteQuran = getStoredJSON('sajda-quran-favorites', []);
  const bookmarks = getStoredJSON('sajda-quran-bookmarks', []);

  if (profileNameEl) profileNameEl.textContent = userProfile.name || 'Siz';
  if (profileCityEl) profileCityEl.textContent = appState.selectedCity;
  if (profileFavoritesEl) profileFavoritesEl.textContent = favoriteDuas.length + favoriteQuran.length + bookmarks.length;
  if (profileStreakEl) profileStreakEl.textContent = `${userProfile.streak || 7} kun`;
}

function populateCitySelect() {
  const citySelectEl = document.getElementById('city-select');
  if (!citySelectEl) return;

  citySelectEl.innerHTML = cityService.getAll().map((city) => `
    <option value="${escapeHtml(city.name)}">${escapeHtml(city.name)}</option>
  `).join('');
  if (!cityService.getByName(appState.selectedCity)) {
    const option = new Option(appState.selectedCity, appState.selectedCity);
    citySelectEl.add(option);
  }
  citySelectEl.value = appState.selectedCity;
}

function bindCitySearch(inputId, resultId, targetCallback) {
  const inputEl = document.getElementById(inputId);
  const resultEl = document.getElementById(resultId);
  if (!inputEl || !resultEl) return;

  let debounceId;
  let activeController;
  let searchId = 0;
  let visibleMatches = [];

  const renderMatches = (query, onlineMatches = [], message = '') => {
    const localMatches = cityService.search(query);
    const allMatches = [...localMatches, ...onlineMatches.filter((place) => (
      !localMatches.some((city) => normalizeCityQuery(city.name) === normalizeCityQuery(place.name))
    ))].slice(0, 10);
    visibleMatches = allMatches;
    if (!query.trim() || (!allMatches.length && !message)) {
      resultEl.hidden = true;
      resultEl.innerHTML = '';
      return;
    }

    resultEl.hidden = false;
    resultEl.innerHTML = `${allMatches.map((city, index) => `
      <button type="button" role="option" data-city-index="${index}">
        ${escapeHtml(city.name)} • ${escapeHtml(city.region)}
      </button>
    `).join('')}${message ? `<p class="city-search-message">${escapeHtml(message)}</p>` : ''}`;
  };

  inputEl.addEventListener('input', (event) => {
    const query = event.target.value;
    clearTimeout(debounceId);
    if (activeController) activeController.abort();
    searchId += 1;
    const currentSearchId = searchId;
    renderMatches(query);

    if (query.trim().length < 3 || cityService.getByName(query)) return;
    debounceId = setTimeout(async () => {
      activeController = new AbortController();
      try {
        const onlineMatches = await cityService.searchOnline(query, activeController.signal);
        if (currentSearchId === searchId) renderMatches(query, onlineMatches);
      } catch (error) {
        if (error.name === 'AbortError' || currentSearchId !== searchId) return;
        if (!cityService.search(query).length) {
          renderMatches(query, [], 'Onlayn qidiruv vaqtincha ishlamadi. Internetni tekshiring.');
        }
      }
    }, 650);
  });

  inputEl.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || resultEl.hidden || !visibleMatches.length) return;
    event.preventDefault();
    resultEl.querySelector('[data-city-index="0"]')?.click();
  });

  resultEl.addEventListener('click', (event) => {
    const button = event.target.closest('[data-city-index]');
    if (!button) return;
    const place = visibleMatches[Number(button.dataset.cityIndex)];
    if (!place) return;
    inputEl.value = place.name;
    resultEl.hidden = true;
    resultEl.innerHTML = '';
    targetCallback(place);
  });
}

function bindOnboarding() {
  const modal = document.getElementById('onboarding-modal');
  const continueBtn = document.getElementById('onboarding-continue-btn');
  const locationBtn = document.getElementById('onboarding-location-btn');
  const nameInput = document.getElementById('user-name-input');
  const languageSelect = document.getElementById('user-language-select');
  const onboardingStatus = document.getElementById('onboarding-status');

  if (!modal || !continueBtn || !locationBtn) return;

  const savedProfile = getStoredJSON('sajda-user-profile', {});
  if (nameInput && savedProfile.name && savedProfile.name !== 'Siz') nameInput.value = savedProfile.name;
  if (languageSelect && savedProfile.language) languageSelect.value = savedProfile.language;
  const shouldShow = !localStorage.getItem('sajda-onboarding-complete');
  modal.classList.toggle('hidden', !shouldShow);

  continueBtn.addEventListener('click', () => {
    const profile = getStoredJSON('sajda-user-profile', { name: 'Siz', streak: 7 });
    if (nameInput && nameInput.value.trim()) {
      profile.name = nameInput.value.trim();
    }
    if (languageSelect) {
      profile.language = languageSelect.value;
    }
    const chosenCity = document.getElementById('onboarding-city-search')?.value.trim();
    if (chosenCity) {
      const city = cityService.getByName(chosenCity);
      if (city) applyCitySelection(city, { isManual: true });
    }
    setStoredJSON('sajda-user-profile', profile);
    localStorage.setItem('sajda-onboarding-complete', 'true');
    modal.classList.add('hidden');
    updateProfile();
  });

  locationBtn.addEventListener('click', async () => {
    if (onboardingStatus) onboardingStatus.textContent = 'Joylashuv aniqlanmoqda...';
    const located = await requestLocationPermission(true);
    if (located) {
      localStorage.setItem('sajda-onboarding-complete', 'true');
      modal.classList.add('hidden');
    } else if (onboardingStatus) {
      onboardingStatus.textContent = 'Joylashuv aniqlanmadi. Shaharni qidirib tanlang yoki davom eting.';
    }
  });

  document.getElementById('profile-edit-btn')?.addEventListener('click', () => {
    modal.classList.remove('hidden');
    if (onboardingStatus) onboardingStatus.textContent = 'Profil sozlamalaringiz shu qurilmada saqlanadi.';
  });
}

async function initializeApp() {
  populateCitySelect();
  const mobileMenuButton = document.getElementById('mobile-menu-toggle');
  const primaryNavigation = document.getElementById('primary-navigation');
  const closeMobileNavigation = () => {
    if (!mobileMenuButton || !primaryNavigation) return;
    primaryNavigation.classList.remove('is-open');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenuButton.setAttribute('aria-label', 'Navigatsiya menyusini ochish');
  };
  mobileMenuButton?.addEventListener('click', () => {
    const isOpen = primaryNavigation.classList.toggle('is-open');
    mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
    mobileMenuButton.setAttribute('aria-label', isOpen ? 'Navigatsiya menyusini yopish' : 'Navigatsiya menyusini ochish');
  });
  primaryNavigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileNavigation));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileNavigation();
  });
  bindCitySearch('city-search', 'city-search-results', (cityName) => {
    applyCitySelection(cityName, { isManual: true });
  });
  bindCitySearch('onboarding-city-search', 'onboarding-city-results', (cityName) => {
    applyCitySelection(cityName, { isManual: true });
  });
  bindOnboarding();

  if (!cityService.getByName(appState.selectedCity)
    && (!appState.cityCoordinates
      || !Number.isFinite(appState.cityCoordinates.latitude)
      || !Number.isFinite(appState.cityCoordinates.longitude))) {
    try {
      const matches = await cityService.searchOnline(appState.selectedCity);
      const match = matches.find((city) => normalizeCityQuery(city.name) === normalizeCityQuery(appState.selectedCity))
        || matches[0];
      if (match) {
        appState.selectedCity = match.name;
        appState.cityCoordinates = { latitude: match.lat, longitude: match.lon };
        localStorage.setItem('sajda-city', match.name);
        localStorage.setItem('sajda-city-coordinates', JSON.stringify(appState.cityCoordinates));
      }
    } catch (error) {
      const precisionEl = document.getElementById('location-precision-pill');
      if (precisionEl) precisionEl.textContent = 'Tanlangan joy koordinatalari olinmadi. Shaharni qayta tanlang.';
    }
  }

  const citySelectEl = document.getElementById('city-select');
  if (citySelectEl) {
    citySelectEl.addEventListener('change', () => {
      applyCitySelection(citySelectEl.value, { isManual: true });
    });
  }

  const locationStatusEl = document.getElementById('location-status');
  if (locationStatusEl) {
    locationStatusEl.addEventListener('click', () => requestLocationPermission(true));
    locationStatusEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        requestLocationPermission(true);
      }
    });
  }
  document.getElementById('mosque-retry-btn')?.addEventListener('click', () => {
    updateMosqueGrid(appState.selectedCity, null, true);
  });
  document.getElementById('prayer-retry-btn')?.addEventListener('click', () => {
    renderPrayerTimes(appState.selectedCity);
  });
  document.getElementById('mosque-view-all')?.addEventListener('click', (event) => {
    mosquesExpanded = !mosquesExpanded;
    document.querySelectorAll('#mosque-grid .mosque-card').forEach((card, index) => {
      card.hidden = !mosquesExpanded && index >= 6;
    });
    event.currentTarget.textContent = mosquesExpanded ? 'Faqat eng yaqinlarini ko‘rish ↑' : 'Barchasini ko‘rish →';
    event.currentTarget.setAttribute('aria-expanded', String(mosquesExpanded));
  });

  setLocationStatus(appState.selectedCity, true);
  updateMosqueGrid(appState.selectedCity);
  renderPrayerTimes(appState.selectedCity);
  updateRamadanCountdown();
  audioService.ensurePlayer();
  renderQuran();
  renderDuas();
  initZikrCounter();
  renderDailyContent();
  updateProfile();
  initQiblaCompass();
  audioService.resumeIfAvailable();

  const searchEl = document.getElementById('quran-search');
  if (searchEl) {
    searchEl.addEventListener('input', (event) => {
      appState.quranSearch = event.target.value;
      renderQuran();
    });
  }

  let prayerDate = getTashkentDateKey();
  setInterval(() => {
    updateLiveClock();
    updateRamadanCountdown();
    updatePrayerCountdown();
    const currentDate = getTashkentDateKey();
    if (currentDate !== prayerDate) {
      prayerDate = currentDate;
      renderPrayerTimes(appState.selectedCity);
    }
  }, 1000);
}

updateLiveClock();
initializeApp();
