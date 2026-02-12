/***********************
 * НАСТРОЙКИ
 ***********************/
const LANG = "ru"; // "ru" или "en"

/***********************
 * ДАТА
 ***********************/
const today = new Date();
const CURRENT_DAY = today.getDate();
const CURRENT_MONTH = today.getMonth(); // 0–11
const CURRENT_YEAR = today.getFullYear();

/***********************
 * ПРАЗДНИКИ
 ***********************/
const holidays = {
  "01-01": { ru: "Новый год", en: "New Year" },
  "03-08": { ru: "Международный женский день", en: "International Women’s Day" },
  "05-01": { ru: "День труда", en: "Labour Day" },
  "05-09": { ru: "День Победы", en: "Victory Day" },
  "06-12": { ru: "День России", en: "Russia Day" },
  "11-04": { ru: "День народного единства", en: "Unity Day" },
  "12-31": { ru: "Канун Нового года", en: "New Year’s Eve" }
};

/* Исламские праздники по годам (пример — можно дополнять) */
const islamicHolidaysByYear = {
  2026: {
    "03-20": { ru: "Ид аль-Фитр", en: "Eid al-Fitr" },
    "06-26": { ru: "Ид аль-Адха", en: "Eid al-Adha" }
  }
};

/***********************
 * ГОРОСКОП ЛЬВА (365)
 ***********************/
const leoHoroscope = Array.from({ length: 366 }, (_, i) => ({
  ru: `Сегодня Льву важно прислушаться к себе. День ${i + 1} несёт внутреннюю силу и ясность.`,
  en: `Today Leo should trust intuition. Day ${i + 1} brings confidence and clarity.`
}));

/***********************
 * СТИХИ ПО МЕСЯЦАМ (4 строки × 365)
 ***********************/
