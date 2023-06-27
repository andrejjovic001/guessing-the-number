'use strict'

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const inputNumEl = document.querySelector('.guess');
const displayNumber = document.querySelector('.number');

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);


const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


const guessNumber = function() {
    const inputNum = +inputNumEl.value;

    if (!inputNum) {
        displayMessage('No number!');
        return;
    }

    if (score >= 1) {
        if (inputNum === secretNumber) {
            if (score > highscore) {
                highscore = score;
                highscoreEl.textContent = `${highscore}`;
            }
                
            displayNumber.textContent = `${secretNumber}`
            displayMessage('You guess number!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
        }

        if (inputNum != secretNumber) {
            score = score - 1;
            scoreEl.textContent = `${score}`;
            displayMessage(inputNum < secretNumber ? 'Too low ⬇' : 'Too high ⬆');
        }
    };


    if (score < 1) {
        displayMessage('You lost the game!');
    }
}




const newGame = function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    scoreEl.textContent = `${score}`;
    displayMessage('Start guessing...');
    inputNumEl.value = '';
    inputNumEl.focus();
    document.querySelector('body').style.backgroundColor = '#c96028';
    document.querySelector('.number').style.width = '15rem';
    displayNumber.textContent = '?'
};




checkBtn.addEventListener('click', guessNumber);
inputNumEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      guessNumber()
    }
});

againBtn.addEventListener('click', newGame);