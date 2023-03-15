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
*/

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
