const fs = require('fs');

const leerDatosDelJSON = fs.readFileSync("data.JSON", "utf-8");
console.log(leerDatosDelJSON);

const bobObjeto = JSON.parse(leerDatosDelJSON)
console.log(bobObjeto);

bobObjeto.age = 60;

console.log(bobObjeto);

const nuevoJSON = JSON.stringify(bobObjeto, null, 2);
console.log(nuevoJSON);

fs.writeFileSync("dataModificado.JSON", nuevoJSON);
