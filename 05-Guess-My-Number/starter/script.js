'use strict';

/*
// DOM-Document Object Model
// API-Aplication Programming Interface
console.log(document.querySelector('.message').textContent);
//prikazivanje selektovanog texta u console

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

const x = function () {
    console.log(32);
};
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //prebacujemo string u number
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    //when player win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#14c91a';
    document.querySelector('.number').style.width = '30rem';

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red'; //radi
      document.querySelector('.between').style.color = 'white'; //radi
      document.querySelector('h1').style.color = 'white'; //radi
      document.querySelector('header').style.borderBottom = '7px solid white'; //radi
      document.querySelector('.number').style.color = 'red'; //radi
      document.querySelector('.number').style.backgroundColor = 'white'; //radi
      document.querySelector('.number').style.width = '30rem'; //radi
      document.querySelector('.message').style.color = 'white'; //radi
      document.querySelector('.label-score').style.color = 'white'; //radi
      document.querySelector('.label-highscore').style.color = 'white'; //radi
      document.querySelector('.guess').style.border = '4px solid white'; //radi
      document.querySelector('.guess').style.color = 'white'; //radi
      document.querySelector('button').style.color = 'red'; //radi
      document.querySelector('button').style.backgroundColor = 'white'; //radi
      document.querySelector('button.check').style.color = 'red'; //radi
      document.querySelector('button.check').style.backgroundColor = 'white'; //radi
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game!!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red'; //radi
      document.querySelector('.between').style.color = 'white'; //radi
      document.querySelector('h1').style.color = 'white'; //radi
      document.querySelector('header').style.borderBottom = '7px solid white'; //radi
      document.querySelector('.number').style.color = 'red'; //radi
      document.querySelector('.number').style.backgroundColor = 'white'; //radi
      document.querySelector('.number').style.width = '30rem'; //radi
      document.querySelector('.message').style.color = 'white'; //radi
      document.querySelector('.label-score').style.color = 'white'; //radi
      document.querySelector('.label-highscore').style.color = 'white'; //radi
      document.querySelector('.guess').style.border = '4px solid white'; //radi
      document.querySelector('.guess').style.color = 'white'; //radi
      document.querySelector('button').style.color = 'red'; //radi
      document.querySelector('button').style.backgroundColor = 'white'; //radi
      document.querySelector('button.check').style.color = 'red'; //radi
      document.querySelector('button.check').style.backgroundColor = 'white'; //radi
    }
    // document.querySelector('.message').textContent = '📉 Too low!';
    // score--; //smanjivanje skora kad pogresite
    // document.querySelector('.score').textContent = score; //ispisivanje smanjenog skora
  }
  //   document.querySelector('.message').textContent = '🎉 Correct Number!';
  //menja se massage
});
