const net = require('net');
const {v5: uuidv5} = require('uuid');

const server = net.createServer((socket)=>{
    console.log("Nuevo cliente conectado");

    const NAMESPACE = uuidv5.URL;
    const idV5 = uuidv5("Victoria", NAMESPACE);
    const uuidJSON =JSON.stringify(idV5);
    console.log("Id del cliente en formato JSON: ", uuidJSON);
socket.write(uuidJSON);
socket.end();

    socket.on("end", ()=>{
console.log("El cliente se ha desconectado");
    });
    
});

server.listen(8081, ()=>{
    console.log("Servidor escuchando en puerto 8081");    
});