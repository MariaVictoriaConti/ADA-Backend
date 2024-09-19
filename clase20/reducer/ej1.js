/*1) Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la suma de todos los números que
están en el array.
Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
*/
const numbers = [6, 1, 34, 94, 3, 17];

const suma = numbers.reduce((acc, curr) => acc+curr);

console.log(suma);