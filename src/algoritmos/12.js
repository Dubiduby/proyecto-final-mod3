//12 - Escribir una función que elimine los elementos duplicados de un array.

let numbers = [4, 6, 3, 1, 3, 8, 9];

function deleteRepeatedElements(array) {
  let newArray = [];
  array.forEach((e) => {
    if (!newArray.includes(e)) {
      newArray.push(e);
    } else {
      newArray;
    }
  });
  console.log(newArray);
}

deleteRepeatedElements(numbers);
