
function obtener(exito) {
return new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(exito){
            resolve("Datos recibidos correctamente!")
        }else{
            reject("No se recibieron los datos.")
        }
        }, 2000)
})
}

//funcion asincronica que maneja errores 
async function consultarDatos() {
    try{
        console.log("Iniciando la consulta de datos...");
        //Pausa
        const resultado = await obtener(false);
        console.log(resultado)        
    }catch (error) {
        console.log("Ocurrio un error", error)        
    }finally{
        console.log("Finalizada la consulta de datos.");
    }
    
}

consultarDatos();