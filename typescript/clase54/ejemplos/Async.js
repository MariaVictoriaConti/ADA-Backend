//funcion asincrona

async function saludo() {
    return "Hola!";
}

//Llamamos a la funcion y manejamos la promesa resultante con .then
saludo().then((mensaje) => {
    console.log(mensaje)
})




