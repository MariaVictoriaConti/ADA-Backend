/*Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
“Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las
siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados
por puntos. Investigar el método “.sort()”*/

const prompt = require('prompt-sync')();

let nombres = prompt("Ingresa los siguientes nombres separandolos con comas. Julian, Maria, Malena, Andrea, Pablo y Pedro: ");
let sinEspaciosBlancos;
let estaJuan;
let indicePedro;
let mariaPorAna;
let nombresOrdenados;


function transformarYAnalizarNombres (nombres){
//Quitar los espacios en blanco alrededor de cada nombre
sinEspaciosBlancos = nombres.replace(/\s+/g, '');
nombres = sinEspaciosBlancos;
//Verifique si existe el nombre "Juan".
estaJuan = nombres.includes("Juan");

//Reemplace todos los nombres "María" por "Ana"
mariaPorAna = nombres.replace(/Maria/g, "Ana");

//Encuentre el índice del nombre "Pedro".
indicePedro = nombres.indexOf("Pedro");
// Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método “.sort()
//Aplico split(,) para separar el string y convertir cada elemento en array, aplico sort para ordenar ABC y join(".") para volver el resultado en cadena separada x puntos.
nombresOrdenados = nombres.split(",").sort().join(".");

return{
    nombres,
    sinEspaciosBlancos,
    estaJuan,
    mariaPorAna,
    indicePedro,
    nombresOrdenados,
}
}

console.log(transformarYAnalizarNombres(nombres));
