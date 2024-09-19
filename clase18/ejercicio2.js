
const prompt = require('prompt-sync')();
let oracion = "  hola javascript estas  ";
let posicion;
let oracionSinEspacios;
let oracionDividida;
let reemplazar;
let oracionSeparadaGuiones;

function procesarOracion(oracion) {
    oracionSinEspacios = oracion.trim();
    oracionDividida = oracion.split(" ");
    reemplazar = oracion.replace(/a/g, "@");
    posicion = oracion.indexOf('javascript');
    oracionSeparadaGuiones = oracionDividida.join("-");

    return {
        oracionSinEspacios,
        oracionDividida,
        reemplazar,
        posicion,        
        oracionSeparadaGuiones
    };
};

console.log(procesarOracion(oracion));
