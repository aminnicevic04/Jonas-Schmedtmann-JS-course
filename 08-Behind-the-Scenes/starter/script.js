// 'use strict';

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
