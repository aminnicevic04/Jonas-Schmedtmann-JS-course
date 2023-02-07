'use strict';

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
