const prompt = require("prompt-sync")({ sigint: true});

let numeroDia = parseInt(prompt("Ingrese un numero del 1 al 7: "));

if(numeroDia === 1){
    console.log("Lunes")
}else if(numeroDia === 2){
    console.log("Martes")
}else if(numeroDia === 3){
    console.log("Miercoles")
}else if(numeroDia === 4){
    console.log("Jueves")
}else if(numeroDia === 5){
    console.log("Viernes")
}else if(numeroDia === 6){
    console.log("Sabado")
}else if(numeroDia === 7){
    console.log("Domingo")
}else{
    console.log("Numero invalido, no hay dia de semana asignado a el.")
};



//falta

