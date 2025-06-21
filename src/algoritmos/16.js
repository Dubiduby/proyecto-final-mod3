//16 - Escribir una función que convierta un número romano a número arábigo.

function romToArab() {
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = prompt("Write a roman number").toUpperCase();
  let result = 0;

  if (!/^[IVXLCDM]+$/.test(num)) {
    return "Error. Write a valid roman number";
  }

  num = num.split("");

  for (let i = 0; i < num.length; i++) {
    let currentNum = values[num[i]];
    let nextNum = values[num[i + 1]];

    if (currentNum < nextNum) {
      result -= currentNum;
    } else {
      result += currentNum;
    }
  }
  return result;
}

console.log(romToArab());
