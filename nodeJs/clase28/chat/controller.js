const net = require('net');
const path = require('path');
const fs = require('fs');

const historialArchivo = path.join(__dirname, 'historial.json'); //creo la ruta del archivo a guardar los mensajes


let historial = [];
const msj = data.toString();
const cliente = socket.remoteAddress;


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