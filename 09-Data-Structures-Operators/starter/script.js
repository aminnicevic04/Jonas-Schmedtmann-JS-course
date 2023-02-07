'use strict';
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

//
// const [p, q, r] = [8, 6];
// console.log(p, q, r); // vraca 8 6 undefined

const [p = 1, q = 1, r = 1] = [8, 6];
console.log(p, q, r); // vraca 8 1 1
*/

// 2 DESTRUCTURING OBJECTS pocetak

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
};

const { name, openingHours, categories } = restaurant;
