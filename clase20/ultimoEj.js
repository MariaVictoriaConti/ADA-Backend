/*Integrador de todos los métodos:
Tenemos un array en una variable datos con números al azar, que
pueden ser tanto positivos como negativos
o Queremos eliminar todos los números negativos
o Con los números restantes, obtener el doble de cada uno
o Finalmente, obtener la suma de todos los números que obtuvimos*/

const datos = [2, -4, 6, 0, 5, -1];
let numPositivos;
let elDoble;
let suma;


function numeros(datos) {
    numPositivos = datos.filter(numero => numero >= 0);

    elDoble = numPositivos.map(numero => numero*2);

    suma = elDoble.reduce((accum, curr) => accum + curr);
     

    return {
        numPositivos,
        elDoble,
        suma
    }
}

console.log(numeros(datos));


const total = suma;