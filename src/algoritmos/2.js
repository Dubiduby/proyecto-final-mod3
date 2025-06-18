//2 - Crear un algoritmo que invierta un string.

function reverseString() {
  let word = prompt("Write a word");

  if (!Number(word) && word.length >= 2 && /^[a-zA-Z]+$/.test(word)) {
    word = word.split("");
    word = word.reverse();
    word = word.join("");

    alert(`Your reversed word is: ${word}`);
  } else {
    alert("Make an effort. Write a real word.");
  }
}

reverseString();
