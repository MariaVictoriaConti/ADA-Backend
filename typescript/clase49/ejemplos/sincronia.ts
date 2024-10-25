function prepararCafe(): void {
    console.log("Preparando cafe...");
    for (let i=0; i < 50000000000; i++){} //simulacion de tarea larga
    console.log("Cafe listo!");
}

function atenderCliente(): void{
    console.log("Tomando pedido del cliente...");
    prepararCafe();
    console.log("Entregando cafe al cliente.");  
    
}

atenderCliente();
atenderCliente();