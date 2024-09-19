const path = require('path');

//DEvuelve siempre una ruta absoluta

//Resolver rutas relativas desde el directorio actual
const resolvedPath1 = path.resolve('file.txt');
console.log("Ruta relativa desde el directorio actual: " + resolvedPath1);

//Resolucion de multiples segmentos de ruta en una ruta relativa
const resolvedPath2 = path.resolve("/home/users",'docs', 'file.txt');
console.log("Ruta relativa con multiples segmentos: " + resolvedPath2);

//Uso con rutas relaivas que suben varios niveles
const resolvedPath3 = path.resolve("/home/users/docs", "../images",'file.txt');
console.log("Ruta relativa con varios niveles de sub-directorios: " + resolvedPath3);
