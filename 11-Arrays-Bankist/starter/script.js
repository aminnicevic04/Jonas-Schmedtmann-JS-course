// 'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
/*
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //start parametar and end parametar
console.log(arr.slice(-2)); //uzima poslednja dva
console.log(arr.slice(1, -1)); //uzima od prvog do predpsolendjeg tj. poslednjeg ne
console.log(arr.slice());
console.log([...arr] + 1); //string

//splice

// Metoda "splice" u JavaScriptu se koristi za mijenjanje sadržaja polja (engl. array) ili brisanje elemenata iz polja.

//Metoda uzima tri argumenta:

// Index - početni indeks iz kojeg će početi mijenjanje polja
// Count - broj elemenata koji će se izbrisati iz polja počevši od indexa
// Items - elementi koji će se dodati u polje počevši od indexa

// Primjer korištenja metode "splice" za dodavanje elemenata u polje:
let fruits1 = ['apple', 'banana', 'orange'];
fruits1.splice(1, 0, 'grape', 'peach'); // Dodavanje elemenata na index 1, bez brisanja elemenata
console.log(fruits1); // ['apple', 'grape', 'peach', 'banana', 'orange']

// Primjer korištenja metode "splice" za brisanje elemenata iz polja:
let fruits2 = ['apple', 'banana', 'orange'];
fruits2.splice(1, 1); // Brisanje jednog elementa na indexu 1
console.log(fruits2); // ['apple', 'orange']

//CONCAT
//spajanje dva arraya
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'e', 'i', 'h', 'g', 'f'];
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

//nova att metoda
//dodana u ES2022
//radi i na stringovima

const arr3 = [22, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));
//ovo je isto samo sto menja kockaste zagrade

//getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0)); //vraca j

// FOR EACH
// Metoda forEach u JavaScriptu se koristi za prolazak kroz elemente niza i izvođenje neke funkcije za svaki element.
//  Argumenti koji se koriste u forEach petlji su:
// element (obavezno): 
// Predstavlja trenutni element u nizu. 
// Ovaj argument je obavezan i mora biti naveden u funkciji koju koristite za svaki element.

// index (opcionalno): 
// Predstavlja indeks trenutnog elementa u nizu. 
// Ovaj argument je opcionalan i može se koristiti ako je potrebno pristupiti indeksu elementa u funkciji koju koristite za svaki element.

// array (opcionalno): 
// Predstavlja sam niz koji se prolazi kroz forEach petlju. 
// Ovaj argument je opcionalan i može se koristiti ako je potrebno pristupiti nizu u funkciji koju koristite za svaki element.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`); //uzima absolute value bez minusa
  }
}
console.log('-------------------');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}. You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}. You withdraw ${Math.abs(movement)}`); //uzima absolute value bez minusa
  }
}

console.log('---------FOREACH---------'); //movement, index, ceo arr
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}. You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}. You withdraw ${Math.abs(movement)}`); //uzima absolute value bez minusa
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
//poziva funkciju za svaki element u nizu
//i proverava da li je pozitivan ili ne
*/
// forEach with Maps and Set

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
//
