const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");

const date = new Date();

const month = date.getMonth();
const monthName = date.toLocaleString("en", { month: "long" });
monthEl.innerText = monthName;

yearEl.innerHTML = date.getFullYear();

const day = date.getDay();
const dayName = date.toLocaleString("en", { weekday: "long" });
dayEl.innerText = dayName;

dateEl.innerHTML = date.getDate();
