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

    // Check if won
    if(guess === winningNum) {
      // Game over - WON
      // Disable input
      uiGuessInput.disbaled = true;
      // Change border color
      uiGuessInput.style.borderColor = 'green';
      setMessage(`Congratulations ${winningNum} was the correct number, YOU'VE WON!`, 'green');
    } else {
      // Wrong num
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        // Game Over - LOST
      
        // Game continues - answer was wrong
        // Disable input
        uiGuessInput.disbaled = true;
        // Change border color
        uiGuessInput.style.borderColor = 'red';
        setMessage(`Game Over, you've lost. The correct number was ${winningNum}`, 'red');
      }
    }
});

// Set message function declaration
function setMessage(msg, color) {
  uiMessage.textContent = msg;
  uiMessage.style.color = color;
}