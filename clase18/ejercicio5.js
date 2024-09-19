/*Ejercicio 5: Manipulación de Arrays y Cadenas
A partir del siguiente array de frases, escribe la función “procesarFrases”
que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método
“.toLowerCase()” para este punto.
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String/toLower
Case
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena
separada por espacios.
5. Devuelva un nuevo array con las frases modificadas.*/
let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aqui es MALO"
];

let minuscula;
let dividir;
let reemplazar;
let combinar;
let modificarFrases;

function procesarFrases(frases) {
    //Pasar las frases a minuscula:
    minuscula = frases.map(frase => frase.toLowerCase());
    console.log(frases);

    //Dividir las frases en palabras:
    dividir = frases.map(frase => frase.split(" "));

    //reemplazar malo x bueno
    reemplazar = frases.map(palabra => palabra.replace("MALO", "BUENO"));

    //combinar palabras en una nueva cadena
    combinar = frases.map(espacio => espacio.replace(/\s+/g, '')).join(" ");

//Modifico frase
modificarFrases = frases.map(frase => frase.replace("es", "estuvo"));

    return {
        minuscula,
        dividir,
        reemplazar,
        combinar,
        modificarFrases
    }
}
console.log(procesarFrases(frases));