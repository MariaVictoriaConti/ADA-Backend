const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({port:7000, host:'localhost'});

client.on('connect', () => {
    console.log("Conectado al servidor");
    sendMessage();
});

client.on('data', (data) => {
console.log("Respuesta del SERVIDOR: " + data);
if(data.toString() === "El servidor se ha desconectado"){
    client.end()
    process.exit(0);
}else{
    sendMessage();
}});

client.on('error', (err) =>{
    console.log('Error: ' + err.message);    
});

function sendMessage(){
    const message = readline.question("Ingrese un mensaje para enviar AL SERVIDOR: ");
    if(message.toLowerCase()=== "exit"){
        client.end()
    }else{
        client.write(message);
    }
};

