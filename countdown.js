const aimedDate = " 1 Jan 2023";
const dayys = document.getElementById("days");
const minss = document.getElementById("mins");
const hourss = document.getElementById("hours");
const secss = document.getElementById("secs");

function countdown() {
  const newYearDate = new Date(aimedDate);

  const currentD = new Date();

  const totalSecs = (newYearDate - currentD) / 1000;

  const days = Math.floor(totalSecs / 3600 / 24);

  const hours = Math.floor(totalSecs / 3600) % 24;

  const mins = Math.floor(totalSecs / 60) % 60;

  const seconds = Math.floor(totalSecs % 60);

  dayys.innerHTML = foramtTime(days);
  minss.innerHTML = foramtTime(mins);
  secss.innerHTML = foramtTime(seconds);
  hourss.innerHTML = foramtTime(hours);

  function foramtTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
countdown();

setInterval(() => {
  countdown();
}, 1000);
