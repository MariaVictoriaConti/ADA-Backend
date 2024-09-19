const net = require('net');

const client = net.createConnection({port:8081});
console.log("Conectando al servidor");

client.on("data", (data)=>{
    const idv5OBJETO = JSON.parse(data)
console.log("El servidor dice: TU ID EN FORMATO OBJETO ES => ", idv5OBJETO.toString());
});
client.end();

client.on('end', ()=>{
    console.log("Servidor desconectado");
    client.end();
});

