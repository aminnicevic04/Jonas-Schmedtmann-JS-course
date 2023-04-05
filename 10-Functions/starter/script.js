'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //   numPassenger = numPassenger || 1;
  //   price = price || 199

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123');
createBooking('LM123', 2, 800);
createBooking('LM123', 2);
createBooking('LM123', 5);

createBooking('LM123', undefined, 1000);


//lekcija 2
const flight = 'LM123';
const jonas = {
  name: 'amci',
  passport: 2132131231,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LM999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2132131231) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// is the same as doing
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);


//lekcija3
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string:${fn(str)}`);

  console.log(`transforemd by: ${fn.name}`);
};
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('hej');
};
document.body.addEventListener('click', high5);

['jonas', 'marta', 'adam'].forEach(high5);


// lekcija4
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('jonas');
greeterHey('steven');

greet('hello')('amci');

//napisali smo ovu funckiju odozgo na oavaj nacin
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greet('hello')('amciiiiiii');

//The call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// CALL Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// BIND Method
const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'steven wiliams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('amcii');
bookEW23('hasii');

//With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// partial aplication

const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(23));
console.log(addVAT(100));

//challenge napisati ovo gore u funkciji u funkciji

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));



// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('this will never run again');
};
runOnce();
//umsto ovoga radimo ovo a zapravo je isto
(function () {
  console.log('this will never run again');
  const isPrivate = 23;
  console.log(isPrivate);
})();
// ne moze jer je cope privat i ne mze se koristiti izvan IIFE
(() => console.log('this will never run again'))();
// isto kao gore samo u arrow funkciji
  

// CLOSURES
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); //1
booker(); //2
booker(); //3

// console.dir(booker);

//Closures 2.1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigned f function
g();
h();

// Example2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n}passengers`);
    console.log(`there a 3 group, each with ${perGroup} passengers`);
  }, wait + 1000);

  console.log(`will start boarding in ${wait} second`);
};

const perGroup = 1000;

Coding Challenge #2
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example
GOOD LUCK �


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
})();
// objasnjenje -->
// e ovako ovo je iife funkcija ili imidietly invoked function expression, nju ne moramo pozvati,
// jer sami njen nacin pisanja nju poziva i ona nema ime. Ona kada se sama pozove zapamti se u memoriji
// i nakon izvrsavanja te radnje ona se brise iz memorije i nikada se opet ne poziva...
// nju koristimo kada cemo jednom u nasem programu da odradimo neku radnju, i dobra je za to da se ne bi varijable pomasale
// zato sto je njen scope ima veci prioritet u odnosu na global scope
*/
