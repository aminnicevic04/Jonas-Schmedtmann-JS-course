// 'use strict';
// 1 destructuring arrays
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // pravimo da koristnik unosenjem bira sta ce iz dela starter menu i main menu
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// da ne bi pisali ovo
//mozemo sledece =>>
const [x, y, z] = arr;
console.log(x, y, z); //vraca samo elemente 2 3 4
console.log(arr); // vraca niz (3) [2,3,4]

// const [first, second] = restaurant.categories;
// console.log(first, second); // vraca italian pizzeria prva dve el

const [first, , second] = restaurant.categories;
console.log(first, second); // vraca italian vegetarian vraca prvi i treci el preskace drugi zbg zareza

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
//menjamo main i secondary tj. italian i vegetarian

[main, secondary] = [secondary, main];
// we reasigning a values
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]]; // arr i  arr
// const [i, , j] = nested;
// console.log(i, j); // vraca 5,6 samo ovaj drugi arr koji je unutar njega
const [i, , [j, k]] = nested;
console.log(i, j, k); //vraca 2,5,6

// const [p, q, r] = [8, 6];
// console.log(p, q, r); // vraca 8 6 undefined

const [p = 1, q = 1, r = 1] = [8, 6];
console.log(p, q, r); // vraca 8 1 1


// 2 DESTRUCTURING OBJECTS
// razlazemo ih pomocu {}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hours
      close: 24,
    },
  }, //objest in objest btw

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order reicever ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}.`
    ); // znaci mi smo ga dole razlagali da bi ovde mogli da ga iskoristimo
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// ovako to radimo kada imamo let kao sto je u primeru let a = 111;
// ne mozemo staviti const, a ni let, vec stavljamo samo zagrade.
console.log(a, b);

//nested objects

const {
  sat: { open, close },
} = openingHours;
console.log(open, close); // vraca 0 24 kao numbers
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c); // opet isto vraca kao i gore 0 24


// THE SPREAD OPERATOR (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // ne treba ovk

const newArr = [1, 2, ...arr];
console.log(newArr); // [1,2,7,8,9]

console.log(...newArr); // 1 2 7 8 9
console.log(1, 2, 7, 8, 9); // isto

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hours
      close: 24,
    },
  }, //objest in objest btw

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order reicever ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is ur delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu); // dodali smo starom meniju novo jelo

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 or more arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : array, strings, maps, sets. NOT OBJECTS
const str = 'amci';
const letters = [...str, ' ', 'N.'];
console.log(letters); // ['a', 'm', 'c', 'i', ' ', 'N.']
console.log(str); // amci
console.log(...str); // a m c i
// console.log(`${...str} nicevic`) // ne moze ne radi

// real world example
const ingridients = [
  prompt("let's make pasta! ingridient 1?"),
  prompt("let's make pasta! ingridient 2?"),
  prompt("let's make pasta! ingridient 3?"),
];
// console.log(ingridients); // prikazuje se ono sto ubacimo u prompt

restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
restaurant.orderPasta(...ingridients);

// Objects

const newRestaurant = { foundingIN: 2004, ...restaurant, founder: 'amci' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'ristorante roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// Rest patterns and parameters
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hours
      close: 24,
    },
  }, //objest in objest btw

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order reicever ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is ur delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngridient, ...otherIngridietns) {
    console.log(mainIngridient);
    console.log(otherIngridietns);
  },
};

// 1) destructuring

// spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 (3) [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // spread operator mora da bude zadnji element u ovom slucaju
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) functions

// const add = function (...numbers) {
//   console.log(numbers);
// };
// add(2, 3); //(2) [2, 3]
// add(5, 4, 6, 7, 8); // (5) [5, 4, 6, 7, 8]
// add(5, 4, 6, 7, 8, 9, 8, 6); //(8) [5, 4, 6, 7, 8, 9, 8, 6]

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3); // 5
add(5, 4, 6, 7, 8); // 30
add(5, 4, 6, 7, 8, 9, 8, 6); // 53

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('kecap', 'majonez', 'pecurke');
restaurant.orderPizza('pecurke');


// SHORT CIRCUITING (|| AND &&)

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hours
      close: 24,
    },
  }, //objest in objest btw

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order reicever ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is ur delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngridient, ...otherIngridietns) {
    console.log(mainIngridient);
    console.log(otherIngridietns);
  },
};
console.log('--- OR ----');

// use any data type, return any data type, short-circuiting
console.log(3 || 'jonas'); // 3
console.log('' || 'jonas'); // jonas
console.log(true || 'jonas'); // true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello
// zbg toga sto je prva truthy value u nasem lancu

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// zato sto nemamo deklarisano numGuests

console.log('--- AND ----');
console.log(0 && 'jonas'); // 0 is fallsy value
console.log(7 && 'jonas'); // 7 is truthy values

console.log('hello' && 23 && null && 'jonas'); // null
// null je prva fallsy value u nasem lancu

if (restaurant.orderPizza) {
  restaurant.orderPizza('kecap', 'majonez');
}

restaurant.orderPizza && restaurant.orderPizza('kecap', 'majonez');
// moze i ovako isti se return dobija

// The Nullish Coalescing Operator ??

// restaurant.numGuests = 0;
const guests = restaurant.numGuests1 || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0

// Logical Assignment Operators ||= &&=

const rest1 = {
  name: 'capri',
  numGuests: 0,
};
const rest2 = {
  name: 'kapri',
  owner: 'amci',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// // isto ko i gore

// console.log(rest1); //{name: 'capri', numGuests: 10} // zato sto je 0 falsy value
// console.log(rest2); //{name: 'kapri', owner: 'amci', numGuests: 10}

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>'; // isto ko i gore

console.log(rest1); //{name: 'capri', numGuests: 0, owner: undefined}
console.log(rest2); //{name: 'kapri', owner: '<ANONYMOUS>', numGuests: 10}
*/
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'thiago', 'perisic', 'coutinho'];
console.log(players1Final);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`Na utakmici je postignuto ${players.length} golova`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored); //da ne bi dobijali array(4) koristimo spread operator
//7
team1 < team2 && console.log(`team1 ima vece sanse da pobedi`);
team1 > team2 && console.log(`team2 ima vece sanse da pobedi`);
// koristimo vaoj operator zato sto on nastavlja operaciju
// kada je prva vrednost true

//FOR OF loop
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enchanced object literals
  openingHours,

  //objest in objest btw

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order reicever ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is ur delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngridient, ...otherIngridietns) {
    console.log(mainIngridient);
    console.log(otherIngridietns);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}
// entries predstavlja metodu koja prebacuje u arr i dodaje index

// console.log([...menu.entries()]);
// sada nam je vratio array arraya u kojem se nalaze menu stavke sa njihovim indexom

// e sad kada bi zeleli da  napravimo listu itema u restoranu naravno necemo od nula da
// tkd sada pisemo sledeci kod

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log(`---------------------------------------`);
//postoji i bolji nacin
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// enchanced object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, //open 24hours
    close: 24,
  },
};
