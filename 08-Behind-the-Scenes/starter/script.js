'use strict';
/*
// Execution contest
//1) variable enviroment
//2) scope chain
//3) this keyword

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 2004) {
      var milenial = true;
      //ressigning output
      const output = 'new output';
      const firstName = 'Steven';
      const str = `oh, and u are milenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(milenial); // pronalazi ga jer je var block scoped
    // console.log(str);// ne moze jer su let i const block scoped
    // add(2, 3); // add is not defined
    // console.log(add(2, 3)); // add is not defined
    console.log(output); //ispisuje novi output, kada je const to ne radi vec ispisuje stari
  }
  printAge();

  return age;
}

const firstName = 'amin';
calcAge(2004); // bez pozivanja ove funkcije ne bi nam se ispisalo u konzoli firstName
// ali ne moramo je nigde prikazati
// console.log(age);
// printAge();

// HOISTING and TDZ(temporal dead zone)

//variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

//functions

console.log(addDecl(2, 3)); //declaration function moze ovo da radi
// console.log(addExpr(2, 3)); //expresion function ne moze displeya error zato sto ima const
// console.log(addArrow(2, 3)); //isto se desava i sa arrow funkcijom

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// example

if (!numProducts) deleteShoppingCart();
//znaci ako numproduct nije 10 obrisi sve tj u svakom slucaju brisi

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
// na window objectu mozemo videti samo varijablu oznacu sa var
console.log(x === window.x); // return true
console.log(x === window.y); // return false
console.log(x === window.z); // return false

// This keywords
//is special variable that is created for every execution context(every function).
//Takes the values of(points to) the "owner" of the function in which the this keyword is used

// not static.

//Posebna varijabla koja se kreira za svaki kontekst izvršavanja (svaku funkciju).
//Uzima vrijednost (pokazuje na) 'vlasnika' funkcije u kojoj se koristi ova ključna riječ

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAge(2004); //ovde je undefined
const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); //this is window bcs window is the disc keyword in global scope
};
calcAgeArrow(2004); //ovde je window{}
// because the arrow function does not get its own disc keyword
// ona koritsti lexical keyword, which means that it uses the disc keyword of his parent
// function or of his parent scope

// jer funkcija strelice ne dobiva svoj disc keyword ona koritsti lexical keyword,
// što znači da koristi disc keyword svoje parent funkcije ili njegovog matičnog scopa

const amci = {
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
amci.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = amci.calcAge; //METHOD BORROWING
// mi smo ovde kopirali iz jednog objekta u drugi i ovo se zove method Borrowind
matilda.calcAge(); // 6 jer radi istu onu funkciju odozgo tj metodu

// const f = amci.calcAge;
// f();
// prikazuje gresku zbg toga sto nije zakacena ni na jedan objekat

// regular function vs arrow function

var firstName = 'matilda';
//e kad je ovako prikazuje hey matilda zbg toga sto odma ide na global scope

const jonas = {
  firstName: 'jonas',
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    //solution 1

    // const self = this;
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();

    //solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  great: () => console.log(`hey ${this.firstName}`),
};
jonas.great();
//greska zbg toga sto je arrow function nema svoj keyword
//i uzima parent scope a parent scope ovog objekta je global scope

//Arguments keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 5, 4);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};


// ===

let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend:', friend); //27
console.log('me', me); //27
*/

let lastName = 'wiliams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName);

const jesica = {
  firstName: 'jesica',
  lastName: 'wiliams',
  age: 23,
};
const marriedJessica = jesica;
marriedJessica.lastName = 'davis';
console.log('before marriage:', jesica);
console.log('after marriage:', marriedJessica);

const jesica2 = {
  firstName: 'jesica',
  lastName: 'wiliams',
  age: 23,
  family: ['alice', 'bob'],
};

const jesicaCopy = Object.assign({}, jesica2);
jesicaCopy.lastName = 'davis';

jesicaCopy.family.push('mary');
jesicaCopy.family.push('john');

console.log('before marriage:', jesica2);
console.log('after marriage:', jesicaCopy);
