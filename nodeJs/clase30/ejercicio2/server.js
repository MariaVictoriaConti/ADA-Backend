const net = require('net');
const path = require('path');

const server = net.createServer(() => {
    console.log('Cliente conectado');
});

server.on('connection', (socket) => { //Evento connection
    
    socket.on('data', (data) => { //Evento data
        console.log('Mensaje del cliente: ' +  data.toString());
        const ruta = data.toString();
        const normalizada = path.normalize(ruta);
        socket.write('La ruta normalizada es: ' + normalizada);
    });


    socket.on('close', () => { //Evento cerrar
        console.log('Cliente desconectado.');
        process.exit(0);
    });

    socket.on('error', (err) => { //Evento error 
        console.log('Error: ', err.message);
    });
});

server.listen(8081, () => {
    console.log('El servidor está escuchando en el puerto 8081.');
});