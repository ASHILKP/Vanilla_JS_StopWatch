var seconds = 0;
var tens = 0;

var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var interval;

function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

document.getElementById("button-start").onclick = function () {
  interval = setInterval(startTimer);
};

document.getElementById("button-stop").onclick = function () {
  clearInterval(interval);
};

document.getElementById("button-reset").onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
};
