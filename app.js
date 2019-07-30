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
    winningNum = Math.floor(Math.random()* (max - min + 1) + min),
    guessesLeft = 3;
    console.log(min)

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

    // Validate guess
    if (isNaN(guess) || guess < min || guess > max) {
      setMessage(`You must enter a number between ${min} and ${max}`, 'red' );
    }  // Check if won
    else if (guess === winningNum) {
      // Game over - WON
      gameOver(true, `Congratulations ${winningNum} was the correct number, YOU'VE WON!`);
    } else {
      // Wrong num
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        // Game Over - LOST
        gameOver(false, `Game Over, you've lost. The correct number was ${winningNum}`);
      } else {
        // Tell user it's the wrong num
        setMessage(`${guess} isn't correct, ${guessesLeft} guesses left`, 'red');

        // Clear Input
        uiGuessInput.value = '';
      }
    }
});

// Play again event listener
game.addEventListener('mousedown', function(e){
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Set message function
function setMessage(msg, color) {
  uiMessage.textContent = msg;
  uiMessage.style.color = color;
}

// Set game over function
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  uiGuessInput.disabled = true;
  // Change border color
  uiGuessInput.style.borderColor = color;
  setMessage(msg, color);

  // Play Again?
  uiGuessBtn.value = 'Play Again';
  uiGuessBtn.className += 'play-again';
}