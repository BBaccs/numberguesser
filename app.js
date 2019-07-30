/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const uiGame = document.querySelector('#game'),
      uiMinNum = document.querySelector('.min-num'),
      uiMaxNum = document.querySelector('.max-num'),
      uiGuessBtn = document.querySelector('#guess-btn'),
      uiGuessInput = document.querySelector('#guess-input'),
      uiMessage = document.querySelector('.message');

// Assign UI min and max
uiMinNum.textContent = min;
uiMaxNum.textContent = max;

// Listen for guess
uiGuessBtn.addEventListener('click', function(){
    let guess = parseInt(uiGuessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
      setMessage(`You must enter a number between ${min} and ${max}`, 'red' );
    } 
});

// Set message function declaration
function setMessage(msg, color) {
  uiMessage.textContent = msg;
  uiMessage.style.color = color;
}