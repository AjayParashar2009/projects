const time = document.getElementsByClassName("time");
const startBtn = document.getElementsByClassName("play");

const resetBtn = document.getElementsByClassName("restart");
const pauseBtn = document.getElementsByClassName("pause");

let seconds = 60;

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

let timer;

function startTimer() {
  timer = setInterval(() => {
    seconds--;
    time[0].innerHTML = formatTime(seconds);

    if (seconds <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function resetTimer() {
  time[0].innerHTML = "01:00";
  clearInterval(timer);
  seconds = 60;
}

function pauseTimer() {
  clearInterval(timer);
}

startBtn[0].addEventListener("click", startTimer);

resetBtn[0].addEventListener("click", resetTimer);

pauseBtn[0].addEventListener("click",pauseTimer)