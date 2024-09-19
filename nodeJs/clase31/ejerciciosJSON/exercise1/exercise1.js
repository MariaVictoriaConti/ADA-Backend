const fs = require('fs');

const leerDatosDelJSON = fs.readFileSync("datos.JSON", "utf-8");
console.log(leerDatosDelJSON);

const datosComoCadena = JSON.parse(leerDatosDelJSON)
console.log("Los datos del json pasados a cadena son: ", datosComoCadena.nombre);



