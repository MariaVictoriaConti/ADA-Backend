/* Ejercicio 6: Bucle For – Array
Escribe un programa en JavaScript que clasifique diferentes animales
en tres categorías: "mamífero", "ave" o "reptil". Se te proporciona un
array llamado animales que contiene nombres de diferentes animales.
Utiliza un bucle for y operadores ternarios para crear un nuevo array
llamado clasificacion que contenga la clasificación de cada animal
según su tipo.*/

let animales = ["perro", "gato", "loro", "serpiente", "elefante", "aguila"];
let mamiferos = [];
let reptiles = [];
let aves = [];


for (let i = 0; i < animales.length; i++) {
    animales[i]==="perro" || animales[i]==="gato" || animales[i]==="elefante" ? mamiferos.push(animales[i]):
animales[i]==="loro" || animales[i]==="aguila" ? aves.push(animales[i]):
animales[i]==="serpiente" ? reptiles.push(animales[i]):
    "Ese animal no esta dentro del array";    
}
console.log(mamiferos);
console.log(reptiles);
console.log(aves);

