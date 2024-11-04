/*Ejercicio 1: Gestión de Entradas en un Museo
Un museo necesita recibir a los visitantes en diferentes horarios y desea
optimizar la gestión de entradas disponibles.
1. Crea una función checkTicketAvailability que reciba un arreglo de
visitantes, una hora de apertura (en milisegundos desde el inicio del día) y
el horario en que cada visitante planea llegar.
2. Usa setTimeout para simular la espera de cada visitante hasta la hora de
apertura del museo (usa un valor aleatorio de hasta 2 segundos para cada
visitante).
3. Cada visitante debe recibir un mensaje de confirmación si hay entradas
disponibles (simulado con un 70% de probabilidad). En caso contrario,
debe recibir un mensaje indicando que debe esperar su turno.
4. El callback debe recibir un objeto con el nombre del visitante, la hora de
llegada y un mensaje de estado de su entrada.*/


// let visitantes = ["Ana", "Juan", "Maria"]

// function checkTicketAvailability(array, horaApertura, horaLlegada){
//     if(horaLlegada < horaApertura){
//         console.log("El museo esta cerrado");
        
//     }else if(horaLlegada >= horaApertura){
//         setTimeout(()=>{
//             console.log("Ahora podes ingresar");
            
//                 },horaLlegada)
//     }
// }

// checkTicketAvailability(visitantes, 3000, 4000);


function checkTicket(visitantes, apertura, callback) {
    visitantes.forEach((visitantes) => {
        const llegada = visitantes.llegada;
        const delay = apertura - llegada;
        setTimeout(() => {
            const disponible = Math.random() > 0.2;
            const mensaje = disponible ? "Entrada confirmada" : "Debe esperar su turno";
            callback({ name: visitantes.name, llegada, status: mensaje });
        }, delay)
    })
}
const visitante = [
    { name: "Sofi", llegada: 9000 },
    { name: "Viki", llegada: 6000 },
    { name: "Kati", llegada: 8000 },
    { name: "Juli", llegada: 7000 },
];
checkTicket(visitante, 7000, (info) => {
    console.log(`Visitantes: ${info.name}, Llegada: ${info.llegada}, Estado: ${info.status}`);
})