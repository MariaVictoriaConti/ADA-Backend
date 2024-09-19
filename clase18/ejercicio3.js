let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];

let eliminoUltProducto;
let indiceCaramelos;
let productoMenorA50;
let separadosPorComa;

let gestionarProductos = function (productos) {
    //Agrego el elemento Sopa al array productos:
   productos.push('Sopa');
   console.log(productos) //como hago para agregarlo al objeto?????

    //Elimino el ultimo elemento del array:
    eliminoUltProducto = productos.pop();

    //Busco indice de producto caramelos:
    indiceCaramelos = productos.findIndex(function (producto) {
        return producto.nombre == 'Caramelos';
    });




    
    //Busco si hay productos con precio menor a 50:
    productoMenorA50 = productos.some(function (producto) {
        return producto.precio < 50
    })
    //Devuelvo cadena de nombres de productos separados por comas:
    separadosPorComa = productos.join();

    return {        
        productos,
        eliminoUltProducto,
        indiceCaramelos,
        productoMenorA50,
        separadosPorComa
    }
}
console.log(gestionarProductos(productos));












/*// 3. Encontrar el índice de un producto específico usando findIndex
    let productoBuscado = "Chocolates";
    let indiceProductoBuscado = productos.findIndex(producto => producto.nombre === productoBuscado);*/

/*let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];*/