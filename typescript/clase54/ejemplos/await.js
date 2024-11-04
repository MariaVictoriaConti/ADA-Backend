//funcion que simule un proceso asincronico

function procesoLargo() {
    return new Promise((resolve) => {
        setTimeout(()=> 
            resolve("Proceso completado"), 4000)
    })
}

async function ejecutarProceso() {
    console.log("Iniciando proceso...");
    //Pausa la ejecucuion hasta que procesoLargo se resuelve
    const resultado = await procesoLargo()
    console.log(resultado);
    console.log("Proceso terminado.");     
}

ejecutarProceso()