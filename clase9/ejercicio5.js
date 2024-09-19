const prompt = require("prompt-sync")({ sigint: true });

let notas = [];

let cantidadNotas = parseFloat(prompt("Ingrese la cantidad de notas que va a ingresar: "));
console.log("La cantidad de notas que va a ingresar es: " + cantidadNotas + ".");

for (let i = 0; i < cantidadNotas; i++) {
    notas[i] = prompt("\nIngrese una nota: ");
}

console.log(`El array notas esta compuesto por las siguientes notas: ${notas}.`);


// \n



