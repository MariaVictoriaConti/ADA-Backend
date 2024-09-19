/*Ejercicio 7: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo)*/

const prompt = require("prompt-sync")({ sigint: true });
let arrayNombres = [];


for (let i = 0; i < 5; i++) {
    arrayNombres.push(prompt("Ingresa un nombre para almacenar en un array: "));
}

let searchNombre = prompt("Ingresa el nombre que quieres encontrar: ");
if(searchNombre === arrayNombres[0] || searchNombre === arrayNombres[1] || searchNombre === arrayNombres[2] || searchNombre === arrayNombres[3] || searchNombre === arrayNombres[4]){
    console.log("Tu nombre esta dentro de la lista del array!.")
}else{
    console.log("Tu nombre no esta dentro del array =(")
}


