const net = require('node:net');

const server = net.createServer();

server.on('connection', (socket)=>{
    console.log("Nuevo cliente conectado" + socket.remoteAddress + ":" + socket.remotePort);
    
    socket.on('data', (data) => {
        console.log("mensaje del cliente: " + data.toString());
        socket.write("Mensaje recibido por el servidor.");
    });

    socket.setTimeout(10000);   
    socket.on('timeout', ()=>{
        console.log("Tiempo de espera alcanzado.");
        socket.end();
    });
    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });  

});



server.listen(7000, () => {
    console.log("Escuchando en el puerto 7000");
});
