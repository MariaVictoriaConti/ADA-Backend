const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encriptado = cipher.update(algorithm, 'utf8', 'hex');
encriptado += cipher.final('hex');

console.log("Texto cifrado: ", encriptado);
const decifrado = crypto.createCipheriv(algorithm, key, iv);

let desencriptado = decifrado.update(encriptado, 'hex', 'utf8');
desencriptado += decifrado.final('utf8');

console.log("Texto desencriptado: ", desencriptado);