const poems = {
  0: Array.from({ length: 31 }, (_, d) => ({
    ru: `Январь молчит в стекле окон,  
Свет медленно ложится в дом.  
День ${d + 1} дышит тишиной,  
И мир становится теплом.`,
    en: `January rests behind the glass,  
Soft light enters every room.  
Day ${d + 1} breathes quiet calm,  
And warmth dispels the gloom.`
  })),

  1: Array.from({ length: 29 }, (_, d) => ({
    ru: `Февраль рисует на стекле,  
Снежинки — мысли о весне.  
День ${d + 1} хранит вопрос,  
Что скоро станет ясным мне.`,
    en: `February draws on glass,  
Snowflakes whisper of the spring.  
Day ${d + 1} holds a thought,  
Soon clarity it will bring.`
  })),

  2: Array.from({ length: 31 }, (_, d) => ({
    ru: `Март шагает по воде,  
Лёд уходит в никуда.  
День ${d + 1} — начало слов,  
Что давно ждала душа.`,
    en: `March steps lightly on the stream,  
Ice dissolves and drifts away.  
Day ${d + 1} begins the words  
Your soul has saved to say.`
  })),

  3: Array.from({ length: 30 }, (_, d) => ({
    ru: `Апрель смеётся сквозь дожди,  
В зелени таится свет.  
День ${d + 1} даёт надежду,  
Что невозможного нет.`,
    en: `April laughs through falling rain,  
Green reveals the hidden light.  
Day ${d + 1} brings gentle hope,  
That all things turn out right.`
  })),

  4: Array.from({ length: 31 }, (_, d) => ({
    ru: `Май цветёт без лишних слов,  
Воздух полон тёплых грёз.  
День ${d + 1} — как обещание,  
Что всё сбудется всерьёз.`,
    en: `May blooms quietly and bright,  
Dreams hang warm within the air.  
Day ${d + 1} is a promise  
Life is honest, kind, and fair.`
  })),

  5: Array.from({ length: 30 }, (_, d) => ({
    ru: `Июнь в прозрачности утра,  
Мир открыт и не спешит.  
День ${d + 1} — шаг навстречу,  
Где душа легко дышит.`,
    en: `June awakens soft and clear,  
The world feels open, wide, and slow.  
Day ${d + 1} steps forward  
Where your spirit starts to glow.`
  })),

  6: Array.from({ length: 31 }, (_, d) => ({
    ru: `Июль звенит теплом реки,  
Солнце пишет золотом.  
День ${d + 1} — как вдох свободы,  
Без условий и потом.`,
    en: `July hums with river light,  
Sun writes stories made of gold.  
Day ${d + 1} is freedom’s breath,  
Unrestricted, calm, and bold.`
  })),

  7: Array.from({ length: 31 }, (_, d) => ({
    ru: `Август дышит тишиной,  
Зрелость прячется в плодах.  
День ${d + 1} — момент понять,  
Что ты крепко стоишь на ногах.`,
    en: `August breathes a silent peace,  
Ripeness rests in every tree.  
Day ${d + 1} lets you know  
How strong and steady you can be.`
  })),

  8: Array.from({ length: 30 }, (_, d) => ({
    ru: `Сентябрь медленно идёт,  
Листья учат отпускать.  
День ${d + 1} шепчет мягко:  
Иногда полезно ждать.`,
    en: `September walks in softer tones,  
Leaves teach how to let things go.  
Day ${d + 1} gently whispers:  
Patience helps your future grow.`
  })),

  9: Array.from({ length: 31 }, (_, d) => ({
    ru: `Октябрь — честный разговор,  
В небе холод и покой.  
День ${d + 1} снимает маски,  
Оставляя быть собой.`,
    en: `October speaks in honest ways,  
Cool skies settle, calm and deep.  
Day ${d + 1} removes the mask,  
Letting truth and selfhood keep.`
  })),

  10: Array.from({ length: 30 }, (_, d) => ({
    ru: `Ноябрь держит паузу,  
Между светом и зимой.  
День ${d + 1} — как тёплый взгляд,  
Что останется с тобой.`,
    en: `November holds a gentle pause,  
Between the dark and winter’s start.  
Day ${d + 1} feels like a look  
That quietly warms your heart.`
  })),

  11: Array.from({ length: 31 }, (_, d) => ({
    ru: `Декабрь — круг, что завершён,  
Свет гирлянд и тишина.  
День ${d + 1} — благодарность  
За всё, чем была полна.`,
    en: `December closes every ring,  
Lights glow softly, calm and bright.  
Day ${d + 1} says thank you  
For the year and all its light.`
  }))
};

/***********************
 * РЕНДЕР КАЛЕНДАРЯ
 ***********************/
function renderCalendar(month, year) {
  const calendar = document.querySelector(".calendar");
  calendar.innerHTML = "";

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "day";
    cell.textContent = day;

    // Подсветка сегодня
    if (day === CURRENT_DAY && month === CURRENT_MONTH && year === CURRENT_YEAR) {
      cell.classList.add("today");
    }

    const key = `${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    const holiday =
      holidays[key] ||
      (islamicHolidaysByYear[year] && islamicHolidaysByYear[year][key]);

    if (holiday) {
      const dot = document.createElement("div");
      dot.className = "holiday-dot";
      cell.appendChild(dot);
      cell.addEventListener("click", () => showHoliday(holiday));
    }

    cell.addEventListener("click", () => showDayContent(day, month));

    calendar.appendChild(cell);
  }
}

/***********************
 * КОНТЕНТ ДНЯ
 ***********************/
function showDayContent(day, month) {
  const poem = poems[month][day - 1][LANG];
  const horoscope = leoHoroscope[day - 1][LANG];

  document.querySelector(".poem").innerText = poem;
  document.querySelector(".horoscope").innerText = horoscope;
}

function showHoliday(holiday) {
  document.querySelector(".holiday").innerText = holiday[LANG];
}

/***********************
 * СТАРТ
 ***********************/
renderCalendar(CURRENT_MONTH, CURRENT_YEAR);
showDayContent(CURRENT_DAY, CURRENT_MONTH);
