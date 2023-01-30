'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]; //sadrzi skorove od player1 i player 2
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.generating a random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;
  //ovo je localna varijabla i ne mozemo je koristiti izvan funckije jer nije globalna
  //math.random da dobijemo random broj do 6
  // +1 koristimo zbog toga sto program broji 0,1,2,3,4,5. i mi dodajemo jos +1
  //math.trunc da ne dobijamo decimalne brojeve

  // 2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //uzimamo source od slike i na mesto gde je broj stavljamo dice

  // 3.chcek for rolled 1: if true switch to next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //nas id je dinamican i menja se good trick btw
  } else {
    // Switch to next player
    switchPlayer();
    //toggle method za dodavanje ove klase kada je potrebna
    //koji zapravo menja pozadinu i vidi se kada se promeni player
    //Metoda toggle() uklanja postojeći token sa liste i vraća false.
    //Ako token ne postoji, dodaje se i funkcija vraća true.
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active players score
  scores[activePlayer] += currentScore;
  // scores[1] = scores[1] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if players score is >= 100
  if (scores[activePlayer] >= 100) {
    // Finish Game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player-winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player-active');
  } else {
    // Switch to the next player
    switchPlayer();
  }
});
