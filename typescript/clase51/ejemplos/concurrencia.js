function tareaConcurrencia(tarea, tiempo){
    setTimeout(()=>{
console.log(`Tarea ${tarea} completada en ${tiempo} milisegundos.`);

    },tiempo)
};

//Ejecutamos tareas de manera concurrente
function ejecutarTareas(){
    tareaConcurrencia("Tarea 1", 1000)
    tareaConcurrencia("Tarea 2", 500)
    tareaConcurrencia("Tarea 3", 1500)

};

ejecutarTareas();

//Concurrencia: las tres tareas se inician casi al mismo tiempo, aunque tarea 2 se completa primero, tarea 1 y tarea 3 seguiran ejecutandose. Esto muestra como varias tareas pueden progresar al mismo tiempo, aunque una tarea se este ejecutando en un momento dado.
// Mismo hilo, diferente tiempo de ejecucion.
//Se inician al mismo tiempo pero van ejecutandose en diferentes momentos.