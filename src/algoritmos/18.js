//18 - Crear un programa que transforme una frase en "notación hacker" (leet speak)

function turnIntoLeetPeak() {
  let stringInput = prompt("Write a sentence").toUpperCase();

  stringInput = stringInput.split("");

  let newString = [];

  if (!/\p{L}/u.test(stringInput)) {
    alert("Write a valid sentence");
  } else {
    for (let i = 0; i < stringInput.length; i++) {
      switch (stringInput[i]) {
        case "Á":
        case "A":
          newString.push("4");
          break;
        case "B":
          newString.push("8");
          break;
        case "C":
          newString.push("(");
          break;
        case "E":
        case "É":
          newString.push("3");
          break;
        case "G":
          newString.push("6");
          break;
        case "H":
          newString.push("#");
          break;
        case "I":
        case "Í":
          newString.push("1");
          break;
        case "L":
          newString.push("£");
          break;
        case "O":
        case "Ó":
          newString.push("0");
          break;
        case "S":
          newString.push("5");
          break;
        case "T":
          newString.push("7");
          break;
        case "Z":
          newString.push("2");
          break;
        default:
          newString.push(stringInput[i]);
          break;
      }
    }
    newString = newString.join("");
    alert(`Your sentence in leet speak is ${newString}`);
  }
}

turnIntoLeetPeak();
