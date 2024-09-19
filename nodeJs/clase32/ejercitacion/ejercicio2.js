const readlineSync = require('readline-sync');
const crypto = require('crypto');

const opciones = ["Ver mensaje de bienvenida", "Generar un hash de un texto", "Salir"];

const opcionSeleccionada = readlineSync.keyInSelect(opciones, "Que operacion deseas realizar?: ");

if (opcionSeleccionada === -1) {
    console.log("No has seleccionado ninguna opcion.");
} else if (opcionSeleccionada === 0) {
    console.log("Bienvenido a mi Api!");
} else if (opcionSeleccionada === 1) {
    const texto = readlineSync.question("Ingrese el texto que deseas encriptar: ");
    const hash = crypto.createHash('sha256');
    hash.update(texto);
    const hashOutput = hash.digest('hex');
    console.log("El hash de tu texto es: " + hashOutput);
} else if (opcionSeleccionada === 2) {
    console.log("Saliendo de la Api.");
}
