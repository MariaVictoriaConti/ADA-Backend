const path = require('path');

//Devuelve una ruta mas corta y normalizada


//Normalizacion de una ruta con barras redundantes y puntos
const parth1 = "/home/users//docs/./file.txt";
const ejemplo1 = path.normalize(parth1);
console.log("Ruta normalizada: " + ejemplo1);

//Normalizacion de una ryta con muchos puntos de navegacion
const parth2 = "/home./users/docs/../../file.txt";
const ejemplo2 = path.normalize(parth2);
console.log("Ruta normalizada: " + ejemplo2);



