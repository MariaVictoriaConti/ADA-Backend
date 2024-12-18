/*Ejercicio 2: Promesas - Simulador de Envío de Correos Electrónicos
Consigna:
Vas a crear una función llamada enviarCorreo() que simule el envío de un correo
electrónico usando una promesa. La promesa debe cumplir con los siguientes
requisitos:
1. Resolver si el correo fue enviado exitosamente (usa Math.random() para
simular éxito o error).
2. Rechazar si ocurre un fallo en el envío.
3. La operación debe tardar 2 segundos en completarse (usa setTimeout()).
4. Implementa .then(), .catch(), y .finally() para manejar la respuesta:
o Si el correo se envía exitosamente, imprime el mensaje: "Correo
enviado a [destinatario]".
o Si falla, imprime: "Error: No se pudo enviar el correo a [destinatario]".
o En finally(), muestra siempre el mensaje: "Operación finalizada".
Implementa la función para enviar correos a dos destinatarios distintos.*/


function enviarCorreo(destinatario){
    const correo = new Promise((resolve, reject) => {
        console.log("Comenzando envio de correo a " + destinatario);
        
        setTimeout(() => {
            const enviado = Math.random() > 0.2;

            if(enviado){
                resolve("Correo enviado a: " + destinatario)
            }else{
                reject("No se pudo enviar el correo a " + destinatario)
            }
        }, 2000)
    })
    correo
    .then((result) => {
        console.log("Todo OK! ", result);
    })
    .catch((error) => {
        console.log("Error: " + error);
    })
    .finally(()=>{
        console.log("Operacion finalizada.");
    })
}

enviarCorreo("Lucas")
enviarCorreo("Maria")