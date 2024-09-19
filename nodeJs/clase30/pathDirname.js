const path = require('path');


//Obtener el directorio contenedor de un archivo desde una ruta absoluta

const filePath = "/home/users/docs/file.txt";
const dirName1 = path.dirname(filePath);
console.log("Directorio contenedor de file.txt:" + dirName1);

//Obtener el directorio de un archivo usando una ruta relativa
const relativePath = "srs/utils/helpers.js";
const dirName2 = path.dirname(relativePath);
console.log("Directorio contenedor de helpers.js: " + dirName2);

//Uso con rutas de windows
const windowsPath = "C:\\Users\\mavic\\Desktop\\BackendAdaITW\\nodeJs\\clase30\\file.txt";
const windowsDirName = path.dirname(windowsPath);
console.log("Directorio contenedor de file.txt: " + windowsDirName);



