const prompt = require("prompt-sync")({ sigint: true });

/*1. Estructura de Datos
a) Crear un array de objetos llamado mascotas que contenga al menos 5
mascotas. Cada mascota debe tener las siguientes propiedades:
✓ id (número)
✓ nombre (string)
✓ especie (string)
✓ edad (número)
✓ disponible (booleano)
b) Crear un array de objetos llamado propietarios con al menos 3
propietarios. Cada propietario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ mascotasAdoptadas (array de ids de mascotas)*/
let mascotas = [
    { id: 1, nombre: "Firulais", especie: "perro", edad: 2, disponible: false },
    { id: 2, nombre: "Pipo", especie: "gato", edad: 5, disponible: true },
    { id: 3, nombre: "Lola", especie: "perro", edad: 4, disponible: true },
    { id: 4, nombre: "Negrito", especie: "perro", edad: 1, disponible: false },
    { id: 5, nombre: "Pancho", especie: "gato", edad: 2, disponible: false }
];

let propietarios = [
    { id: 1, nombre: "Juan", email: "juan@gmail.com", mascotasAdoptadas: mascotas[0] },
    { id: 2, nombre: "Ana", email: "ana@gmail.com", mascotasAdoptadas: [mascotas[3]] },
    { id: 3, nombre: "Flor", email: "flor@gmail.com", mascotasAdoptadas: [mascotas[4]] }
]

//console.log(propietarios[2])


/*2. Funciones de Gestión de Mascotas
a) Implementar una función agregarMascota(id, nombre, especie, edad)
que agregue una nueva mascota al array mascotas.*/


 function agregarMascota(nombre, especie, edad) {
     let id = mascotas.length + 1;
     let nuevaMascota = {
         id,
         "nombre": nombre,
         "especie": especie,
         "edad": edad
     };
     mascotas.push(nuevaMascota);
     return nuevaMascota;
 };

agregarMascota();

// /*b) Crear una función buscarMascota(criterio, valor) que permita buscar
// mascotas por nombre o especie.*/

// function buscarMascota(criterio, valor) {
//     let resultadoBusqueda = mascotas.find(mascota => mascota[criterio] === valor);
//     return resultadoBusqueda;
// }

// console.log(buscarMascota("nombre", "Coco"));


// /*3. Gestión de Propietarios
// a) Implementar una función registrarPropietario(nombre, email) que
// agregue un nuevo propietario al array propietarios.


// function registrarPropietario(nombre, email) {
//     let nuevoPropietario = { "nombre": nombre, "email": email }
//     propietarios.push(nuevoPropietario);
//     return propietarios;
// }

// registrarPropietario("Sara", "sara@gmail.com");
// console.log(propietarios);

// b) Crear una función buscarPropietario(email):

// function buscarPropietario(email){
//     let propietarioEncontrado = propietarios.find(propietario => propietario.email === email);
//    return console.log(propietarioEncontrado);
// }

// buscarPropietario("ana@gmail.com");



/*4. Sistema de Adopciones
a) Desarrollar una función adoptarMascota(idMascota, idPropietario) que
marque una mascota como no disponible y la agregue a la lista de
mascotas adoptadas del propietario.*/


// function adoptarMascota(idMascota, idPropietario) {
//     //Busco si el idMascota ingresado coincide con el id de alguna mascota del array:
//     let mascotaPorId = mascotas.find(mascota => mascota.id === idMascota);
//     console.log(`El id ingresado corresponde a la mascota: ${mascotaPorId.nombre}`);

//       //Busco si el idPropietario coincide con el id de algun propietario del array:
//       let propietarioPorId = propietarios.find(propietario => propietario.id === idPropietario);
//       if (!propietarioPorId) {
//         console.log("No hay propietario con ese ID")
//     }else{
//       console.log(`El id ingresado corresponde al propietario: ${propietarioPorId.nombre}`)
//     }

//     //Corroboro si la mascota encontrada esta disponible para adopcion: si=cambio disponible a false y lo sumo a la lista de mascotas adoptadas del propietario. Si la mascota no esta dispobible =mensaje.
//     if (mascotaPorId.disponible === true) {
//         propietarioPorId.mascotasAdoptadas.push(mascotaPorId);
//         console.log(`Se agrego ${mascotaPorId.nombre} a tus mascotas adoptadas ${propietarioPorId.nombre}!`);
//     } else {
//         console.log("No se puede adoptar esta mascota porque ya esta adoptada.")
//     }
// }

// (adoptarMascota(5, 1));


/*b) Implementar una función devolverMascota(idMascota, idPropietario)
que marque una mascota como disponible y la elimine de la lista de
mascotas adoptadas del propietario.*/


/*function devolverMascota(idMascota, idPropietario) {
    //Si los id brindados no se encuentran, se termina ejecucion con mensaje.
    if (idMascota > mascotas.length) {
        return console.log("No hay mascotas con ese id.")
    } else if (idPropietario > propietarios.length) {
        return console.log("No hay propietarios con ese id.")
    }


    let mascotaBuscada = mascotas.find(mascota => mascota.id === idMascota)
    console.log("La mascota buscada es: " + mascotaBuscada.nombre);

    let propietario = propietarios.find(propietario => propietario.id === idPropietario)
    console.log("El propietario buscado es: " + propietario.nombre);

    if (propietario.mascotasAdoptadas === mascotaBuscada) {
        console.log(mascotaBuscada);

        //Cambio estado disponible a true:
        mascotaBuscada.disponible = true;

        propietario.mascotasAdoptadas = propietario.mascotasAdoptadas.filter(mascota => mascota !== mascota.disponible);

        console.log(`${mascotaBuscada.nombre} ahora esta disponible para adopcion.`);

        //propietario.mascotasAdoptadas = propietario.mascotasAdoptadas.filter(mascota => mascota.disponible!==true);
        console.log(propietario)

        // propietario.mascotasAdoptadas = propietario.mascotasAdoptadas.filter(mascota => mascota.disponible!==true)
        // console.log("Se actualizo estado de disponibulidad para adopcion de " + mascotaBuscada + " por: " + mascotaBuscada.disponible);
        // console.log(propietario);

    }
};

devolverMascota(1, 1);/*


/*5. Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de
opciones al usuario y permita interactuar con el sistema utilizando
prompt().*/


function menuPrincipal() {
    let opcion =
    prompt("Ingrese la opcion que desea utilizar: 1-Agregar Mascota / 2-Buscar Mascota / 3-Registrar Propietario / 4-Buscar Propietario / 5-Adoptar Mascota / 6-Devolver Mascota: ");

switch (opcion) {
    case "1":
        let nombre = prompt("Ingresa el nombre: ");
        let especie = prompt("Ingresa la especie (perro, gato, loro): ");
        let edad = prompt("Ingrese la edad de su mascota: ");
        return console.log("Se agrego tu libro a nuestra lista! ", agregarMascota(nombre, especie, edad))        ;
        break;

    default:
        break;
}
        }

menuPrincipal();




/*b) El menú debe incluir opciones para todas las funcionalidades
anteriores y manejar la lógica mediante estructuras de control (if,
switch, ciclos).*/
