//2 - Crear un algoritmo que invierta un string.

function reverseString() {
  let word = prompt("Write a word");
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/; //tuve que buscarlo porque eran muchos acentos, lo puse en una variable por si luego lo quería cambiar más fácil. Quería que fuese solo una palabra.

  if (!Number(word) && word.length >= 2 && regex.test(word)) {
    word = word.split("");
    word = word.reverse();
    word = word.join("");

    alert(`Your reversed word is: ${word}`);
  } else {
    alert("Make an effort. Write a real word.");
  }
}

reverseString();
