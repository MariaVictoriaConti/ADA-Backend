const prompt = require("prompt-sync")({ sigint: true});

let verdadero = true;
let texto = "Me gusta el asado. "
let numero = 10;
let nada = null;
//Operacion matematica con variable numero
console.log(numero + 10);
//Concatenacion con variable texto
console.log(texto + "Hoy compro carne para hacer uno.");

//Verificacion de variable verdadero
if(verdadero == true){
    console.log("La variable es verdadera.")
}else{
    console.log("La variable es falsa.")
};

//Verificacion variable null
if(nada === null){
    console.log("Esta variable no tiene valor asignado.")
}else{
    console.log("La variable tiene un valor asignado");
};

