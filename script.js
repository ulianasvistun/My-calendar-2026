document.addEventListener("DOMContentLoaded", () => {

  // ---------- НАСТРОЙКИ ----------
  let lang = "ru"; // начальный язык
  const monthNames = {
    ru: ["Январь","Февраль","Март","Апрель","Май","Июнь",
         "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
    en: ["January","February","March","April","May","June",
         "July","August","September","October","November","December"]
  };

  const holidays = {
    "01-01": { ru: "Новый год", en: "New Year" },
    "03-08": { ru: "Международный женский день", en: "International Women’s Day" },
    "05-01": { ru: "День труда", en: "Labour Day" },
    "12-31": { ru: "Канун Нового года", en: "New Year’s Eve" }
  };

  const leoHoroscope = [
    { ru: "Сегодня Льву важно прислушаться к себе.", en: "Today Leo should trust intuition." },
    { ru: "День несёт внутреннюю силу и ясность.", en: "Day brings confidence and clarity." }
  ];

  const thoughts = [
    { ru: "Мысль дня: делай шаги с уверенностью.", en: "Thought of the day: move with confidence." },
    { ru: "Мысль дня: наблюдай и учись.", en: "Thought of the day: observe and learn." }
  ];

  const today = new Date();
  const CURRENT_DAY = today.getDate();
  const CURRENT_MONTH = today.getMonth();
  const CURRENT_YEAR = today.getFullYear();

  // ---------- ФОН ----------
  const monthsBackground = ["January","February","March","April","May","June",
                            "July","August","September","October","November","December"];
  const bgPath = `images/${monthsBackground[CURRENT_MONTH]}.jpeg`;
  const img = new Image();
  img.src = bgPath;
  img.onload = () => document.body.style.backgroundImage = `url("${bgPath}")`;
  img.onerror = () => document.body.style.backgroundColor = "#333";

  // ---------- РЕНДЕР КАЛЕНДАРЯ ----------
  const monthNameEl = document.querySelector(".month-name");
  const calendarEl = document.querySelector(".calendar");

  function renderCalendar(month, year) {
    calendarEl.innerHTML = "";
    monthNameEl.textContent = monthNames[lang][month];

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement("div");
      cell.className = "day";
      cell.textContent = day;

      if(day === CURRENT_DAY) cell.classList.add("today");

      const key = `${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
      if(holidays[key]) {
        const dot = document.createElement("div");
        dot.className = "holiday-dot";
        cell.appendChild(dot);
        cell.addEventListener("click", () => showHoliday(holidays[key]));
      }

      cell.addEventListener("click", () => showDay(day));
      calendarEl.appendChild(cell);
    }
  }

  function showDay(day) {
    document.querySelector(".horoscope").textContent = leoHoroscope[day%leoHoroscope.length][lang];
    document.querySelector(".thought").textContent = thoughts[day%thoughts.length][lang];
    document.querySelector(".holiday").textContent = "";
  }

  function showHoliday(holiday) {
    document.querySelector(".holiday").textContent = holiday[lang];
  }

  renderCalendar(CURRENT_MONTH, CURRENT_YEAR);
  showDay(CURRENT_DAY);

  // ---------- ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ----------
  document.getElementById("langBtn").addEventListener("click", () => {
    lang = (lang==="ru")?"en":"ru";
    document.getElementById("langBtn").textContent = (lang==="ru")?"EN":"RU";
    renderCalendar(CURRENT_MONTH, CURRENT_YEAR);
    showDay(CURRENT_DAY);
  });

});
