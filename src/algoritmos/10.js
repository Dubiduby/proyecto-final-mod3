//10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

function calTemp() {
  let scale = prompt(
    "Write c to calculate Celsius and f to calculate Fahrenheit"
  ).toLowerCase();
  let tempInput = prompt("Write the temperature");
  let temp = Number(tempInput);

  if (isNaN(temp) || tempInput.trim() === "") {
    alert("Write a proper temperature");
    return;
  }

  switch (scale) {
    case "c":
      let celsius = ((5 / 9) * (temp - 32)).toFixed(1);
      alert(`${temp}ºF are ${celsius}ºC`);
      break;

    case "f":
      let fahrenheit = ((temp * 9) / 5 + 32).toFixed(1);
      alert(`${temp}ºC are ${fahrenheit}ºF`);
      break;

    default:
      alert("Write a proper scale");
  }
}

calTemp();

//sin switch pero me parecía poco legible

// function calTemp() {

//   let scale = prompt(
//     "Write c to calculate Celsius and f to calculate Fahrenheit"
//   ).toLowerCase();
//   let temp = prompt("Write the temperature");

//   if (scale === "c" && !isNaN(temp) && temp.trim() !== "") {
//     let celsius = ((5 / 9) * (temp - 32)).toFixed(1);
//     alert(`${temp}ºF are ${celsius}ºC`);
//   } else if (scale === "f" && !isNaN(temp) && temp.trim() !== "") {
//     let fahrenheit = ((temp * 9) / 5 + 32).toFixed(1);
//     alert(`${temp}ºC are ${fahrenheit}ºF`);
//   } else {
//     alert("Write a proper scale or temperature");
//   }
// }

// calTemp();
