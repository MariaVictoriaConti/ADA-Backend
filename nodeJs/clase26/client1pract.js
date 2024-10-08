const net = require('node:net');
const readline = require('readline-sync');

const client = net.createConnection({port:5000, host:'localhost'}); //se puede pasar la variable options con el port y elhost

client.on('connect', () =>{
    console.log("Conectado al servidor");
    sendMessage();    
});

client.on('data', (data) => {
console.log("Respuesta del servidor" + data);
sendMessage();
});

client.on('error', (err) =>{
    console.log('Error: ' + err.message);    
});

function sendMessage(){
    const message = readline.question("Ingrese un mensaje para enviar al servidor");
    if(message.toLowerCase()=== "exit"){
        client.end()
    }else{
        client.write(message);
    }
};
