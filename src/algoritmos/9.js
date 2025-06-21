//9 - Escribir un algoritmo que determine si un año es bisiesto.

// Si el año es divisible por 4, es bisiesto...

// Pero si también es divisible por 100, entonces no lo es...

// A menos que sea divisible por 400, entonces sí lo es.

function isLeapYear(year) {
  if (year < 1 || !year || isNaN(year)) {
    console.log("Write a proper year");
  } else if (year % 400 === 0) {
    console.log("It's a leap year");
  } else if (year % 100 === 0) {
    console.log("It's not a leap year");
  } else if (year % 4 === 0) {
    console.log("It's a leap year");
  } else {
    console.log("It's not a leap year");
  }
}

isLeapYear("-4");
