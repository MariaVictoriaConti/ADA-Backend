//• Ejercicio 3: Clasificación de edades
//Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.

const prompt = require("prompt-sync")({ sigint: true});

let edad = parseInt(prompt("Ingrese su edad: "));

let clasificacion = (edad) => {
    if(edad <= 13){
        return "De acuerdo a tu edad sos un niño.";
    }else if (edad >13 && edad < 18 ) {
        return "De acuerdo a tu edad sos un adolecente."
    } else if (edad >=18 && edad < 60){
        return "De acuerdo a tu edad sos un adulto."
    }else{
        return "De acuerdo a tu edad sos un adulto mayor."
    }
}

let resultado = clasificacion(edad);

console.log(resultado);