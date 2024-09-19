const prompt = require("prompt-sync")({ sigint: true});

let varInicial1 = "sola";
let varInicial2 = "acompañada";

console.log(varInicial1);
console.log(varInicial2);

[varInicial1, varInicial2] = [varInicial2, varInicial1];

console.log(varInicial1);
console.log(varInicial2);
