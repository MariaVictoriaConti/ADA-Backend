const net = require('net');
const readline = require('readline-sync');
const path = require('path');
const fs = require('fs');

const historialArchivo = path.join(__dirname, 'historial.json'); //creo la ruta del archivo a guardar los mensajes


const server = net.createServer();

server.on('connection', (socket) => {
    console.log("Nuevo cliente conectado");

    socket.on('data', (data) => {


///Estoy con esto porque no me manda el historial al cliente
        const leerHistorial = () => {
            try {
                const data = fs.readFileSync(historialArchivo, 'utf8');
                return JSON.parse(data);
            } catch (error) {
                if (error.code === 'ENOENT') {
                    // Si el archivo no existe, se crea uno vacío
                    return [];
                } else {
                    console.error("Error al leer el historial:", error);
                    return [];
                };
            };
        };
      
        let historial = [];
        const msj = data.toString();
        //const cliente = socket.remoteAddress;


        /////Me falta q se guarde el historial del servidor
        const guardarMsj = (msj, cliente)=>{           
            const historial = leerHistorial(); 
            const template = {
                msj: msj,
                cliente: cliente
                };
            historial.push(template);
            fs.writeFileSync(historialArchivo, JSON.stringify(historial, null, 1), 'utf8');
        };
guardarMsj(msj, cliente);

const borrarHistorial = () => {
    fs.writeFileSync(historialArchivo, '[]', 'utf8');
};

        if (data.toString() === "--history") {
            let historial = leerHistorial();
            console.log(data + ": Historial enviado");
            socket.write("Historial enviado: " + JSON.stringify(historial));// aca tengo q ver como hacer para que se vea lindo el historial en la consola
        } else if (data.toString() === "--eraseMessages") {
            borrarHistorial();
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