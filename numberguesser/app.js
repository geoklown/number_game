/*
GAME FUNCTION:
-Player must guess a number between a min and max
- Player gets a certain amount of guesses
-Notify  Player of remaining number of guesses
-Notify Player if the correct if lose
-Let Player choose to play again
*/

// Game Values

let min = 5,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;
// UI Elements

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//Assign UI Min=Max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for Guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);
  // Valaidate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number Between ${min} and ${max}`, 'red');
  }
});

///
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;

}