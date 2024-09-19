const net = require('node:net');
const readline = require('readline-sync');

const OPTIONS = {
    port: 7200,
    host: '127.0.0.1'
};

//Creamos interfaz de entrada para el cliente
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const UserName = process.argv[2].split('=')[1] || 'Unknow';



