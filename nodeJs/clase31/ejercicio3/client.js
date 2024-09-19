const net = require('net');

const client = net.createConnection({port:8082});
console.log("Conectado al servidor.");

client.on("data", (data) =>{
    const idv1OBJETO = JSON.parse(data);
    console.log("El servidor dice: TU ID EN FORMATO OBJETO ES => " + idv1OBJETO.toString());
    client.end();
});

client.on('end', ()=>{
    console.log("Servidor desconectado.");
});

client.on('error', (err) =>{
    console.log('Error: ' + err.message);    
});

