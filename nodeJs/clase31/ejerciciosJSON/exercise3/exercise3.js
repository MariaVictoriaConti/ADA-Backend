const { log } = require('console');
const fs = require('fs');

const leerDatosDelJSON = fs.readFileSync("libro.json", "utf-8");

const libro = JSON.parse(leerDatosDelJSON);

console.log("El nombre del libro es: " + libro.name);
console.log("El autor del libro es: " + libro.author);
console.log("El año de publicacion del libro es: " + libro.year);
console.log("El precio del libro es: " + libro.price);



