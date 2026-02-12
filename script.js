let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentDay = new Date().getDate();
let currentLanguage = 'en';

const monthNames = {
  en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  ru: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
};

const monthImages = ['january.jpg','february.jpg','march.jpg','april.jpg','may.jpg','june.jpg','july.jpg','august.jpg','september.jpg','october.jpg','november.jpg','december.jpg'];

// Стихи на каждый день месяца (пример для января)
const monthlyPoemsByDay = {
  en: [
    "Pushkin: The air stands still...",
    "Yesenin: Cold sharpens thought...",
    "Mayakovsky: The earth exhales...",
    "Brodsky: The days grow careless...",
    "Pushkin: Another line for day 5...",
    "Yesenin: Another line for day 6...",
    "Mayakovsky: Another line for day 7...",
    "Brodsky: Another line for day 8...",
    "Pushkin: Another line for day 9...",
    "Yesenin: Another line for day 10...",
    "Mayakovsky: Another line for day 11...",
    "Brodsky: Another line for day 12...",
    "Pushkin: Another line for day 13...",
    "Yesenin: Another line for day 14...",
    "Mayakovsky: Another line for day 15...",
    "Brodsky: Another line for day 16...",
    "Pushkin: Another line for day 17...",
    "Yesenin: Another line for day 18...",
    "Mayakovsky: Another line for day 19...",
    "Brodsky: Another line for day 20...",
    "Pushkin: Another line for day 21...",
    "Yesenin: Another line for day 22...",
    "Mayakovsky: Another line for day 23...",
    "Brodsky: Another line for day 24...",
    "Pushkin: Another line for day 25...",
    "Yesenin: Another line for day 26...",
    "Mayakovsky: Another line for day 27...",
    "Brodsky: Another line for day 28...",
    "Pushkin: Another line for day 29...",
    "Yesenin: Another line for day 30...",
    "Mayakovsky: Another line for day 31..."
  ],
  ru: [
    "Пушкин: Воздух замирает...",
    "Есенин: Холод обостряет мысли...",
    "Маяковский: Земля выдыхает...",
    "Бродский: Дни становятся беспечными...",
    "Пушкин: Еще строки для 5-го дня...",
    "Есенин: Еще строки для 6-го дня...",
    "Маяковский: Еще строки для 7-го дня...",
    "Бродский: Еще строки для 8-го дня...",
    "Пушкин: Еще строки для 9-го дня...",
    "Есенин: Еще строки для 10-го дня...",
    "Маяковский: Еще строки для 11-го дня...",
    "Бродский: Еще строки для 12-го дня...",
    "Пушкин: Еще строки для 13-го дня...",
    "Есенин: Еще строки для 14-го дня...",
    "Маяковский: Еще строки для 15-го дня...",
    "Бродский: Еще строки для 16-го дня...",
    "Пушкин: Еще строки для 17-го дня...",
    "Есенин: Еще строки для 18-го дня...",
    "Маяковский: Еще строки для 19-го дня...",
    "Бродский: Еще строки для 20-го дня...",
    "Пушкин: Еще строки для 21-го дня...",
    "Есенин: Еще строки для 22-го дня...",
    "Маяковский: Еще строки для 23-го дня...",
    "Бродский: Еще строки для 24-го дня...",
    "Пушкин: Еще строки для 25-го дня...",
    "Есенин: Еще строки для 26-го дня...",
    "Маяковский: Еще строки для 27-го дня...",
    "Бродский: Еще строки для 28-го дня...",
    "Пушкин: Еще строки для 29-го дня...",
    "Есенин: Еще строки для 30-го дня...",
    "Маяковский: Еще строки для 31-го дня..."
  ]
};

