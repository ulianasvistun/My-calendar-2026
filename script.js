// === Дата и язык ===
let currentDate = new Date();
let currentMonth = currentDate.getMonth(); // 0-11
let currentDay = currentDate.getDate();
let currentLanguage = localStorage.getItem("lang") || "en";

// === Месяцы ===
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const weekdaysEn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const weekdaysRu = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];

// === Фоновые изображения месяцев ===
const monthImages = [
  'images/january.jpg',
  'images/february.jpg',
  'images/march.jpg',
  'images/april.jpg',
  'images/may.jpg',
  'images/june.jpg',
  'images/july.jpg',
  'images/august.jpg',
  'images/september.jpg',
  'images/october.jpg',
  'images/november.jpg',
  'images/december.jpg'
];

// === Стихи месяца ===
const monthlyPoems = {
  en: {
    0: "The air stands still...",
    1: "Cold sharpens thought...",
    2: "The earth exhales...",
    3: "The days grow careless...",
    4: "Everything begins to listen...",
    5: "Light stretches endlessly...",
    6: "Warm air carries unsaid things...",
    7: "Everything ripens at once...",
    8: "The world becomes clearer...",
    9: "Wind interrupts thoughts...",
    10: "The light withdraws...",
    11: "Time folds inward..."
  },
  ru: {
    0: "Воздух замирает...",
    1: "Холод обостряет мысли...",
    2: "Земля выдыхает...",
    3: "Дни становятся беспечными...",
    4: "Всё начинает слушать...",
    5: "Свет растягивается бесконечно...",
    6: "Тёплый воздух несёт несказанное...",
    7: "Всё созревает сразу...",
    8: "Мир становится яснее...",
    9: "Ветер прерывает мысли...",
    10: "Свет уходит...",
    11: "Время сворачивается внутрь..."
  }
};

// === Гороскоп Льва ===
const leoHoroscope = {
  en: [
    "Today is about calm confidence.",
    "Focus on what truly matters.",
    "Let reflection guide your choices.",
    "Your energy is noticed.",
    "Finish what you’ve postponed.",
    "Lead with patience.",
    "Creativity flows best without forcing results.",
    "Someone may seek your reassurance.",
    "Trust your intuition.",
    "Today favors clear boundaries."
  ],
  ru: [
    "Сегодня день спокойной уверенности.",
    "Сфокусируйся на действительно важном.",
    "Пусть размышления направляют твои шаги.",
    "Твоя энергия замечается.",
    "Закончите то, что откладывали.",
    "Веди мягко.",
    "Творчество течет лучше без насилия над результатом.",
    "Кто-то ищет твоего ободрения.",
    "Доверяй интуиции.",
    "Сегодня важны ясные границы."
  ]
};

// === Сильные дни Льва ✦ ===
const leoPowerDays = [1,5,8,10,14,17,19,22,25,28];

// === DOM элементы ===
const monthTitle = document.getElementById("monthTitle");
const poemMonth = document.getElementById("poemMonth");
const poemText = document.getElementById("poemText");
const horoscopeEl = document.getElementById("horoscope");
const languageToggle = document.getElementById("languageToggle");
const calendarGrid = document.getElementById("calendarGrid");
const backgroundEl = document.querySelector
