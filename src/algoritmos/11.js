//11 - Encontrar el segundo número más grande en un array.

const numbers = [60, 32, 80, 120, 3, 6, 1];

const sortedNumbers = numbers.sort((a, b) => b - a);

console.log(sortedNumbers[1]);
