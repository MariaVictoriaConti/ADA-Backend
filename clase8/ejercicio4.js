const prompt = require("prompt-sync")({ sigint: true});

const miNombre = "Victoria";
const miNombreMinuscula = "victoria";
let nombreUsuario = prompt("Ingrese su nombre: ");

if(miNombre === nombreUsuario || nombreUsuario === miNombreMinuscula){
    console.log("Somos tocayas!!");
}else{
    console.log("Tu nombre no es igual al mio.")
};
