const net = require('node:net');
const readline = require('readline-sync');


const client = net.createConnection({port:7000});

client.on('connect', ()=>{
console.log("Conectado al servidor");
var line = readline.question("Escribe un mensaje al servidor: ");
client.write();
client.end();
});

client.on('data', (data)=>{
    console.log("El servidor dice: ", data.toString());    
});

client.on('end', ()=>{
    console.log("Servidor desconectado.");
});

client.on('error', (err) =>{
    console.log('Error: ' + err.message);    
});



