const readlineSync = require('readline-sync');


//ReadlineSync.questionInt():
const edad = readlineSync.questionInt("Ingrese su edad: ");

if(edad>=18){
    console.log("Eres mayor de edad, puedes acceder a este sitio.");
}else{
    console.log("No eres mayor de edad, no puedes acceder a este sitio.");
}
