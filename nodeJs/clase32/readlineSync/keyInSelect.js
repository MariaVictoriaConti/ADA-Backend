//para este se necesita instalar por npm

const readlineSync = require('readline-sync');

const lenguajes = ["js", "python", "java", "c++", "c#"];

const indiceSeleccionado = readlineSync.keyInSelect(lenguajes, "Cual es tu lenguaje de programacion favorito?");

if( indiceSeleccionado === -1){
    console.log("No has seleccionado ningun lenguaje");

    
}else{
    console.log("Has seleccionado el lenguaje " + lenguajes[indiceSeleccionado]);
    
}