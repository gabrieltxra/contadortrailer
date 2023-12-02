const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

const gtaVI = new Date("December 5, 2023 11:00:00");

function countdown() {
    const currentDate = new Date();
    const seconds1 = (gtaVI - currentDate) / 1000;

    const days = Math.floor(seconds1 / 3600 / 24);
    const hours = Math.floor(seconds1 / 3600) % 24;
    const mins = Math.floor(seconds1 / 60) % 60;
    const seconds = Math.floor(seconds1) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
