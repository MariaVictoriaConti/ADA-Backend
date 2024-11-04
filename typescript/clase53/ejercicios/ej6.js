/*3. Ejercicio de Callbacks - Validación de Usuario
Diseña una función validateUsername que reciba un nombre de usuario y un
callback. La función debe simular una validación asíncrona (usando setTimeout)
de 1 segundo y luego ejecutar el callback. Si el nombre tiene más de 5
caracteres, el callback debe ejecutarse con el argumento true indicando éxito, y
si tiene 5 o menos caracteres, debe ejecutar el callback con false.


function validateUserName(nombre, callback){
    let mensaje;
    
    setTimeout(()=> {
if (nombre.length > 5){
     mensaje = true;
}else{
    mensaje = false;
    callback(mensaje)
}
    }, 1000)
}*/

function validateUsername(nombre, callback) {
    const nombreValido = nombre.length > 5;
    setTimeout(() => {
        callback(nombreValido);
    }, 1000);
}
function mostrarMensaje(nombreValido) {
    if(nombreValido) {
        console.log("Usuario válido");
    } else {
        console.log("Usuario inválido");
    }
}
validateUsername("pau", mostrarMensaje); // invalido
validateUsername("paulaurna", mostrarMensaje); // valido