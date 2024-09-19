const net = require('node:net');
const readline = require('readline-sync');

const PORT = 10000;

//Creamos el servidor
const server = net.createServer((socket) => {
    console.log("Nuevo cliente conectado");

    socket.write("Bienvenidos al servidor TCP. Envia status para ver el estado del servidor");

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log("mensaje recibido del cliente: " + message);
        if (message === "status") {
            socket.write("Estado del servidor: OK");
        } else {
            socket.write("Mensaje recibido");
        };
    });

    socket.on('end', () => {
        console.log("Cliente desconectado");
    });

    socket.on('error', (err) => {
        console.log('Error en el socket: ' + err.message);
    });

    sendMessageFromServer(socket);

});

server.on('error', (err) => {
    console.log('Error en el servidor: ' + err.message);
});

server.listen((PORT), () => {
    console.log("El servidor está escuchando en el puerto: " + PORT);
});

function sendMessageFromServer(socket) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.setPrompt('Escribe un mensaje para el cliente: ');
    rl.prompt();
    rl.on('line', (input) => {
        if(input.toLowerCase() === "exit"){
rl.close();
socket.end();
        }else{
            socket.write(input + "\n");
            rl.prompt();
        }
        });
};
