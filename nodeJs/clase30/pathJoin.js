const path = require('path');

//Uniendo segmentos de rutas simples
const ejemplo1 = path.join("/users", "local", "bin");
console.log(ejemplo1);

//Eliminacion de barras redundantes
const ejemplo2 = path.join("/users/", "/local", "bin/");
console.log(ejemplo2);

//Normalizando rutas con ".." (Subir directorio)
const ejemplo3 = path.join("/users", "local", "..", "bin");
console.log(ejemplo3);

//Construccion de una ruta relativa multiplataforma
const ejemplo4 = path.join("docs", "projects", "index.html");
console.log(ejemplo4);

