/*3. Ejecución de Múltiples Consultas en Paralelo
Simulemos un caso donde un sistema necesita realizar varias consultas a
distintos servicios externos de manera simultánea. Escribe tres funciones que
simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3
segundos). Luego, crea una función que ejecute estas tres consultas en paralelo
usando Promise.all, de modo que se esperen los tres resultados antes de
continuar.
Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones
asíncronas independientes ejecutándolas en paralelo.
*/

function consultaA(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Consulta A completado.")
        }, 2000)
    })
}

function consultaB(datos){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(datos){
                resolve("Consulta B completado.")
            }else{
                reject("La consulta B no se pudo ejecutar.")
            }
        }, 3000)
    })
}

function consultaC(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Consulta C completado.")
        }, 4000)
    })
}

async function ejecutarConsultas(){
    try{
        console.log("Ejecutando consultas...");
        const respuestas = await Promise.all([consultaA(), consultaB("dato1"), consultaC()]);
        console.log(respuestas); 
    }catch(error){
        console.log("Error: ", error);        
    }  
    
}

ejecutarConsultas()