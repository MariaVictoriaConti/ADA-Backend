/*Ejercicio 2: Hospital - Sistema de Registro de Pacientes con Promesas Simula el sistema de registro de pacientes de un hospital. Crea una función registrarPaciente que reciba el nombre del paciente y su estado de emergencia (booleano). La función debe devolver una promesa:
• Si emergencia es true, la promesa se resuelve con el mensaje Paciente
<Nombre> registrado en emergencia.
• Si emergencia es false, la promesa se resuelve con el mensaje Paciente
<Nombre> registrado en sala de espera.
• Si el nombre del paciente está vacío o es null, la promesa se rechaza con
el mensaje Error: Nombre inválido para registro. Instrucciones:
• Usa una promesa para manejar los casos de emergencia y sala de espera.
• Asegúrate de validar que el nombre del paciente no esté vacío ni sea null.
• Maneja la resolución o rechazo de la promesa en el código llamador con
then y catch.*/

function registrarPaciente(nombre, estadoEmerg) {
    const paciente = new Promise((resolve, reject) => {

        if (nombre === "" || nombre === null || !nombre) {
            reject("El nombre ingresado es invalido")
            return;
        }

        setTimeout(() => {
            if (estadoEmerg) {
                resolve(`El paciente ${nombre} se registro con exito.`)
            } else {
                resolve(`Paciente ${nombre} registrado en sala de espera.`)
            }
        }, 1000)
    })
    paciente
    .then((ok) => console.log(ok))
    .catch((error) => console.log(error)) 
}

//Llamada a la funcion con un paciente de emergencia
registrarPaciente("Victoria", true)

registrarPaciente("Caro", false)
registrarPaciente( null ,true)
registrarPaciente("PEPO", false)
registrarPaciente("", true)



