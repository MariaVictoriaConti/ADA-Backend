const net = require('node:net');

const server = net.createServer();
server.on('connection', (socket) =>{
socket.on('data', (data)=>{
    console.log("Coneccion establecida con el cliente: " + socket.remoteAddress + " que dice: \n" + data);
    socket.write("Recibido");
});

socket.on('close', ()=>{
    console.log("Chat finalizado.");    
});

socket.on('error', (err)=>{
    console.log(err.message);    
});

});

server.listen(5000, ()=>{
    console.log("Servidor esta escuchando en el puerto: " + server.address().port);
    
})