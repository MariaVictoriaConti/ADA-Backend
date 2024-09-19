const prompt = require("prompt-sync")({ sigint: true});

let primerNumero = 5;
let segundoNumero = 20;

if(primerNumero > 10 && segundoNumero > 10){
    console.log("Ambas variables son mayores a 10.")
}else{
    console.log("Ambas o alguna de las variables es menor a 10.")
};
