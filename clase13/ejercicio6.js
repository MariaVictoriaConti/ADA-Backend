/*• Ejercicio 6: Numero N
Hacer un programa que calcule la suma de los N primeros números
naturales, dónde N es el número límite ingresado por teclado.*/

const prompt = require("prompt-sync")({ sigint: true });

let ingreseNum = parseInt(prompt("Ingrese un numero natural: "));
let resultado = 0;

for (let i = 1; i <= ingreseNum; i++) {
    resultado += i; 
}
console.log("la suma de los numeros naturales que hay hasta el numero ingresado es: " + resultado);
