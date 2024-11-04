const promesa1 = Promise.reject("Error en programa 1")

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Hola")
})

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Chicas de Back") //Tener en cuenta el tiempo que se le pone en caso de usar SetiTimeOut.. devuelve la que primero se resuelva
})

Promise.any([promesa1, promesa2, promesa3])
.then((resultado) => {
    console.log("Resultado de la primer promesa resuelta:", resultado);
})
.catch((error) => {
    console.log("Todas las promesas fueron rechazadas: ", error);    
})