//15 - Crear un programa que devuelva los números primos hasta el número (n).

function primeNumbers(n) {
  for (let i = 2; i <= n; i++) {
    let numPrimo = true;
    for (let x = 2; x < i; x++)
      if (i % x === 0) {
        numPrimo = false;
        break;
      }
    if (numPrimo) {
      console.log(i);
    }
  }
}

primeNumbers(11);
