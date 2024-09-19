const crypto = require('crypto');

const data = "Este es un msj secreto";
const hash = crypto.createHash('sha256');

hash.update(data);
const hashOutput = hash.digest('hex');
console.log("Hash SHA-256 ", hashOutput);
