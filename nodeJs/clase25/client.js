const net = require('net');
const readline = require('readline-sync');


const options = {
    port: 5000,
    host: '127.0.0.2'
};

const client = net.createConnection(options);

client.on('connect', () => {
    console.log("Conexion satisfactoria!");
    sendLine();
});

client.on('data', (data) => {
    console.log("El servidor dice: " + data);
    sendLine();
})

client.on('error', (err) => {
    console.log(err.message);
});

function sendLine(){
    var line = readline.question("Ahora podes chatear con el servidor!:\n")
    if(line == ""){
        client.end();
        console.log("Se finaliza el chat porque el cliente no escribio nada mas.");
        
    }else{       
        client.write(line);
    }
};
