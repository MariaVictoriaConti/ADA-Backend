const path = require('path');

//VAlida su una ruta es absoluta o no - devuelve true o false

const filePath = "/home/users/docs/file.txt";
const isAbsolute1 = path.isAbsolute(filePath);
console.log("Ruta absoluta: " + isAbsolute1);


