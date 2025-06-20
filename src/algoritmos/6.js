//6 - Crear un programa que calcule el número Fibonacci en la posición (n).

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let number = Number(prompt("Write a Fibonacci position:"));

function getFibonacciPosition(num) {
  if (num > 1) {
    return getFibonacciPosition(num - 1) + getFibonacciPosition(num - 2);
  } else if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return "Write a valid number";
  }
}

alert(getFibonacciPosition(number));
