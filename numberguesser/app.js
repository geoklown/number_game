/*
GAME FUNCTION:
-Player must guess a number between a min and max
- Player gets a certain amount of guesses
-Notify  Player of remaining number of guesses
-Notify Player if the correct if lose
-Let Player choose to play again
*/
// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;
// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');
//Play Again Event Listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})
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
  //Check if Won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct!, you won!`)
  } else {
    //Wrong Number 
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game Over
      gameOver(false, `Game Over, you lost. The correct answer was ${winningNum}`);
    } else {
      //Game Continues Answer Wrong
      setMessage(`${guess} is incorrect, you have ${guessesLeft} guesses left!`, 'blue');
      //Change Border Color
      guessInput.style.borderColor = 'red';
      // Clear Input
      guessInput.value = '';
    }
  }
});
///Game Over Function
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red'
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg);
  //Play Again
  guessBtn.value = 'Play Again?';
  guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
///Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;

}