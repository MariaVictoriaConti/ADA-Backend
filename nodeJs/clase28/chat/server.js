const net = require('net');
const readline = require('readline-sync');
const fs = require('fs');
const path = require('path');


const historialArchivo = path.join(__dirname, './historial.json');

const server = net.createServer();

server.on('connection', (socket) => {
    console.log("Nuevo cliente conectado");

    socket.on('data', (data) => {
        if (data.toString() === "--history") {
            console.log(data + ": Historial enviado");
            socket.write("Historial enviado");
        } else if (data.toString() === "--eraseMessages") {
            console.log(data + ": Historial borrado");
            socket.write("Historial borrado");
        } else {
            console.log("Mensaje recibido del CLIENTE: " + data);
            var msjServer = readline.question("Ingrese un mensaje para enviar AL CLIENTE: ");
            if (msjServer.toLowerCase() === "exit") {
                socket.write("El servidor se ha desconectado");
                socket.end();
                process.exit(0);
            } else {
                socket.write(msjServer);
            }
        }
    });

    socket.on('close', (socket) => {
        console.log("El cliente se ha desconectado");
        process.exit(0);
    });

    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });

});

server.listen(7000, () => {
    console.log("Servidor esta escuchando en el puerto 7000");
});