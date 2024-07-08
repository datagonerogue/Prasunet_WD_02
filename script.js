let startTime,
  elapsedTime = 0,
  timerInterval;
let isRunning = false;
let lapTimes = [];

function formatTime(time) {
  return new Date(time).toISOString().slice(11, 23);
}

function updateTime() {
  document.getElementById("time").innerHTML = formatTime(
    new Date().getTime() - startTime + elapsedTime
  );
}

function updateLapTimes() {
  const lapTimesElement = document.getElementById("lapTimes");
  lapTimesElement.innerHTML = "";
  lapTimes.forEach((time, index) => {
    const lapTimeElement = document.createElement("div");
    lapTimeElement.className = "lap-time";
    lapTimeElement.textContent = `Lap ${index + 1}: ${formatTime(time)}`;
    lapTimesElement.appendChild(lapTimeElement);
  });
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (!isRunning) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTime, 10);
    isRunning = true;
  }
});

document.getElementById("lapBtn").addEventListener("click", () => {
  if (isRunning) {
    const currentTime = new Date().getTime() - startTime + elapsedTime;
    lapTimes.push(currentTime);
    updateLapTimes();
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
  lapTimes = [];
  document.getElementById("time").textContent = "00:00:00.000";
  updateLapTimes();
});
