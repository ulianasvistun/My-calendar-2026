body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Georgia', serif;
  color: #fff;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('images/january.jpg'); /* временный фон */
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.7);
}

.calendar-container {
  max-width: 600px;
  margin: 50px auto;
  background: rgba(0,0,0,0.4);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

.calendar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;
}

.calendar-header h1 {
  flex-grow: 1;
  font-size: 24px;
  text-align: center;
}

button {
  background: none;
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 6px;
}

.lang-btn { font-size: 12px; }

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: rgba(255,255,255,0.1);
  padding: 10px 0;
  border-radius: 6px;
  margin-bottom: 5px;
  font-weight: bold;
}

.weekdays div { text-align: center; }

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
}

.calendar-grid .day {
  background: rgba(255,255,255,0.1);
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.calendar-grid .day:hover {
  transform: scale(1.05);
  background: rgba(255,255,255,0.2);
}

.day.today {
  border: 2px solid #ffb84d;
}

.power-day::after {
  content: " ✦";
  color: #ffb84d;
  font-size: 12px;
  opacity: 0.8;
}

.poem-container {
  margin-top: 15px;
  border-top: 1px solid rgba(255,255,255,0.3);
  padding-top: 10px;
}

.poem-container p, .horoscope {
  font-size: 15px;
  line-height: 1.6;
}
