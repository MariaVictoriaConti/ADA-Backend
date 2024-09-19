/*4) Dado un numero entero positivo, mostrar su factorial. Pista: El
factorial de un número se obtiene multiplicando todos los
números enteros positivos que hay entre el 1 y ese número*/


//FALTA!!
const prompt = require("prompt-sync")({ sigint: true});

let numeroPositivo = parseInt(prompt("Ingrese un numero positivo: "));
let factorial = 1;

for (let i = 1; i <= numeroPositivo; i++) {
    factorial *= i;
}

console.log(factorial);