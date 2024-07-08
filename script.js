let startTime,
  elapsedTime = 0,
  timerInterval;
let isRunning = false;

function formatTime(time) {
  return new Date(time).toISOString().slice(11, 23);
}

function updateTime() {
  document.getElementById("time").innerHTML = formatTime(
    new Date().getTime() - startTime + elapsedTime
  );
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (!isRunning) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTime, 10);
    isRunning = true;
  }
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timerInterval);
    elapsedTime += new Date().getTime() - startTime;
    isRunning = false;
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  document.getElementById("time").textContent = "00:00:00.000";
});
