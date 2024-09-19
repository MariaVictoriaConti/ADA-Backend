const net = require('net');
const { v1: uuidv1 } = require('uuid');

const server = net.createServer((socket) => {
    console.log("Nuevo cliente conectado");

    const idv1 = uuidv1();
    const idv1JSON = JSON.stringify(idv1);
    console.log("Id del cliente en formato JSON: ", idv1JSON);
    
    socket.write(idv1JSON);
    socket.end();

    socket.on("end", () => {
        console.log(("El cliente se ha desconectado."));

    });

    socket.on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

server.listen(8082, () => {
    console.log("Servidor esuchando en el puerto 8082");
});