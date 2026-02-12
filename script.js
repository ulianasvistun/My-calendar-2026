window.onload = function() {

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();
  let currentLanguage = localStorage.getItem("lang") || "en";

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

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

  const monthlyPoems = {
    en: {
      0:"The air stands still...",1:"Cold sharpens thought...",2:"The earth exhales...",
      3:"The days grow careless...",4:"Everything begins to listen...",5:"Light stretches endlessly...",
      6:"Warm air carries unsaid things...",7:"Everything ripens at once...",8:"The world becomes clearer...",
      9:"Wind interrupts thoughts...",10:"The light withdraws...",11:"Time folds inward..."
    },
    ru: {
      0:"Воздух замирает...",1:"Холод обостряет мысли...",2:"Земля выдыхает...",
      3:"Дни становятся беспечными...",4:"Всё начинает слушать...",5:"Свет растягивается бесконечно...",
      6:"Тёплый воздух несёт несказанное...",7:"Всё созревает сразу...",8:"Мир становится яснее...",
      9:"Ветер прерывает мысли...",10:"Свет уходит...",11:"Время сворачивается внутрь..."
    }
  };

  const leoHoroscope = {
    en:["Today is about calm confidence.","Focus on what truly matters.","Let reflection guide your choices.","Your energy is noticed.","Finish what you’ve postponed.","Lead with patience.","Creativity flows best without forcing results.","Someone may seek your reassurance.","Trust your intuition.","Today favors clear boundaries."],
    ru:["Сегодня день спокойной уверенности.","Сфокусируйся на действительно важном.","Пусть размышления направляют твои шаги.","Твоя энергия замечается.","Закончите то, что откладывали.","Веди мягко.","Творчество течет лучше без насилия над результатом.","Кто-то ищет твоего ободрения.","Доверяй интуиции.","Сегодня важны ясные границы."]
  };

  const leoPowerDays = [1,5,8,10,14,17,19,22,25,28];

  const monthTitle = document.getElementById("monthTitle");
  const poemMonth = document.getElementById("poemMonth");
  const poemText = document.getElementById("poemText");
  const horoscopeEl = document.getElementById("horoscope");
  const languageToggle = document.getElementById("languageToggle");
  const calendarGrid = document.getElementById("calendarGrid");
  const backgroundEl = document.querySelector(".background");

  function createCalendar(){
    calendarGrid.innerHTML = '';
    const daysInMonth = new Date(currentDate.getFullYear(), currentMonth+1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentMonth, 1).getDay();

    for(let i=0;i<firstDay;i++){
      const emptyDiv = document.createElement('div');
      calendarGrid.appendChild(emptyDiv);
    }

    for(let i=1;i<=daysInMonth;i++){
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');
      dayDiv.textContent = i;
      if(i===currentDay) dayDiv.classList.add('today');
      if(leoPowerDays.includes(i)) dayDiv.classList.add('power-day');
      dayDiv.onclick = ()=>{currentDay=i; updateMonth();}
      calendarGrid.appendChild(dayDiv);
    }
  }

  function updateMonth(){
    monthTitle.textContent = months[currentMonth];
    poemMonth.textContent = months[currentMonth];
    poemText.textContent = monthlyPoems[currentLanguage][currentMonth];
    if(monthImages[currentMonth]) backgroundEl.style.backgroundImage = `url('${monthImages[currentMonth]}')`;
    createCalendar();
    updateHoroscope(currentDay);
  }

  function updateHoroscope(day){
    const index = day % leoHoroscope.en.length;
    horoscopeEl.innerHTML = `<strong>Leo Horoscope</strong><br><em>Message for day ${day}:</em><br>${leoHoroscope[currentLanguage][index]}`;
  }

  document.getElementById("prevMonth").onclick = ()=>{
    currentMonth=(currentMonth-1+12)%12;
    currentDay=1;
    updateMonth();
  }

  document.getElementById("nextMonth").onclick = ()=>{
    currentMonth=(currentMonth+1)%12;
    currentDay=1;
    updateMonth();
  }

  languageToggle.onclick = ()=>{
    currentLanguage = currentLanguage==='en'?'ru':'en';
    localStorage.setItem("lang", currentLanguage);
    languageToggle.textContent = currentLanguage.toUpperCase();
    updateMonth();
  }

  updateMonth();
}
