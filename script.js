let timeLeft = 60;
const countdown = document.getElementById("countdown");

const timer = setInterval(() => {
  timeLeft--;
  countdown.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    document.getElementById("joinBtn").click(); // Auto redirect
  }
}, 1000);
