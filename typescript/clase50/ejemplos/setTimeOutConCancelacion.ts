//Se cancela la ejecucion antes de que se ejecute con el clearTimeOut()

let temporizador = setTimeout(() => {
    console.log("Este mensaje no se mostrara porque lo cancelaremos el temporizador.");

}, 2000)

clearTimeout(temporizador) //Cancelamos el temporizador antes de los 2 segundos