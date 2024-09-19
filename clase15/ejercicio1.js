/*Ejercicio 1: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000.*/
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];
let numIguales = [];
for (let i = 0; i < matriz.length; i++) {
    let fila = matriz[i];
// console.log(matriz[i]);
    for (let x = 0; x < fila.length; x++) {
if(fila[x]===fila[x+1])
    console.log(fila[x])
}
    }



