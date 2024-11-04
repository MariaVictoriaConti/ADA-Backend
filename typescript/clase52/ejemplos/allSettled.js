//Resultado array de objetos que describe el resultado de cada promesa

const promesa1 = Promise.reject("Error en programa 1")

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hola")
})

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "Chicas de Back")
})

Promise.allSettled([promesa1, promesa2, promesa3])
.then((resultado) => {
    console.log("Resultado de todas las promesas: ", resultado);
})
.catch((error) => {
    console.log("Todas las promesas fueron rechazadas: ", error);    
})