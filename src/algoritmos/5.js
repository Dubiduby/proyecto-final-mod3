//5 - Determinar si una palabra es un palíndromo.

const word = "reconocer";
let reverseWord = "";

reverseWord = word.split("");
reverseWord = reverseWord.reverse();
reverseWord = reverseWord.join("");

console.log(word === reverseWord);

//versión función

// function isPalindromo() {
//   let word = prompt("Write a word").toLowerCase();
//   const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;

//   if (word && word.length >= 2 && regex.test(word)) {
//     let reverseWord = word.split("").reverse().join("");

//     if (word === reverseWord) {
//       alert(`Your word is a Palindromo`);
//     } else {
//       alert(`Your word is not a Palindromo`);
//     }
//   } else {
//     alert("Make an effort. Write a real word.");
//   }
// }

// isPalindromo();
