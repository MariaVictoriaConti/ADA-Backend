//Simulacion de una operacion CPU-BOUND
function operacionCPUBound(){
    let resultado = 0;
    for (let i=0; i < 1_000_000_000; i++){
resultado += i;
    }
    return resultado;
}

//Simulacion de I/O BOUND
function operacionIO(){
    console.log("Simulando lectura de un archivo... ");
    setTimeout(()=>{
        console.log("Archivo leido con exito.")
    }, 2000);
    
}

//Funcion que ejecuta ambas operaciones
function ejecutarOperaciones(){
    console.log("Ejecutando operacion CPU-BOUND...");
    const resultadoCpu = operacionCPUBound();
    console.log(`Resultado de la operacion CPU Bound: ${resultadoCpu}`);
    console.log("Ejecutando operacion I/O Bound...");
    operacionIO();   
    
}

ejecutarOperaciones();

//Operacion CPU-Bound: la funcion operacionCpuBound() realiza un calculo intensivo que utiliza la CPU. La ejecucion de este codigo puede hacer el el programa se congele hasta que el calculo finalice, ya que consume los recursos de la CPU.

//Operacion I/O Bound: la funcion operacionIO() simula una operacion de entrada y salida como por ejempli la lectura de un archivo utilizando setTiemOut(). Esta operacion no depende del CPU de la misma manera que las operaciones CPU-Bound, ya que delega la tarea al sistema operativo y puede realizar otras tareas mientras espera que la operacion de I/O se complete.