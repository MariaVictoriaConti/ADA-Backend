//• Ejercicio 2: Calcular promedio de calificaciones
//Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.

const prompt = require("prompt-sync")({ sigint: true});

let notas = [];

for (let i = 0; i < 5; i++) {
    notas[i] = parseFloat(prompt("Ingresa una nota: "));
}
console.log(notas);

let calculoPromedio = (notas) => {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
return suma / notas.length;
}

let promedio = calculoPromedio(notas);

console.log("El promedio de las notas ingresadas es: " + promedio)
