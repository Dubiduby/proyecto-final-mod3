//Ordenar un array de números en orden ascendente (sin usar sort).

let numbers = [5, 7, 2, 4, 9, 0];

for (let i = 0; i < numbers.length; i++) {
  for (let x = i + 1; x < numbers.length; x++) {
    if (numbers[i] > numbers[x]) {
      [numbers[i], numbers[x]] = [numbers[x], numbers[i]];
    }
  }
}
console.log(numbers);
