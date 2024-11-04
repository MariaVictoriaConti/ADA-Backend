/*10. Ejercicio de Tuplas - Registro de Usuarios
Crea una tupla en TypeScript llamada User que contenga el nombre de usuario
como string, la edad como número y el estado de actividad como booleano.
Crea una función registerUser que acepte esta tupla y muestre un mensaje en
consola con los datos del usuario registrado.*/

type User = [string, number, boolean];

function registerUser(user: User){
const [nombre, edad, actividad] = user;
console.log("nombre:"+ nombre+ " Edad:" +  edad + " Actividad:" + actividad);

}

const usuario:User =["Coca", 12, true]

registerUser(usuario)