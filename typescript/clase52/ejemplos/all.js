//El Proomise.all devuelve un array con los resultados de las promesas!
const promesa1 = Promise.resolve(3);
//Creamos una promesa que se resuelve inmediatamente con el valor 3

const promesa2 = new Promise((resolve, reject) => { // los argumentos resolve y reject no son palabras claves de js sino que se puede poner cualquier nombre pero representan la resolucion y el rechazo
    setTimeout(resolve, 100, "Hola ")
    //Despues de los 100 ms, la promesa se resuelve con valor "Hola "
});

const promesa3 = new Promise((resolve, reject) => { // los argumentos resolve y reject no son palabras claves de js sino que se puede poner cualquier nombre pero representan la resolucion y el rechazo
    setTimeout(resolve, 500, "Chicas!")
    //Despues de los 500 ms, la promesa se resuelve con valor "Chicas!"
});

//Usamos Promise.all para esperar que todas las promesas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Resultados de todas las promesas: ", resultados);

    })

    .catch((error) =>{
        console.log("Una de las promesas fue rechazada: ", error);        
    })

