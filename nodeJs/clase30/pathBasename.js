const path = require('path');

//El basename se usa para archivos

//Obtener el nombre del archivo desde una ruta absoluta

const fullPath = "home/user/docs/file.txt";
const baseName1 = path.basename(fullPath);

console.log(baseName1);

//Obtener el nombre del achivo sin la extensión
const baseName2 = path.basename(fullPath, ".txt");
console.log("Nombre del archivo sin la extensión: " + baseName2);

//Uso con rutas relativas
const relativePath = "srs/utils/helpers.js";
const baseName3 = path.basename(relativePath);
console.log("Nombre del archivo desde una ruta relativa: " + baseName3);

//Obtener el nombre de un directorio
const dirPath = "var/www/html/";
const baseName4 = path.basename(dirPath);
console.log("Nombre del directorio: " + baseName4);

//Rutas con separadores de Windows
const windowsPath = "C:\\Users\\mavic\\Desktop\\BackendAdaITW\\nodeJs\\clase30";
const baseName5 = path.basename(windowsPath);
console.log("Nombre del directorio en Windows: " + baseName5);
