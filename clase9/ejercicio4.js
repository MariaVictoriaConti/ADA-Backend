const prompt = require("prompt-sync")({ sigint: true });

let numeroX = parseInt(prompt("Ingrese un numero: "));
let contadorNumImpares = 0;

for(i = 0; i <= numeroX; i++){
    if(i % 2 !== 0){
        contadorNumImpares++;
    }
};
console.log(`La cantidad de numeros impares que se
encontraron, dentro del rango 0 al ${numeroX} es ${contadorNumImpares}`);

