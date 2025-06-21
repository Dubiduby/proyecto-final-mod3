//13 - Crear un algoritmo que sume todos los números de un array.

let array = [4, 78, 23, 1, 0, 34];

array = array.reduce((acc, n) => acc + n, 0);

console.log(array);
