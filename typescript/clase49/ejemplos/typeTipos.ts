// Definicion: alias de tipos de typescript 
//Un alias de tipos permite crear un nombre descriptivo para un tipo ya existenste
//Esto mejora la legibilidad del codigo

//1.Alias de tipos primitivos: ejemplo: String, number, etc
type ID = number;
type Nombre = string;
type Activo = boolean;

//Usamos los alias para declarar variable
let usuarioId: ID = 123;
let nombreUsuario: Nombre = "Sofi";
let cuentaActiva: Activo = true;

console.log(`Usuario ID : ${usuarioId}, Nombre: ${nombreUsuario}, Cuenta actiba: ${cuentaActiva}`);

//2.Alias para objetos
type Direccion = {
    calle: string, 
    ciudad: string,
    codigoPostal: number
}

//Usamos el alias "direccion"
let miDireccion: Direccion = {
    calle: "Avenida America",
    ciudad: "Neuquen",
    codigoPostal: 1234,
}

console.log(`Vivo en calle ${miDireccion.calle}, en la ciudad de ${miDireccion.ciudad}, y mi CP es ${miDireccion.codigoPostal}.`);


//3.Alias para uniones de tipos
type Resultado = "Exito" | "Error"
type IdUsuario = string | number;

//Usamos el alias para definir variables
let estadoOperacion: Resultado = "Exito";
let idUsuario: IdUsuario = 456;
let idUsuario2: IdUsuario = "123abc";

console.log(`Estado de operacion ${estadoOperacion}, Usuario id: ${idUsuario}, Usuario Id con letras ${idUsuario2}`);

//4. Alias para funciones
//Alias para las funciones que se toma dos numeros como argumentos y devuelve un numero
//Esto se usa para definir la "firma" de funciones que deben cumplir con cierto formato
type OperacionMatematica = (a:number, b:number) => number;

//Implementacion de dos funciones que siguen el formato de operacion matematica
const sumar: OperacionMatematica = (a, b) => a + b;
const restar: OperacionMatematica = (a, b) => a - b;

console.log(`Suma ${sumar(5, 3)}, Resta: ${restar(10, 5)}`);

//Alias para array
type ListaDeNumeros = number[];
type ListaDeCadenas = string[];

let numeros: ListaDeNumeros = [1,2,3,4]
let cadenas: ListaDeCadenas = ["uno", "dos", "tres"];

console.log(`Numeros: ${numeros.join(", ")}`);
console.log(`Cadenas: ${cadenas.join(", ")}`);

//6. Alias para objetos complejos
export type Producto = {
    id: ID;
    nombre: string;
    precio: number;
    disponible: boolean;
    categoria: ListaDeCadenas;
    direccionEnvio: Direccion;
}

//Creamos el objeto "Producto"
let producto: Producto = {
    id: 101,
    nombre: "Computadora Laptop",
    precio: 1000,
    disponible: true,
    categoria: ["Electronica", "Computacion"],
    direccionEnvio: {
        calle: "Cochabamba",
        ciudad: "Cordoba", 
        codigoPostal: 5152
    }
}

console.log(`Producto: ${producto.nombre}, ID: ${producto.id}, PRECIO: ${producto.precio}, DISPONIBLE: ${producto.disponible}, CATEGORIAS: ${producto.categoria.join(", ")}, DIRECCION ENVIO: ${producto.direccionEnvio.calle}, ${producto.direccionEnvio.ciudad}, ${producto.direccionEnvio.codigoPostal} `);












