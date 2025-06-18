//Escribir una función que determine si un número es par o impar.

function getNumberType() {
  let number = Number(prompt("Write a number"));
  if (number % 2 === 0 && Number.isInteger(number)) {
    alert("Your number is par");
  } else if (number % 2 !== 0 && Number.isInteger(number)) {
    alert("Your number is impar");
  } else {
    alert("Error. Enter a valid number");
  }

  console.log(!Number.isInteger(number));
}

getNumberType();
