'use strict';

let number = document.querySelector('.number');
let random_no = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;


function displayMessage(message) {
    document.querySelector('.message').textContent = message; 
}

document.querySelector('.btn-check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        displayMessage('⛔️ No number!');
    }
    else if(guess === random_no && score !== 0) {
        number.textContent = random_no;
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayMessage('🎉 Correct Number!');

        document.querySelector('.label-score').textContent = '💯 Score: ' + score;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.label-highscore').textContent = '🥇 Highscore: ' + highscore;
        }
    }
    else if(guess !== random_no && score !== 0) {
        displayMessage(guess > random_no ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.label-score').textContent = '💯 Score: ' + score;
    }
    else if (score === 0) {
        displayMessage('LOSER! HAHAHA');
    }
    else {
        displayMessage('No Number Entered');
    }
});

document.querySelector('.btn-again').addEventListener('click', function() { 
    score = 10;
    random_no = Math.floor(Math.random() * 20) + 1;

    displayMessage('Start Guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.label-score').textContent = '💯 Score: ' + score;
});