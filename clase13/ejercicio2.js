/*Ejercicio 2: Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación.*/

const prompt = require("prompt-sync")({ sigint: true});

let nombreMascota = prompt("Ingrese el nombre de su mascota: ");
let vacunada = prompt("Esta vacunada? (si/no): ");

let verificarVacunacion = (nombreMascota, vacunada) =>
    vacunada === "si" ? nombreMascota + " esta vacunada.":"A tu mascota le falta completar el calendario de vacunacion.";


let mascotaVacunada = verificarVacunacion(nombreMascota, vacunada);

console.log(mascotaVacunada);