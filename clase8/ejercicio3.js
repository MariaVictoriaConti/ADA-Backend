const prompt = require("prompt-sync")({ sigint: true});

let condicion1 = prompt("¿Sos vegetariano? (Responde true o false): ");
let condicion2 = prompt("¿Te gusta el zapallo? (Responde true o false): ");

if(condicion1 && condicion2 == true){
    console.log("Te recomiendo comprar el zapallo que esta de oferta en esta estacion!")
}else{
    console.log("...")
}

//Quise hacer algo pero nada jaja