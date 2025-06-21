//8 - Crear una función que cuente cuántas veces aparece un carácter en un string.

function countCaracter(string, i) {
  if (string && i) {
    let count = string.split("");

    count = count.reduce((acc, n) => (n === i ? acc + 1 : acc), 0);

    console.log(count);
  } else {
    console.log("Values should not be empty");
  }
}

countCaracter("hola caracola", "o");
