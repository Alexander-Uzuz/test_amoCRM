const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timerId;


const formatTime = (timeSeconds) => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  while (timeSeconds > 0) {
    if (timeSeconds >= 3600) {
      hours++;
      timeSeconds = timeSeconds - 3600;
    } else if (timeSeconds < 3600 && timeSeconds >= 60) {
      minutes++;
      timeSeconds = timeSeconds - 60;
    } else {
      seconds = timeSeconds;
      timeSeconds = 0;
    }
  }
  
  function formatNum(time) {
    if (time < 10) {
      return `0${time}`;
    }
  
    return time;
  }
  
    return `${formatNum(hours)}:${formatNum(minutes)}:${formatNum(seconds)}`
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timerId = setInterval(() => {
      timerEl.innerHTML = formatTime(seconds);
      if (seconds <= 0) {
        clearInterval(timerId);
      }
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  if (!Number(e.target.value)) {
    inputEl.value = inputEl.value.slice(0, inputEl.value.length - 1)
  }
});

buttonEl.addEventListener('click', () => {
  clearInterval(timerId);
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
