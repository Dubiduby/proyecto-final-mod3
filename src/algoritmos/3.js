//3 - Escribir una función que encuentre el número mayor en un array.

function getHighestNumber(numbers) {
  numbers = numbers.sort((a, b) => b - a);
  console.log(numbers[0]);
}

getHighestNumber([1, 2, 50, -4, 100, 8]);
