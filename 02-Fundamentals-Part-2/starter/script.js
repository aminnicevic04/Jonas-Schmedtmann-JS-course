"use strict";
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("i can drive");

// const interface = "audio";
// const private = 534;

// 2



function logger() {
  console.log("amin");
}

//calling
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// 3
//function declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);


// 4

//Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstNAme) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstNAme} retires in ${retirement}`;
};
//ovde nam treba return statement dok nam u proslom pirmeru ne treba
console.log(yearsUntilRetirement(2004, "Amin"));
console.log(yearsUntilRetirement(1977, "Elvedin"));
*/

// 5

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
