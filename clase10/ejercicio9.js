/*Ejercicio 9:
En este ejercicio tienes un array ‘colores’ que contiene nombres de
diferentes colores. Tu tarea es realizar las siguientes operaciones:
✓ Imprimir todos los colores del array.
✓ Modificar el primer color del array a "blanco".
✓ Agregar dos nuevos colores al final del array: "negro" y "gris".*/

let colores = ["rojo", "verde","azul","amarillo"];

console.log(colores);
let agregoBlanco = colores.unshift("Blanco");
console.log(colores);
let agregoNegroYgris = colores.push("Negro","Gris");
console.log(colores);