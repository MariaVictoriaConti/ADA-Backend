const fs = require('fs');
const prompt = require('prompt-sync')();
const path = require('path');
const { question } = require('readline-sync');

const booksFilePath = path.join(__dirname, 'historial.json');

const template = {"nombre":"El libro", "autor":"Coca"};

function leerArchivo() {
const data = fs.readFileSync(booksFilePath, 'utf8');
return JSON.parse(data);
}

function guardarArchivo(template) {
const jsonData = leerArchivo();
    jsonData.push(template);
    fs.writeFileSync(booksFilePath, JSON.stringify(jsonData, null, 1), 'utf8');
    console.log(fs.readFileSync(booksFilePath, 'utf8'));

}
guardarArchivo(template);
