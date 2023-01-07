// 1
/*
let js = "amazing";
if (js === "amazing") alert("js is fun");

console.log(40 - 2 + 30);

// 2

console.log("jonas");
console.log(23);

let firstName = "Amci";
console.log(firstName);

let PI = 3.1415;
console.log(PI);

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob);

// 3
data types
*value*
- 1)object
objektno orjentisano programiranje
let me = {
    name:'Amin' ;
    surname = 'Nicevic' ;
}
- 2) primitive
ono programiranje koje sada ucim
let firstName = "amin";
let age = 30;

7 primitive data types
1) Nummber
let age = 23;
2) String
let firstName = 'amin';
3) Boolean -logical type true and false
let fullAge = true;
4) Undefined : value token by a variable that is not yet defined('empty value')
let children;
5) Null : also means 'empty value'
6) Symbols (ES2015) : vlaue that is unique and cannot be changed[not useful for now]
7) BigInt (ES2020) :larger integers than the Number type can hold

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
// typeof operator
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "amin");

javascriptIsFun = "yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// 4
let age = 30;
age = 31; //name - mutated variable

const birthYear = 2004;
// birthYear = 2005; //const never change

// const job; // const cant be a undefined we have to initializer

var job = "programmer";
job = "teacher";

lastName = "nicevic";
console.log(lastName);


//5
//operators

// Math operators
const now = 2037;
const ageAmin = now - 2004;
const ageSarah = now - 2020;
console.log(ageAmin, ageSarah);

console.log(ageAmin * 2, ageAmin / 10, 2 ** 3);
// 2 ** 3 mean (dva na kubni) 2*2*2

const firstName = "amin";
const lastName = "nicevic";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // return 15
x += 10; // means x = x+10 //return 25
x *= 4; // means x = x*4 //return100
x++; // means x = x+1
x--; // means x= x-1

console.log(x);

// Comparasion operators
console.log(ageAmin > ageSarah); // if is it true he will return true is it false he will return false
// we have < , > , <= , >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


// 6
// Operator precendence (prednost)
// podsetnik https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2037;
const ageAmin = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const avarageAge = (ageAmin + ageSarah) / 2;
console.log(ageAmin, ageSarah, avarageAge);


// 7
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �


const markWeightsOne = 78;
const markTallOne = 1.69;

const johnWeightsOne = 92;
const johnTallOne = 1.95;

let markBmiOne = markWeightsOne / markTallOne ** 2;
let johnBmiOne = johnWeightsOne / johnTallOne ** 2;
let markHigherBMIOne = markBmiOne > johnBmiOne;

console.log(markBmiOne, johnBmiOne, markHigherBMIOne);

//

const markWeightsTwo = 95;
const markTallTwo = 1.88;

const johnWeightsTwo = 85;
const johnTallTwo = 1.76;

let markBmiTwo = markWeightsTwo / markTallTwo ** 2;
let johnBmitwo = johnWeightsTwo / johnTallTwo ** 2;
let markHigherBMITwo = markBmiTwo > johnBmitwo;
console.log(markBmiTwo, johnBmitwo, markHigherBMITwo);


// 8

const firstName = "amin";
const job = "student";
const birthYear = 2004;
const year = 2023;

const amin =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(amin);

//template string
const aminNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(aminNew);

console.log(`just a regular string...`);

//string with a multiple lines
console.log(
  "string with \n\
multiple \n\
lines"
);

//another and better way to make a string with multiple lines
console.log(`string with
multiple
lines`);


// 9

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving licens");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2004;

let century; //ovako i ostavimo ga kao praznog
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
//moramo century izbaciti izvan bloka
//i tek onda tada ce moci da se prikaze u konzoli


// 10

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀



const markWeights = 78;
const markTall = 1.69;

const johnWeights = 92;
const johnTall = 1.95;

let markBmi = markWeights / markTall ** 2;
let johnBmi = johnWeights / johnTall ** 2;

if (markBmi > johnBmi) {
  console.log(
    `Mark's BMI ${markBmi.toFixed(2)} is higher than Jon's ${johnBmi.toFixed(
      2
    )}`
  );
} else {
  console.log(
    `John's BMI ${johnBmi.toFixed(2)} is higher than Mark's ${markBmi.toFixed(
      2
    )}`
  );
}

// 11

// Covnersion is when we manually convert from one type to another
// Coercion is when JavaScript automatically converts types behidn the scenes for us
//  we can convert to a number, to a string, to a boolien

//type conversion
const inputYear = "2004";
console.log(Number(inputYear)); //convert in number
console.log(Number(inputYear) + 18);

console.log(Number("jonas")); //return NaN
console.log(typeof NaN);

console.log(String(23), 23); // not gona work

//type coercion
console.log("i am " + 23 + " yo");
//here we have a string + number + string = string
console.log("i am " + "23" + " yo"); //same like above
console.log("i am " + String(23) + " yo"); //same like above

console.log("23" - "10" + 3); // this time JS convert strings to a numbers

console.log("23" * "2"); // this time JS convert strings to a numbers

console.log("23" / "2"); // this time JS convert strings to a numbers

let n = "1" + 1;
n = n - 1;
console.log(n); //return number 10


// 12
// falsy values
// 0, '', undefined, null, NaN
// all of this 5 values will be converted to false when we attempt
// to convert then to a boolean

console.log(Boolean(0));
console.log(Boolean("jonas")); // svaki string koji nije prazan je truth
console.log(Boolean("")); //empty string (false)
console.log(Boolean(undefined));
console.log(Boolean({})); // empty object (true)

const money = 0;
if (money) {
  // ovo gleda da li je iskaz tacan posto 0 daje false onda odma prebacuje na else
  console.log("dont spend it all");
} else {
  console.log("you should get a job");
}

//return 'you should get a job'
// da je money = 100; na primer onda bi if uslov bio true i ispisalo bi dont spend all money

let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("undefined");
}


//13
const age = 18;
if (age === 18) console.log("u just became an adult(strict)");
// tri zagrade proveravaju sve
if (age == 18) console.log("u just became an adult(loose)");
// dok dve zagrade samo da li je 18 = 18

//bolje je da koristimo strict operator zbog lakseg nalazenja buga u kodu

const favourite = Number(prompt("whats ur favourite number"));
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 23) {
//   console.log("23 is ammezing number");
// }

if (favourite === 23) {
  // ovde se ne ispisuje nista u konzoli ako ne pretvorimo string u number
  // zbg toga sto onaj broj koji unosimo u promptu biva string
  // a ovaj strict operator proverava da li je broj i ako nije
  // ispisace false i nece nastavljati sa kodom
  console.log("23 is cool number");
} else if (favourite === 7) {
  console.log("7 is also cool number");
} else {
  console.log("number is not 23 or 7");
}

if (favourite !== 23) {
  // ako nije 23 ispisi sledece
  console.log("why not 23");
}


//14
// and operator &&
// oba moraju da budu true da bi bilo true

// or operator ||
// samo jedno mora biti true da bi ispisalo true

// not operator !
// ako je a=true; onda ako koristimo not operator biva a=false; samo suprotno

// a = false;
// b = true;

// !a = true;
// a & b = false;
// a | b = true;
// !a & b = true;
// a | !b= false


//15

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive");
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else should drive");
}
// u if uslovu smo stavili da sarah niju umorna i to je sada =false

// 16

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀


const Dolphins1 = 96;
const Dolphins2 = 108;
const Dolphins3 = 89;

const Koalas1 = 88;
const Koalas2 = 91;
const Koalas3 = 110;

const DolphinsAVG = (Dolphins1 + Dolphins2 + Dolphins3) / 3;
const KoalasAVG = (Koalas1 + Koalas2 + Koalas3) / 3;

if (DolphinsAVG > KoalasAVG && DolphinsAVG >= 100) {
  console.log("Dolphins WIN!!!");
} else if (KoalasAVG >= DolphinsAVG && KoalasAVG >= 100) {
  console.log("Koalas WIN!!!");
} else if (
  KoalasAVG === DolphinsAVG &&
  DolphinsAVG >= 100 &&
  KoalasAVG >= 100
) {
  console.log("It's DRAW!!!");
} else {
  console.log("NEMA POBEDNIKA");
}


// 17
// switch statement

const day = "thursday";

switch (day) {
  case "monday": // day === 'moday' ako je ovo tacno sledece se ispisuje
    console.log("learn javascript");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare my english");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("learn coding");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoh the weekend");
    break;
  default: // kao else block zapravo
    console.log("not a valid day");
}

// drugi nacin

if (day === "monday") {
  console.log("learn javascript");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare my english");
} else if (day === "wednesday" || "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("learn coding");
} else if (day === "saturday" || "sunday") {
  console.log("enjoh the weekend");
} else {
  console.log("not a valid day");
}


//16

3 + 5;
2004; //THIS IS EXPRESSION cuz does not produce a value
true && false && !false; //also expressions

if (23 > 10) {
  const str = "23 is bigger"; //samo string je expression a cela linija koda je statement
}
//statement

const me = "jonas";
console.log(`i'm ${2037 - 1991} yo ${me}.`);


// 17
//conditional (ternary) operator
// bukv kao if/else samo u jednoj liniji koda

const age = 23;
age >= 18
  ? console.log("i like to drink wine") //ako je true ispisuje se ovo
  : console.log("i like to drink water"); //ako je false onda ovo

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
// ako ima vise od 18 godina pice vino ako ne pice vodu

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
//ili moze ovako sve u jednoj liniji koda najprostije


Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/
//nacin 1
// const racun = 100;
// let tip = racun > 50 && racun < 300 ? racun * 0.15 : racun * 0.2;
// const ukupno = racun + tip;

//nacin 2
// if (racun > 50 && racun < 300) {
//   tip = racun * 0.15;
// } else if (racun < 50 || racun > 300) {
//   tip = racun * 0.2;
// }

// console.log(
//   `Vas racun je ${racun}, vas tip ako zelite da date iznosi ${tip} sto ukupno kosta ${ukupno}`
// );
// console.log(tip);

//nacin 3
// console.log(
//   `Vas racun iznosi ${racun}, vas tip ako zelite da date iznosi ${(tip =
//     racun > 50 && racun < 300
//       ? racun * 0.15
//       : racun * 0.2)} sto ukupno kosta ${ukupno}`
// );
