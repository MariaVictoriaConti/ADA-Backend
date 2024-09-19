/*2) Tenemos un array en una variable numeros con números al azar. Usar la
función map para crear un nuevo array multiplicando cada valor del array
por 2, y guardarlo en la variable dobles. Mostrar por consola el array
original y el nuevo*/
const numeros = [3, 7, 13, 99];

const dobles = numeros.map(numero => numero*2);

console.log(numeros);
console.log(dobles);