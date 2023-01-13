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
//moze se koristiti pre nego sto je deklar
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

//Arow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilretirement = (birthYear, firstNAme) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstNAme} retires in ${retirement}`;
};
//ovde nam treba return statement dok nam u proslom pirmeru ne treba
console.log(yearsUntilretirement(2004, "Amin"));
console.log(yearsUntilretirement(1977, "Elvedin"));


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


// 6

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilretirement = function (birthYear, firstNAme) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    console.log(`${firstNAme} has already retired.`);
    return "already retired"; // return - izlazak iz funkcije
    //console.log se nece ispisati jer return znaci izlazak iz funkcije
  }
};

console.log(yearsUntilretirement(1991, "amin"));
console.log(yearsUntilretirement(1970, "amin"));


// 7

Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀


//nacin 1

const Dolphins1 = 85;
const Dolphins2 = 54;
const Dolphins3 = 41;

const Koalas1 = 23;
const Koalas2 = 34;
const Koalas3 = 27;

const calcAvg = (score1, score2, score3) => {
  const calcAvg = (score1 + score2 + score3) / 3;
  return calcAvg;
};
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

let avgDolphins = calcAvg(Dolphins1, Dolphins2, Dolphins3);
let avgKoalas = calcAvg(Koalas1, Koalas2, Koalas3);
// console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log(`No winners`);
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));
console.log(avgDolphins);
console.log(avgKoalas);

//nacin 2
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

// 8
const friend1 = "dzeis";
const friend2 = "hasi";
const friend3 = "tarik";

const friends = ["dzeis", "hasi", "tarik"];
console.log(friends);

const yearss = new Array(1991, 1992, 1993);

console.log(friends[0]);
console.log(friends[3]);

console.log(friends.length); //vraca 3
console.log(friends[friends.length - 1]); //vraca tarik tj poslednjeg iz niza 3 - 1 = 2

friends[2] = "cinda";
console.log(friends);

// mozemo array da menjamo uvek iako mu na pocetku dodamo const

// friends = ["ciki", "miki"]; //ovo ne moze

const firstName = "jonas";
const amin = [firstName, "nicevic", 2023 - 2004, "student", friends];
console.log(amin);
//mozemo da dodajemo u nase nizove ovako
console.log(amin.length);

//vezba 1

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const years = [1990, 1999, 2000, 2003, 2004];
console.log(calcAge(years));
// vraca NaN
// jer oduzima broj sa nizom
// npr da stavimo years + 10 racunalo bi 200410
// a tipa da stavimo years - 10 vracalo bi NaN

const age1 = calcAge(years[0]); //mpr ovo moze
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]); //nalazenje poslednjeg
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
