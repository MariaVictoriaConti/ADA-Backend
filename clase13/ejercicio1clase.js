/*Calculando la edad
Escribí un programa que le pida al usuario su año de nacimiento e imprima
su edad actual en la consola con la frase "Tienes X años" (siendo X la
cantidad de años). Por ejemplo, asumiendo que el año actual es 2024 y el
usuario ingresa 1998, el programa debe imprimir en la consola: “Tienes 26
años”.*/

const prompt = require("prompt-sync")({ sigint: true});

let anioNaciomiento = parseInt(prompt("Ingrese su año de nacimiento: "));

function calcularAnios(anioNaciomiento) {
    let anios = 2024 - anioNaciomiento;
    return anios;
}

let resultado = calcularAnios(anioNaciomiento);
console.log("Tenes " + resultado + " años de edad.");