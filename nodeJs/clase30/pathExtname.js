const { log } = require('console');
const path = require('path');

//Obtener la extension de un archivo de una ruta absoluta
const filePath = "/home/users/docs/file.txt";
const extName1 = path.extname(filePath);
console.log("Extension de file.txt: " + extName1);

//Manejo de archivos sin la extensión
const filePath2 = "/home/users/docs/README";
const extName2 = path.extname(filePath2);
console.log("Extension de file: " + extName2);

//Rutas con multiples puntos en el nombre del archivo
const filePath3 = "/home/users/docs/file.txt.js";
const extName3 = path.extname(filePath3);
console.log("Extension de file.txt.js: " + extName3);
