const crypto = require('crypto');
const readlineSync = require('readline-sync');

const texto = readlineSync.question("Ingrese el texto que desea encriptar: ");

const hash = crypto.createHash('sha256');
hash.update(texto);
const hashOutput = hash.digest('hex');
console.log("El hash de tu texto es: " + hashOutput);

