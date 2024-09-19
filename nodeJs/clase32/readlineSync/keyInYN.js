const readlineSync = require('readline-sync');

//readlineSync.keyInYN():

const deseaContinuar = readlineSync.keyInYN("Desea continuar la operarcion?:");

if (deseaContinuar){
console.log("Continuando la operacion...");
}else{
console.log("Cancelando la operacion...");
}
