const SAJDA_CONFIG = {
  timezone: 'Asia/Tashkent',
  defaultCity: 'Toshkent',
  ramadanStart: new Date('2026-02-18T00:00:00+05:00'),
  ramadanEnd: new Date('2026-03-19T23:59:59+05:00'),
  cityProfiles: {
    Toshkent: { lat: 41.2995, lon: 69.2401 },
    Samarqand: { lat: 39.6542, lon: 66.9597 },
    Buxoro: { lat: 39.7747, lon: 64.4286 },
    Andijon: { lat: 40.7821, lon: 72.3446 },
    Nukus: { lat: 42.4531, lon: 59.6103 }
  }
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

const cityMosqueDatabase = {
  Toshkent: [
    { name: 'Hazrati Imom', district: 'Shayxontohur', distance: 0.8, address: 'Toshkent, Shayxontohur', lat: 41.2995, lon: 69.2401 },
    { name: 'Minor masjidi', district: 'Yunusobod', distance: 1.4, address: 'Toshkent, Yunusobod', lat: 41.3817, lon: 69.2861 },
    { name: 'Imom Buxoriy', district: 'Chilonzor', distance: 2.1, address: 'Toshkent, Chilonzor', lat: 41.2888, lon: 69.1879 }
  ],
  Samarqand: [
    { name: 'Bibi Xonim', district: 'Registon', distance: 1.2, address: 'Samarqand, Registon', lat: 39.6542, lon: 66.9597 },
    { name: 'Ulug\'bek madrasasi', district: 'Shahrisabz', distance: 2.3, address: 'Samarqand, Registon', lat: 39.6587, lon: 66.9798 },
    { name: 'Kalon masjidi', district: 'Samarqand markaz', distance: 3.1, address: 'Samarqand, Markaz', lat: 39.6540, lon: 66.9730 }
  ],
  Buxoro: [
    { name: 'Lyab-i Hauz', district: 'Kalon', distance: 0.9, address: 'Buxoro, Lyab-i Hauz', lat: 39.7747, lon: 64.4286 },
    { name: 'Poyonka masjidi', district: 'Buxoro markaz', distance: 1.7, address: 'Buxoro, Markaz', lat: 39.7732, lon: 64.4211 },
    { name: 'Kalon masjidi', district: 'Buxoro', distance: 2.4, address: 'Buxoro, Kalon', lat: 39.7744, lon: 64.4311 }
  ],
  Andijon: [
    { name: 'Jami masjidi', district: 'Andijon', distance: 0.7, address: 'Andijon, Markaz', lat: 40.7821, lon: 72.3446 },
    { name: 'Nurobod masjidi', district: 'Shahrixon', distance: 1.6, address: 'Andijon, Shahrixon', lat: 40.7937, lon: 72.3359 },
    { name: 'Qadiriya', district: 'Andijon', distance: 2.2, address: 'Andijon, Qadiriya', lat: 40.7810, lon: 72.3520 }
  ],
  Nukus: [
    { name: 'Jami masjidi', district: 'Nukus markaz', distance: 1.1, address: 'Nukus, Markaz', lat: 42.4531, lon: 59.6103 },
    { name: 'Qoraqalpoq masjidi', district: 'Qoraqalpoq', distance: 2.0, address: 'Nukus, Qoraqalpoq', lat: 42.4618, lon: 59.6158 },
    { name: 'Vohid masjidi', district: 'Nukus', distance: 2.8, address: 'Nukus, Vohid', lat: 42.4573, lon: 59.6230 }
  ]
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
  duaFilter: 'Barchasi',
  quranSearch: ''
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

function getCityData(cityName) {
  return SAJDA_CONFIG.cityProfiles[cityName] || SAJDA_CONFIG.cityProfiles[SAJDA_CONFIG.defaultCity];
}

function getCurrentTimeMinutesInTashkent() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Tashkent',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const parts = formatter.format(now).split(':').map(Number);
  return parts[0] * 60 + parts[1] + parts[2] / 60;
}

function getFallbackPrayerTimes(cityName) {
  const city = getCityData(cityName);
  const today = new Date();
  const utcDate = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const seasonalWave = Math.sin((utcDate / 86400000 / 365.25) * (Math.PI * 2) + 1.45) * 16;
  const latFactor = (city.lat - 41.3) * 1.6;

  const rawTimes = {
    Fajr: 5 * 60 + 12 + seasonalWave * 0.3 + latFactor * 0.2,
    Sunrise: 6 * 60 + 38 + seasonalWave * 0.15 + latFactor * 0.18,
    Dhuhr: 12 * 60 + 31 + seasonalWave * 0.12 + latFactor * 0.32,
    Asr: 16 * 60 + 42 + seasonalWave * 0.22 + latFactor * 0.7,
    Maghrib: 18 * 60 + 31 + seasonalWave * 0.14 + latFactor * 0.35,
    Isha: 19 * 60 + 52 + seasonalWave * 0.28 + latFactor * 0.6
  };

  const cityOffsets = {
    Toshkent: { Fajr: 0, Sunrise: 0, Dhuhr: 0, Asr: 0, Maghrib: 0, Isha: 0 },
    Samarqand: { Fajr: 2, Sunrise: 3, Dhuhr: 1, Asr: 2, Maghrib: 1, Isha: 2 },
    Buxoro: { Fajr: 4, Sunrise: 4, Dhuhr: 3, Asr: 3, Maghrib: 2, Isha: 4 },
    Andijon: { Fajr: -1, Sunrise: -1, Dhuhr: 0, Asr: -1, Maghrib: 0, Isha: -1 },
    Nukus: { Fajr: 6, Sunrise: 5, Dhuhr: 4, Asr: 5, Maghrib: 4, Isha: 6 }
  };

  const offsetSet = cityOffsets[cityName] || cityOffsets.Toshkent;
  const times = {};

  prayerOrder.forEach((prayerName) => {
    const totalMinutes = Math.max(0, Math.round(rawTimes[prayerName] + (offsetSet[prayerName] || 0)));
    times[prayerName] = formatClock(totalMinutes);
  });

  return times;
}

async function fetchPrayerTimesForCity(cityName) {
  const cityLabel = encodeURIComponent(cityName);
  const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${cityLabel}&country=Uzbekistan&method=2`;

  try {
    const response = await fetch(apiUrl, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Prayer API failed');
    }

    const payload = await response.json();
    const timings = payload && payload.data && payload.data.timings ? payload.data.timings : {};
    const result = {};
    prayerOrder.forEach((prayerName) => {
      result[prayerName] = timings[prayerName] || getFallbackPrayerTimes(cityName)[prayerName];
    });

    return { source: 'api', times: result };
  } catch (error) {
    return { source: 'fallback', times: getFallbackPrayerTimes(cityName) };
  }
}

function renderPrayerTimes(cityName) {
  const statusEl = document.getElementById('prayer-api-status');
  const prayerCards = document.querySelectorAll('[data-prayer-card]');

  const setUi = (times) => {
    prayerOrder.forEach((prayerName) => {
      const field = document.getElementById(`time-${prayerName.toLowerCase()}`);
      if (field) field.textContent = times[prayerName];
    });

    const nowMinutes = getCurrentTimeMinutesInTashkent();
    const entries = prayerOrder.map((prayerName) => ({
      name: prayerName,
      minutes: parseTimeToMinutes(times[prayerName])
    }));

    let next = entries.find((entry) => entry.minutes > nowMinutes) || entries[0];
    const current = [...entries].reverse().find((entry) => entry.minutes <= nowMinutes) || entries[0];

    const nextPrayerName = document.getElementById('next-prayer-name');
    if (nextPrayerName) nextPrayerName.textContent = prayerNameMap[next.name];

    const nextPrayerTime = document.getElementById('next-prayer-time');
    if (nextPrayerTime) nextPrayerTime.textContent = times[next.name];

    prayerCards.forEach((card) => {
      const isActive = card.dataset.prayerCard === next.name;
      card.classList.toggle('active', isActive);
      const smallLabel = card.querySelector('small');
      if (smallLabel) {
        smallLabel.textContent = isActive ? 'Keyingi' : '';
      }
    });

    const remainingMinutes = next.minutes > nowMinutes ? next.minutes - nowMinutes : (next.minutes + 24 * 60) - nowMinutes;
    const hours = Math.floor(remainingMinutes / 60);
    const minutes = Math.floor(remainingMinutes % 60);
    const seconds = Math.max(0, 60 - new Date().getSeconds());
    const countdownEl = document.getElementById('countdown-timer');
    if (countdownEl) countdownEl.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

    const statusLabel = document.getElementById('prayer-status-label');
    const currentPrayerText = current.name === 'Fajr' && nowMinutes < parseTimeToMinutes(times.Fajr) ? 'Bomdod' : prayerNameMap[current.name];
    if (statusLabel) statusLabel.textContent = currentPrayerText;
  };

  if (statusEl) statusEl.textContent = 'Vaqtlar hisoblanmoqda...';

  fetchPrayerTimesForCity(cityName)
    .then((result) => {
      setUi(result.times);
      if (statusEl) {
        statusEl.textContent = result.source === 'api'
          ? 'Onlayn ma\'lumotdan yuklandi.'
          : 'Onlayn ma\'lumot mavjud emas; mahalliy hisob-kitob ishlatilmoqda.';
      }
    })
    .catch(() => {
      const fallbackTimes = getFallbackPrayerTimes(cityName);
      setUi(fallbackTimes);
      if (statusEl) {
        statusEl.textContent = 'Vaqtlar mahalliy hisob-kitobdan yuklandi.';
      }
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
  const countdownTextEl = document.getElementById('ramadan-countdown-text');
  const ramadanDayEl = document.getElementById('ramadan-day');
  const ramadanSuhoorEl = document.getElementById('ramadan-suhoor');
  const ramadanIftarEl = document.getElementById('ramadan-iftar');
  const ramadanStatusPillEl = document.getElementById('ramadan-status-pill');
  const selectedCity = appState.selectedCity || SAJDA_CONFIG.defaultCity;
  const times = getFallbackPrayerTimes(selectedCity);

  const suhoorTime = formatClock(parseTimeToMinutes(times.Fajr) - 90);
  const iftarTime = times.Maghrib;

  if (ramadanSuhoorEl) ramadanSuhoorEl.textContent = suhoorTime;
  if (ramadanIftarEl) ramadanIftarEl.textContent = iftarTime;

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

function setLocationStatus(cityName, isManual = false) {
  const cityLabel = cityName || SAJDA_CONFIG.defaultCity;
  const locationStatusEl = document.getElementById('location-status');
  if (locationStatusEl) {
    locationStatusEl.innerHTML = `<span>●</span> ${cityLabel} shahri`;
  }
  const precisionEl = document.getElementById('location-precision-pill');
  if (precisionEl) {
    precisionEl.textContent = isManual ? "Shahar qo'lda tanlandi" : 'Joylashuv aniqlandi';
  }
}

function updateMosqueGrid(cityName = appState.selectedCity) {
  const grid = document.getElementById('mosque-grid');
  if (!grid) return;

  const items = cityMosqueDatabase[cityName] || cityMosqueDatabase.Toshkent;
  grid.innerHTML = items.map((mosque, index) => {
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mosque.name + ' ' + mosque.address)}`;
    return `
      <article class="mosque-card">
        <div class="mosque-image mosque-image-${(index % 3) + 1}">
          <span class="distance">${mosque.distance} km</span>
        </div>
        <div class="mosque-info">
          <div class="mosque-title">
            <h3>${mosque.name}</h3>
            <span class="verified">✓</span>
          </div>
          <p>${mosque.address}</p>
          <div class="mosque-bottom">
            <span>🕐 5 mahal</span>
            <a href="${mapLink}" target="_blank" rel="noreferrer">Map</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function requestLocationPermission() {
  if (!navigator.geolocation) {
    const statusEl = document.getElementById('location-precision-pill');
    if (statusEl) statusEl.textContent = 'Brauzer geolokatsiyani qo\'llab-quvvatlamaydi.';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const nearestCity = getNearestCity(position.coords.latitude, position.coords.longitude);
      appState.selectedCity = nearestCity;
      setLocationStatus(nearestCity, false);
      localStorage.setItem('sajda-city', nearestCity);
      updateMosqueGrid(nearestCity);
      renderPrayerTimes(nearestCity);
      const citySelectEl = document.getElementById('city-select');
      if (citySelectEl) citySelectEl.value = nearestCity;
      const precisionEl = document.getElementById('location-precision-pill');
      if (precisionEl) precisionEl.textContent = `Joylashuv aniqlandi: ${position.coords.latitude.toFixed(3)}, ${position.coords.longitude.toFixed(3)}`;
      updateProfile();
    },
    () => {
      setLocationStatus(appState.selectedCity, true);
      const precisionEl = document.getElementById('location-precision-pill');
      if (precisionEl) precisionEl.textContent = "Joylashuvga ruxsat berilmagan. Shaharni qo'lda tanlang.";
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
}

function getNearestCity(latitude, longitude) {
  const entries = Object.entries(SAJDA_CONFIG.cityProfiles);
  let nearestCity = entries[0][0];
  let smallestDistance = Number.POSITIVE_INFINITY;

  entries.forEach(([cityName, coords]) => {
    const distance = Math.hypot(latitude - coords.lat, longitude - coords.lon);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      nearestCity = cityName;
    }
  });

  return nearestCity;
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
  const fallbackBearing = calculateBearing(city.lat, city.lon);
  const retryBtn = document.getElementById('qibla-retry-btn');
  const secureContext = window.isSecureContext || (window.location.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(window.location.hostname));

  qiblaState.bearing = fallbackBearing;
  updateQiblaReadout(fallbackBearing);
  setCompassRotation(fallbackBearing);
  updateQiblaDebug();

  if (!secureContext) {
    qiblaState.permissionStatus = 'Denied';
    setStatusMessage('Qibla kompasini ishlatish uchun xavfsiz HTTPS ulanish kerak.');
    if (retryBtn) retryBtn.hidden = false;
    updateQiblaDebug();
    return;
  }

  if (!navigator.geolocation) {
    qiblaState.locationAvailable = false;
    qiblaState.permissionStatus = 'Unavailable';
    setStatusMessage(`Qibla yo'nalishi: ${Math.round(fallbackBearing)}° (geolokatsiya bu brauzerda mavjud emas).`);
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
      setCompassRotation(fallbackBearing);
      updateQiblaReadout(fallbackBearing);
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

  const defaultCity = getCityData(appState.selectedCity);
  const initialBearing = calculateBearing(defaultCity.lat, defaultCity.lon);
  qiblaState.bearing = initialBearing;
  updateQiblaReadout(initialBearing);
  setCompassRotation(initialBearing);
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

function initializeApp() {
  const citySelectEl = document.getElementById('city-select');
  if (citySelectEl) {
    citySelectEl.value = appState.selectedCity;
    citySelectEl.addEventListener('change', () => {
      appState.selectedCity = citySelectEl.value;
      localStorage.setItem('sajda-city', appState.selectedCity);
      setLocationStatus(appState.selectedCity, true);
      updateMosqueGrid(appState.selectedCity);
      renderPrayerTimes(appState.selectedCity);
      updateProfile();
    });
  }

  const locationStatusEl = document.getElementById('location-status');
  if (locationStatusEl) {
    locationStatusEl.addEventListener('click', requestLocationPermission);
    locationStatusEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        requestLocationPermission();
      }
    });
  }

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

  setInterval(() => {
    updateLiveClock();
    updateRamadanCountdown();
    renderPrayerTimes(appState.selectedCity);
  }, 1000);
}

updateLiveClock();
initializeApp();
