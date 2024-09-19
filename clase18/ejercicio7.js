/* Ejercicio 7: “La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas
con una lista predefinida de nombres de flores:
1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue
"Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
"Girasol" al inicio de la lista.
5. Devuelva una cadena de flores en orden alfabético separadas por
puntos.*/

let flores = ["Orquidea", "Rosa", "Margarita", "Tulipan"];
let sinEspaciosBlancos;
let hayMargarita;
let azucenaPorMargarita;
let orquideaPorClavel;
let indiceGirasol;
let agregoGirasol;
let floresOrdenadas;

function gestionarFloreria(flores) {

        sinEspaciosBlancos = flores.map(flor => flor.replace(/\s+/g, '')).join("");

        hayMargarita = flores.some(flor => flor == "Margarita");
        azucenaPorMargarita = flores.map(flor => flor.replace("Margarita", "Azucena"));

        orquideaPorClavel = flores.map(flor => flor.replace("Orquidea", "Clavel"));

        indiceGirasol = flores.indexOf("Girasol");
        agregoGirasol = flores.unshift("Girasol");

        floresOrdenadas = flores.sort().join(".");

        return {
                sinEspaciosBlancos,
                hayMargarita,
                azucenaPorMargarita,
                orquideaPorClavel,
                indiceGirasol,
                flores,
                floresOrdenadas

        }
}

console.log(gestionarFloreria(flores));