// Гороскоп Льва
const horoscopeByDay = {
  en: [
    "Leo: Today is your day! Be bold.",
    "Leo: Luck favors your courage.",
    "Leo: Focus on creativity.",
    "Leo: Take time to rest and reflect.",
    "Leo: Stay positive and confident.",
    "Leo: A small surprise awaits you.",
    "Leo: Trust your intuition.",
    "Leo: Collaborate with someone today.",
    "Leo: Take a walk outside.",
    "Leo: Creative energy is high.",
    "Leo: Smile and attract good vibes.",
    "Leo: Be patient and calm.",
    "Leo: Try something new.",
    "Leo: Pay attention to details.",
    "Leo: Focus on personal growth.",
    "Leo: Reconnect with a friend.",
    "Leo: Organize your space.",
    "Leo: Be adventurous today.",
    "Leo: Reflect on achievements.",
    "Leo: Express gratitude.",
    "Leo: Avoid distractions.",
    "Leo: Take care of health.",
    "Leo: Read something inspiring.",
    "Leo: Share positivity.",
    "Leo: Challenge yourself gently.",
    "Leo: Seek balance in tasks.",
    "Leo: Listen to music.",
    "Leo: Be mindful and present.",
    "Leo: Plan a creative project.",
    "Leo: Celebrate small wins.",
    "Leo: Relax and recharge."
  ],
  ru: [
    "Лев: Сегодня твой день! Будь смелым.",
    "Лев: Удача благоволит твоей храбрости.",
    "Лев: Сосредоточься на творчестве.",
    "Лев: Найди время для отдыха и размышлений.",
    "Лев: Сохраняй позитив и уверенность.",
    "Лев: Маленький сюрприз ждёт тебя.",
    "Лев: Доверься своей интуиции.",
    "Лев: Сотрудничай с кем-то сегодня.",
    "Лев: Прогуляйся на улице.",
    "Лев: Творческая энергия на высоте.",
    "Лев: Улыбайся и привлекай позитив.",
    "Лев: Будь терпелив и спокоен.",
    "Лев: Попробуй что-то новое.",
    "Лев: Обрати внимание на детали.",
    "Лев: Сосредоточься на личном росте.",
    "Лев: Воссоединись с другом.",
    "Лев: Приведи пространство в порядок.",
    "Лев: Будь сегодня авантюрным.",
    "Лев: Проанализируй достижения.",
    "Лев: Выражай благодарность.",
    "Лев: Избегай отвлекающих факторов.",
    "Лев: Заботься о здоровье.",
    "Лев: Почитай что-то вдохновляющее.",
    "Лев: Делись позитивом.",
    "Лев: Мягко брось себе вызов.",
    "Лев: Ищи баланс в делах.",
    "Лев: Слушай музыку.",
    "Лев: Будь внимателен и осознан.",
    "Лев: Планируй творческий проект.",
    "Лев: Отмечай маленькие победы.",
    "Лев: Расслабься и восстановись."
  ]
};

const languageBtn = document.getElementById('languageBtn');
const monthNameElem = document.getElementById('monthName');
const monthBackground = document.getElementById('monthBackground');
const calendarBody = document.getElementById('calendarBody');
const poemBox = document.getElementById('poemBox');
const horoscopeText = document.getElementById('horoscopeText');

function updateCalendar(){
  monthNameElem.textContent = monthNames[currentLanguage][currentMonth];
  monthBackground.src = 'images/' + monthImages[currentMonth];

  calendarBody.innerHTML = '';
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth+1,0).getDate();

  let date = 1;
  for(let i=0;i<6;i++){
    const row = document.createElement('tr');
    for(let j=0;j<7;j++){
      const cell = document.createElement('td');
      if(i===0 && j<firstDay){
        cell.textContent = '';
      } else if(date>daysInMonth){
        cell.textContent = '';
      } else {
        cell.textContent = date;
        if(date === currentDay){
          cell.classList.add('current-day');
        }
        if(date===15){cell.textContent += ' ✦';} // пример особого дня
        cell.addEventListener('click',()=>{updatePoem(date); updateHoroscope(date);});
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }

  updatePoem(currentDay);
  updateHoroscope(currentDay);
}

function updatePoem(day){
  const poems = monthlyPoemsByDay[currentLanguage];
  const index = (day-1) % poems.length;
  poemBox.innerHTML = poems[index];
}

function updateHoroscope(day){
  const horoscopes = horoscopeByDay[currentLanguage];
  const index = (day-1) % horoscopes.length;
  horoscopeText.innerHTML = horoscopes[index];
}

document.getElementById('prevMonth').addEventListener('click',()=>{
  currentMonth = (currentMonth+11)%12;
  updateCalendar();
});

document.getElementById('nextMonth').addEventListener('click',()=>{
  currentMonth = (currentMonth+1)%12;
  updateCalendar();
});

languageBtn.addEventListener('click',()=>{
  currentLanguage = (currentLanguage==='en')?'ru':'en';
  languageBtn.textContent = (currentLanguage==='en')?'EN':'RU';
  updateCalendar();
});

updateCalendar();
