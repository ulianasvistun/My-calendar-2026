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
const backgroundEl = document.querySelector(".background");

// === Создание сетки календаря ===
function createCalendar() {
  calendarGrid.innerHTML = '';

  // Число дней в текущем месяце
  const daysInMonth = new Date(currentDate.getFullYear(), currentMonth+1, 0).getDate();
  const firstDayIndex = new Date(currentDate.getFullYear(), currentMonth, 1).getDay();

  // Пустые ячейки до 1-го числа
  for(let i=0; i<firstDayIndex; i++){
    const emptyDiv = document.createElement('div');
    calendarGrid.appendChild(emptyDiv);
  }

  for(let i=1; i<=daysInMonth; i++){
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.textContent = i;
    dayDiv.dataset.day = i;

    if(leoPowerDays.includes(i)) dayDiv.classList.add('power-day');
    if(i === currentDay) dayDiv.classList.add('today');

    dayDiv.onclick = () => selectDay(i);
    calendarGrid.appendChild(dayDiv);
  }
}

// === Обновление месяца, фона, стихов ===
function updateMonth() {
  monthTitle.textContent = months[currentMonth];
  poemMonth.textContent = months[currentMonth];
  poemText.textContent = monthlyPoems[currentLanguage][currentMonth] || '';

  // Обновляем фон
  if(monthImages[currentMonth]){
    backgroundEl.style.backgroundImage = `url('${monthImages[currentMonth]}')`;
  }

  createCalendar();
  updateHoroscope(currentDay);
}

// === Гороскоп по дню ===
function updateHoroscope(day) {
  const index = day % leoHoroscope.en.length;
  horoscopeEl.innerHTML = `
    <strong>Leo Horoscope</strong><br>
    <em>Message for day ${day}:</em><br>
    ${leoHoroscope[currentLanguage][index]}
  `;
}

// === Выбор дня ===
function selectDay(day){
  currentDay = day;
  updateMonth();
}

// === Кнопки смены месяца ===
document.getElementById("prevMonth").onclick = () => {
  currentMonth = (currentMonth-1+12) % 12;
  currentDay = 1;
  updateMonth();
};

document.getElementById("nextMonth").onclick = () => {
  currentMonth = (currentMonth+1) % 12;
  currentDay = 1;
  updateMonth();
};

// === Кнопка смены языка ===
languageToggle.onclick = () => {
  currentLanguage = currentLanguage==='en'?'ru':'en';
  localStorage.setItem("lang", currentLanguage);
  languageToggle.textContent = currentLanguage.toUpperCase();
  updateMonth();
};
const holidays = {
    "01-01": { ru: "Новый год", en: "New Year" },
    "03-08": { ru: "Международный женский день", en: "International Women’s Day" },
    "05-01": { ru: "День труда", en: "Labour Day" },
    "12-31": { ru: "Канун Нового года", en: "New Year’s Eve" }
  };
// === Инициализация ===
updateMonth();
