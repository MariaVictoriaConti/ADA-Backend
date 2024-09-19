/*Ejercicio 10: While y Do While
Implementa un programa que permita al usuario registrar la edad de
mascotas en una veterinaria hasta que decida dejar de agregar.
Cuando el usuario no agregue mas edades, imprimir en consola las
mascotas agregadas anteriormente y sus respectivas edades.*/
const prompt = require("prompt-sync")({ sigint: true });

 let mascota = [];
 let edad = [];
let i = 0;
let continuar;
do {
mascota.push(prompt("Ingrese el nombre de su mascota: "));
edad.push(prompt("Ingrese la edad de su mascota: "));    
console.log(mascota);
console.log(edad);
continuar = prompt("Desea agregar otra mascota?: (si/no)");
i++
} while (continuar === "si");