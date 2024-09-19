const net = require('net');
const path = require('path');

const server = net.createServer(() => {
    console.log('Cliente conectado');
});

server.on('connection', (socket) => { //Evento connection
    
    socket.on('data', (data) => { //Evento data
        console.log('Mensaje del cliente: ' +  data.toString());
        const ruta = data.toString();
        const pathBase = path.basename(ruta);
        const pathDir = path.dirname(ruta);
        const pathExt = path.extname(ruta);

        socket.write('La base de la ruta enviada es: ' + pathBase + '\n');
        socket.write('El directorio donde se encuentra el archivo es: ' + pathDir + '\n');
        socket.write('La extensión del archivo es: ' + pathExt + '\n');
    });


    socket.on('close', () => { //Evento cerrar
        console.log('Cliente desconectado.');
        process.exit(0);
    });

    socket.on('error', (err) => { //Evento error 
        console.log('Error: ', err.message);
    });
});

server.listen(8082, () => {
    console.log('El servidor está escuchando en el puerto 8082.');
});