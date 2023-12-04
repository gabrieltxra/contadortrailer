const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");
const countdownContainer = document.querySelector(".COUNTDOWN"); 
const finallyContainer = document.getElementById("finally-container");

const gtaVI = new Date("December 5, 2023 11:00:00");
let musicPlayed = false;

function countdown() {
    const currentDate = new Date();
    let seconds1 = Math.max(0, (gtaVI - currentDate) / 1000);

    if (seconds1 <= 0 && !musicPlayed) {
        playMusic();
        showFinallyMessage();
        musicPlayed = true; 
        document.body.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = "url('bw.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.classList.remove('animate__fadeOut');
        document.body.classList.add('animate__fadeIn');
    }, 100)

    } else if (seconds1 > 0) {
        const days = Math.floor(seconds1 / 3600 / 24);
        const hours = Math.floor(seconds1 / 3600) % 24;
        const mins = Math.floor(seconds1 / 60) % 60;
        const seconds = Math.floor(seconds1) % 60;

        daysEL.innerHTML = days;
        hoursEL.innerHTML = formatTime(hours);
        minsEL.innerHTML = formatTime(mins);
        secondsEL.innerHTML = formatTime(seconds);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function playMusic() {
    const audio = new Audio('nbiv.mp3');
    audio.play();
}

function showFinallyMessage() {
    finallyContainer.innerHTML = "<a href='https://www.youtube.com/watch?v=QdBZY2fkU-0&ab_channel=RockstarGames'><p id='finallyContainer'>FINALMENTE <br>O TRAILER DO SÉCULO</p></a>";
    countdownContainer.style.display = "none";
    finallyContainer.style.display = "block";
    document.getElementById('finallyContainer').style.cssText = `
    font-weight: bold;
    font-size: 6vw; 
    line-height: 1;
    margin: 1rem;
    color: rgb(000, 000, 000);
    text-shadow: 2px 2px 2px #fff, -2px -2px 2px #fff, 2px -2px 2px #fff, -2px 2px 2px #fff;
    position: absolute;
    top: 26%;
    right: 16%; `;
}

countdown();
setInterval(countdown, 1000);
