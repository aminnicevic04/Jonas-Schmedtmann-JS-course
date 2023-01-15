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
// a t7888888\a90000000000000000000000000000000000000SDDDDDDDDDDDDipa da stavimo years - 10 vracalo bi NaN

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


// 9
const friends = ["dzeis", "hasi", "tarik"];

// add elements
friends.push("anel");
console.log(friends);

const newLenght = friends.push("anel");
//vraca koliko elemenata imamo u nizu
console.log(newLenght);
// vraca 5 jer smo dva puta dodali anel

friends.unshift("murga");
console.log(friends);

// remove elements

friends.pop();
console.log(friends);
// ako zelimo poslednja dva da maknemo samo dva puta upotrebimo ovu metodu

const popped = friends.pop();
console.log(popped);
//vraca element koji smo izbacili

friends.shift();
console.log(friends);

console.log(friends.indexOf("hasi"));
//ova metoda govori nam na kojoj poziciji se nalazi trazeni element

console.log(friends.includes("hasi"));
console.log(friends.includes("anel"));
//pokazuje nam sa true and false da li se dati element nalazi u nasem nizu
friends.push(23);
console.log(friends.includes("23")); //vraca false

if (friends.includes("hasi")) {
  //ako je ovo tacno ispisace se u konzoli sta zadamo naravno
  console.log("u have a friends called hasi");
}

console.log(friends);

// 10 
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + bills[2]];
console.log(bills, tips, total);

*/

// 11
