const net = require('node:net');

const server = net.createServer((socket) =>{
    console.log("Cliente contectado.", socket.remoteAddress + ":" + socket.remotePort);


socket.on('data', (data) => {
    console.log("mensaje del cliente" + socket.remoteAddress + ":" + socket.remotePort + data);
    socket.write("Mensaje recibido.");
});


socket.on('close', () => {
    console.log("Cliente desconectado." + socket.remoteAddress + ":" + socket.remotePort);
});

socket.on('error', (err) => {
    console.log("Error: " + err.message);
});
});
server.listen(5000, () => {
    console.log("Escuchando en el puerto 5000");
});
