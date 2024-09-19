/* Ejercicio 6: Autos y más autos…
Escribe una función "gestionarAutos" que realice las siguientes tareas con
una lista predefinida de marcas de autos:
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por
puntos. Utilizar “.sort()”*/

let lista = ["Ford", "Tesla", "Chevrolet", "Fiat", "BMW"];
let sinEspaciosBlancos;
let verificarTesla;
let reemplazarMarca;
let cadenaOrdenada;

function gestionarAutos(lista) {
sinEspaciosBlancos = lista.map(espacios => espacios.replace(/\s+/g, '')).join();

verificarTesla = lista.some(auto => auto == "Tesla");

reemplazarMarca = lista.map(auto => auto.replace("Ford", "BMW"));

indiceChevrolet = lista.indexOf("Chevrolet");

cadenaOrdenada = lista.sort().join(".");

return{
    sinEspaciosBlancos,
    verificarTesla,
    reemplazarMarca,
    indiceChevrolet,
    cadenaOrdenada
};

}

console.log(gestionarAutos(lista));