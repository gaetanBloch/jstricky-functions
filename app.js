const bombTimerEl = document.querySelector('#bomb h2');
const defuseButton = document.querySelector('button');

const availableTime = 5 * 1000; // 60 seconds in milliseconds

let bombTimer;
let remainingTime = availableTime;

// defuseButton.addEventListener('click', () => {
//   defuse('Successfully defused!');
// });

defuseButton.addEventListener(
  'click',
  defuse.bind(null, 'Successfully defused!')
);

init('The game started!');

function defuse(successMessage) {
  clearInterval(bombTimer);
  alert(successMessage);
}

function updateTimer() {
  bombTimerEl.textContent = remainingTime / 1000;
}

function init(startingMessage) {
  console.log(startingMessage);

  updateTimer();
  bombTimer = setInterval(function () {
    remainingTime = remainingTime - 1000;
    if (remainingTime <= 0) {
      alert('You lost!');
      clearInterval(bombTimer);
      return;
    }
    updateTimer();
  }, 1000);
}
