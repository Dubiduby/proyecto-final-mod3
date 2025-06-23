//17 - Crear un algoritmo que valide si un string tiene paréntesis balanceados.

let array = [1, 5, ")", 56, "(", "fg", ")"];

let arrayBrackets = [];

let check = true;

for (let i = 0; i < array.length; i++) {
  if (array[i] === "(") {
    arrayBrackets.push("(");
  } else if (array[i] === ")" && arrayBrackets.length !== 0) {
    arrayBrackets.pop();
  } else if (array[i] === ")" && arrayBrackets.length === 0) {
    check = false;
    break;
  }
}

console.log(arrayBrackets.length === 0 && check);
