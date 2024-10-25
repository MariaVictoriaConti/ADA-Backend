//2. intervalo indefinido(hasta cancelacion manual)
let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador (indefinido: ${contador})`);
    
}, 1000);

console.log(`Intervalo indefinido iniciado.`);
