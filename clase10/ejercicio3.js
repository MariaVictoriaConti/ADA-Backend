const prompt = require("prompt-sync")({ sigint: true });


let numero = parseInt(prompt("Ingrese un numero: "));
let suma = 0;

while (numero >= 0) {
    suma+=numero;
    
numero = parseInt(prompt("Ingrese un numero: "));
};

console.log("El resultado de la suma de los numeros ingresados es: " + suma);
