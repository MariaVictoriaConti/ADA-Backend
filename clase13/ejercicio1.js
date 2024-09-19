/*Ejercicio 1: Conversor de monedas
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
una función flecha para convertir el monto a pesos.*/

const prompt = require("prompt-sync")({ sigint: true});

let dolares = parseFloat(prompt("Ingrese el monto en dolares que desea convertir: "));
let tasa = 1500;

let convertidorDolarApeso = (dolares, tasa) => {
    let resultado = dolares * tasa;
    return resultado;
}
console.log("Sus " + dolares + " dolares equivalen a " + convertidorDolarApeso(dolares, tasa) + " pesos." );
