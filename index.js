const pointerSecond = document.querySelector(".pointer-second");
const pointerMinute = document.querySelector(".pointer-minute");
const pointerHour = document.querySelector(".pointer-hour");

function updateClock() {
  const now = new Date();

  const ms = now.getMilliseconds();
  const seconds = now.getSeconds() + ms / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30;

  pointerSecond.style.transform =
    `rotate(${secondDeg}deg)`;

  pointerMinute.style.transform =
    `rotate(${minuteDeg}deg)`;

  pointerHour.style.transform =
    `rotate(${hourDeg}deg)`;

  requestAnimationFrame(updateClock);
}

updateClock();