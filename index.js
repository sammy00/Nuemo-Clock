setInterval(() => {
const pointerSecond = document.querySelector(".pointer-second");
const pointerMinute = document.querySelector(".pointer-minute");
const pointerHour = document.querySelector(".pointer-hour"); 

const date = new Date();
const second = date.getSeconds() * 6;
const minute = date.getMinutes() * 6;
const hour = date.getHours() * 30 + minute / 12;

pointerSecond.style.transform = "rotate(" + second + "deg)";
pointerMinute.style.transform = "rotate(" + minute + "deg)";
pointerHour.style.transform = "rotate(" + hour + "deg)";



},1000);