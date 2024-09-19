const net = require('node:net');
const readline = require('readline-sync');

const PORT = 10000;
const HOST = '127.0.0.1';

//Creamos interfaz de entrada para el cliente
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const client = new net.Socket();

//Conectamos al servidor
client.connect(PORT, HOST, () => {
    console.log("Conectado al servidor.");
    promptUser();    
});

//Manejamos los datos del cliente
client.on('data', (data)=>{
console.log("Respuesta del servidor:" + data.toString().trim());
promptUser();
});


//Manejamos los eventos del cliente
client.on('close', () => {
console.log("Conexión cerrada");
rl.close();
});


//Funcion para solicitar el input del usuario
function promptUser() {
    rl.question("Ingrese un mensaje para el servidor o exit para salir: ", (message));
    if (message === "exit") {
        console.log("El cliente se desconecto");        
        rl.close();
}else{
    client.write(message);
}};