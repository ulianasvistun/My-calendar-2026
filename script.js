// === Дата и язык ===
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
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
    0: `The air stands still,
as if listening to itself.
Snow holds the world together,
every step a quiet promise.`,
    1: `Cold sharpens thought.
Windows glow warmer than words.
Hold on — not tightly,
but honestly.`,
    2: `The earth exhales.
Something restless moves underfoot.
March is not gentle —
it is sincere.`,
    3: `The days grow careless.
Rain forgets where it was going.
Hope enters quietly,
pretending it has always been here.`,
    4: `Everything begins to listen.
Leaves, voices, open windows.
May asks only one thing:
be open.`,
    5: `Light stretches endlessly.
Time slows down,
not to stop —
but to let you notice
what matters.`,
    6: `Warm air carries unsaid things.
Water mirrors the sky without effort.
July lives in pauses,
between heartbeats and long evenings.`,
    7: `Everything ripens at once.
Joy and fatigue share the same space.
Notice them.
They will not repeat.`,
    8: `The world becomes clearer.
Edges sharpen.
Silence gains meaning.
September does not rush — it understands.`,
    9: `Wind interrupts thoughts.
The city speaks louder.
Change feels unavoidable.
This month demands honesty.`,
    10: `The light withdraws.
November is thoughtful.
Listen closely.`,
    11: `Time folds inward.
The year exhales.
Rest.
You have carried enough.`
  },
  ru: {
    0: `Воздух замирает,
словно прислушивается к себе.
Снег скрепляет мир,
каждый шаг — тихое обещание.`,
    1: `Холод обостряет мысли.
Окна светлее слов.
Держись — не крепко,
а честно.`,
    2: `Земля выдыхает.
Что-то неспокойное движется под ногами.
Март не мягок — он искренен.`,
    3: `Дни становятся беспечными.
Дождь забывает путь.
Надежда приходит тихо,
словно всегда была здесь.`,
    4: `Всё начинает слушать.
Листья, голоса, открытые окна.
Май просит лишь одно:
будь открытым.`,
    5: `Свет растягивается бесконечно.
Время замедляется,
не чтобы остановиться —
а чтобы заметить главное.`,
    6: `Тёплый воздух несёт несказанное.
Вода отражает небо без усилий.
Июль живёт в паузах —
между ударами сердца.`,
    7: `Всё созревает сразу.
Радость и усталость делят пространство.
Заметь их.
Они не повторятся.`,
    8: `Мир становится яснее.
Грани остры.
Тишина приобретает смысл.
Сентябрь не спешит — он понимает.`,
    9: `Ветер прерывает мысли.
Город говорит громче.
Перемены неизбежны.
Этот месяц требует честности.`,
    10: `Свет уходит.
Ноябрь задумчив.
Слушай внимательно.`,
    11: `Время сворачивается внутрь.
Год выдыхает.
Отдохни.
Ты нёс достаточно.`
  }
};

// === Гороскоп Льва ===
const leoHoroscope = {
  en: [
    "Today is about calm confidence. You don’t need to rush.",
    "Focus on what truly matters today. Small decisions count.",
    "Let reflection guide your choices, not haste.",
    "Your energy is noticed, even in silence.",
    "Finish what you’ve postponed with gentle attention.",
    "Lead with patience. Strength comes from calm.",
    "Creativity flows best without forcing results.",
    "Someone may seek your reassurance. Offer it freely.",
    "Trust your intuition; it knows more than you think.",
    "Today favors clear boundaries and self-respect."
  ],
  ru: [
    "Сегодня день спокойной уверенности. Не спеши.",
    "Сфокусируйся на действительно важном. Малые решения важны.",
    "Пусть размышления направляют твои шаги, а не спешка.",
    "Твоя энергия замечается, даже в тишине.",
    "Закончите то, что откладывали, с аккуратностью.",
    "Веди мягко. Сила сегодня — в спокойствии.",
    "Творчество течет лучше без насилия над результатом.",
    "Кто-то ищет твоего ободрения. Дай его свободно.",
    "Доверяй интуиции; она знает больше, чем ты думаешь.",
    "Сегодня важны ясные границы и уважение к себе."
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
  let daysInMonth = new Date(currentDate.getFullYear(), currentMonth+1, 0).getDate();
  let firstDay = new Date(currentDate.getFullYear(), currentMonth, 1).getDay();

  // Пустые ячейки до первого дня
  for(let i=0;i<firstDay;i++){
    const emptyEl = document.createElement('div');
    calendarGrid.appendChild(emptyEl);
  }

  for(let i=1;i<=daysInMonth;i++){
    const dayEl = document.createElement('div');
    dayEl.classList.add('day');
    dayEl.textContent = i;
    dayEl.dataset.day = i;
    if(leoPowerDays.includes(i)) dayEl.classList.add('power-day');
    if(i === currentDay) dayEl.classList.add('today');
    dayEl.onclick = () => selectDay(i);
    calendarGrid.appendChild(dayEl);
  }
}

// === Обновление месяца и фон/стих ===
function updateMonth() {
  monthTitle.textContent = months[currentMonth];
  poemMonth.textContent = months[currentMonth];
  backgroundEl.style.backgroundImage = `url('${monthImages[currentMonth]}')`;
  poemText.textContent = monthlyPoems[currentLanguage][currentMonth] || '';
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
document.getElementById("prevMonth").onclick = ()=>{
  currentMonth = (currentMonth-1+12)%12;
  currentDay = 1;
  updateMonth();
};
document.getElementById("nextMonth").onclick = ()=>{
  currentMonth = (currentMonth+1)%12;
  currentDay = 1;
  updateMonth();
};

// === Кнопка смены языка ===
languageToggle.onclick = ()=>{
  currentLanguage = currentLanguage==='en'?'ru':'en';
  localStorage.setItem("lang", currentLanguage);
  languageToggle.textContent = currentLanguage.toUpperCase();
  updateMonth();
};

// === Инициализация ===
updateMonth();
