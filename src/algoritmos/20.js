// 20 - Un reloj muestra:
// -> la hora (0 <= h <= 23)
// -> los minutos (0 <= m <= 59)
// -> y los segundos (0 <= s <= 59).
// Escribe una funcion que calcule los millisegundos que han pasado
// desde media noche 00:00:00 hasta la hora actual teniendo en
// cuenta que:
// – Hay 1000 millisegundos en un segundo
// – Podemos obtener la hora, minutos y segundos con la función
// "getTime"

function clock() {
  const now = Date.now();

  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);

  const difference = now - midnight.getTime();

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  console.log(`${hours}h ${minutes}m ${seconds}s`);
}

clock();
