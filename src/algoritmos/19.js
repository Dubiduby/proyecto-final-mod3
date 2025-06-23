//19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece

function checkCentury(year) {
  if (year > 0) {
    year = Math.ceil(year / 100);
    return year;
  } else {
    console.error("Write a valid year");
  }
}

console.log(checkCentury(2025));
