let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;
let savedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        timerInterval = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
        startStopBtn.classList.remove('start');
        startStopBtn.classList.add('stop');
        running = true;
    } else {
        clearInterval(timerInterval);
        savedTime = new Date().getTime() - startTime;
        startStopBtn.textContent = 'Start';
        startStopBtn.classList.remove('stop');
        startStopBtn.classList.add('start');
        running = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00.000';
    startStopBtn.textContent = 'Start';
    startStopBtn.classList.remove('stop');
    startStopBtn.classList.add('start');
    running = false;
    savedTime = 0;
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let milliseconds = parseInt((difference % 1000) / 10);
    let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
