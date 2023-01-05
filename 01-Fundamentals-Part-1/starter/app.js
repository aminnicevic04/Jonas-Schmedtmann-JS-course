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

*/

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
