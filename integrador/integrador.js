//Estudiante: Maria Victoria Conti
//Profe: Berni
//Carrera | 18va Desarrollo web Back-End [Junio 2024] |


//Requisito para poder usar el prompt en el menu de opciones
const prompt = require('prompt-sync')();

////////////////////////////////////////////////////////// 1. Estructura de Datos /////////////////////////////////////////////////////////////////////////////////

// a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
// ✓ id (número)
// ✓ título (string),
// ✓ autor (string),
// ✓ año (número),
// ✓ género (string),
// ✓ disponible (booleano).

let libros = [
    { id: 1, titulo: "El Psicoanalista", autor: " Jhon Katzenback ", anio: "1995", genero: "Suspenso", disponible: true },
    { id: 2, titulo: "Comer, Rezar, Amar", autor: " Jhon Katzenback ", anio: "1995", genero: "Drama", disponible: true },
    { id: 3, titulo: "El Padrino", autor: " Mario Puzo ", anio: "1969", genero: "Drama", disponible: true },
    { id: 4, titulo: "El Nombre del Viento", autor: " Patrick Rothfuss ", anio: "2007", genero: "Fantasia", disponible: false },
    { id: 5, titulo: "El Principito", autor: " Antonie de Saint ", anio: "1943", genero: "Fantasia", disponible: true },
    { id: 6, titulo: "El Código Da Vinci", autor: " Dan Brown ", anio: "2003", genero: "Misterio", disponible: true },
    { id: 7, titulo: "El Señor de los Anillos", autor: " J.R.R. Tolkien ", anio: "1954", genero: "Fantasia", disponible: true },
    { id: 8, titulo: "1984", autor: " George Orwell ", anio: "1949", genero: "Distopia", disponible: true },
    { id: 9, titulo: "Fahrenheit 451", autor: " Ray Bradbury ", anio: "1953", genero: "Distopia", disponible: true },
    { id: 10, titulo: "#Girlboss", autor: " Nasty Gal ", anio: "2015", genero: "Empoderamiento", disponible: true }
];

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
// ✓ id (número)
// ✓ nombre (string)
// ✓ email (string)
// ✓ librosPrestados (array de ids de libros).

let usuarios = [
    { id: 1, nombre: "Jose Gomez", email: "JOSE@GMAIL.COM", librosPrestados: [] },
    { id: 2, nombre: "Martha Muñoz", email: "MARTHA@GMAIL.COM", librosPrestados: [] },
    { id: 3, nombre: "Julio Soto", email: "JULIO@GMAIL.COM", librosPrestados: [] },
    { id: 4, nombre: "Nieves Guzman", email: "NIEVES@GMAIL.COM", librosPrestados: [] },
    { id: 5, nombre: "Victoria Alves", email: "VICTORIA@GMAIL.COM", librosPrestados: [] },
    { id: 6, nombre: "Ana Flores", email: "ANA@GMAIL.COM", librosPrestados: [] },
    { id: 7, nombre: "Sofia Vergara", email: "SOFIA@GMAIL.COM", librosPrestados: [] },
    { id: 8, nombre: "Tamara Sanchez", email: "TAMARA@GMAIL.COM", librosPrestados: [] },
    { id: 9, nombre: "Laura Cima", email: "LAURA@GMAIL.COM", librosPrestados: [] },
    { id: 10, nombre: "Fernando Chirola", email: "FER@GMAIL.COM", librosPrestados: [] }
];

/////////////////////////////////////////////////////// 2. Funciones de Gestión de Libros /////////////////////////////////////////////////////////////////////////////

// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

function agregarLibro(titulo, autor, anio, genero) {
    let id = libros.length + 1; // Genero el id forzado para que siga corretalivo al ultimo id de la lista y no se pisen.

    let nuevoLibro = { id, "titulo": titulo, "autor": autor, "anio": anio, "genero": genero }; //declaro el objeto nuevo

    libros.push(nuevoLibro); //agrego el nuevoLibro al final del array libros

    console.log("El nuevo libro agregado es:", nuevoLibro);
}

//agregarLibro("lolo", "coco", 1989, "suspenso");
//console.log(libros)


// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.


function buscarLibro(criterio, valor) {

    if (criterio !== "titulo" && criterio !== "autor" && criterio !== "anio") {          //condicion para descartar ejecucion si el criterio no es alguno de los pedidos
        return console.log("No hay libros con el criterio ingresado. Debes colocar titulo, anio o autor.")

    } else if (criterio === "autor" || criterio === "anio" || criterio === "titulo") {

        let libroBuscado = [];  //creo un array vacio 
        for (let i = 0; i <= libros.length; i++) {
            let libro = libros[i];

            if (libro[criterio] === valor) {      //con el for recorro el array libros para ver si dentro hay alguno q coincida con criterio===valor
                libroBuscado.push(libro);              //de ser asi agrego el libro al array libroBuscao, fin
                return console.log("El libro buscado es: ", libroBuscado);
            }
        }
    }
}

//buscarLibro("anio", "2007");


// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego estre los libros ordenados en la consola.

function ordenarLibros(criterio) {
    if (criterio !== "anio" && criterio !== "titulo") {
        return console.log("El criterio ingresado es incorrecto. Prueba con titulo o anio.");
    }              //condicion para descartar si criterio no es el solicitado

    let longitud = libros.length;   // lei q poner el length en una variable fuera agiliza el proceso de ejec y es buena practica x eso lo probe
    for (let i = 0; i < longitud; i++) //recorre array
        for (let j = 0; j < longitud - 1; j++) {    
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                let temp = libros[j];        //comparo de a pares y los intercambio en caso de ser uno mayor q el otro usando un var temp q almacena el valor
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }

        } console.log(libros);

}

//ordenarLibros("anio");


// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.


function borrarLibro(id) {
    let indexLibro = libros.findIndex(libro => libro.id == id); //busco indice del id ingresado como argumento, comparando id ingresado con libro.id de libros
    if (indexLibro === -1) {
        return console.log("No hay libros con ese id.");
    }
    let libroBorrado = libros.splice(indexLibro, 1)[0]; //guardo en libroBorrado el libro q voy a elim con splice pasando el indice del objeto q tiene q eliminar y la cantidad d objetos a eliminar

    console.log("El libro borrado es:", libroBorrado);
    console.log("La lista de libros actualizada es:", libros);
}

//borrarLibro(1);



///////////////////////////////////////////////////////////// 3. Gestión de Usuarios ///////////////////////////////////////////////////////////////////////////////

// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

function registrarUsuario(nombre, email) {
    let id = usuarios.length + 1;  // Genero el id forzado para que siga corretalivo al ultimo id de la lista y no se pisen.
    let nuevoUsuario = { "id": id, "nombre": nombre, "email": email, librosPrestados: [] }  //creo nvo objeto y lo guardo en nuevoUsuario
    usuarios.push(nuevoUsuario);   //agrego objeto nvo a usuarios
    console.log("El nuevo usuario es; ", nuevoUsuario)
    console.log("La lista actualizada de usuarios es: ", usuarios)
    return usuarios;
}

//registrarUsuario("Sara", "sara@gmail.com");



// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios.

function mostrarTodosLosUsuarios() {
    return usuarios;
}

//console.log("La lista actualizada de usuarios es: ", mostrarTodosLosUsuarios());


// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

function buscarUsuario(email) {
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === email); //busco usuario x email(argum) comparando con el usu.email y lo guardo en usuarioEncontrado
    console.log("El usuario buscado es: ", usuarioEncontrado)
    return usuarioEncontrado;
}

//buscarUsuario("ANA@gmail.com");


// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(nombre, email) {
    let indexUsuario = usuarios.findIndex(usuario => usuario.email === email && usuario.nombre === nombre); //busco indice de usuario x mail o nombre, guardo en var
    let usuarioSeleccionado = usuarios.find(usuario => usuario.email === email || usuario.nombre === nombre); //busco usuario x nombre o email, guardo en var
    if (indexUsuario < 0) {  //SI DA -1 es q no existe usuario con el id brindado
        return console.log("Los datos ingresados no corresponden a un usuario de la lista.")
    } else {
        usuarios.splice(indexUsuario, 1);  //borro con splice usario(con indice a partir de donde borrar y cantidad de obj a borrar)
        console.log("El usuario seleccionado para eliminar de la lista de usuarios es: ", usuarioSeleccionado)
        console.log("La lista de usuarios actualizada es: ", usuarios)
    }

}


//borrarUsuario("Laura Cima", "LAURA@gmail.com");




////////////////////////////////////////////////////////////4. SISTEMA DE PRESTAMOS //////////////////////////////////////////////////////////////////////////////

// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.

function prestarLibro(idLibro, idUsuario) {


    let libroPrestado = libros.find(libro => libro.id == idLibro); //busco libro con find, comparto id argumento y libro.id y lo guardo en variable
    if (!libroPrestado) {                                          //si no encuentra libro, chau ejecucion
        console.log("No encontramos un libro con ese id.");
        return;
    }

    let usuario = usuarios.find(usuario => usuario.id == idUsuario);   //busco usuario con find, comparto id argumento y usuarui.id y lo guardo en variable
    if (!usuario) {                                  //si no encuentra usuario, chau ejecucion
        console.log("No encontramos un usuario con ese id.");
        return;
    }

    if (libroPrestado.disponible === false) {     //si encuentra libro, y su disponib es false es q ya esta prestado, termina ejecucion
        console.log("El libro esta prestado y no esta disponible.");
        return;
    } else {
        libroPrestado.disponible = false; 
    }        //pero sino, le cambia el estado disponible a false y le agregamos el libroPrestado a la lista de libPrestados del ususario con el push de abajo

   usuario.librosPrestados.push(libroPrestado);
   //como hago para que se actualice la lista libros prestados del usuario en la lista de usuarios???

    console.log("El libro que te vamos a prestar es: ", libroPrestado)
    console.log("Los datos actualizados del usuario son: ", usuario)
    return true;
    
}

//prestarLibro(5, 1);


// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.

function devolverLibro(idLibro, idUsuario) {
    let usuario = usuarios.find(usuario => usuario.id == idUsuario);  //busco usuario con find comparando id ingresado y usuario.id y guardo en variable 
    if (!usuario) {
        console.log("El id ingresado no corresponde a un usuario de la lista.");
        return;
    } else {
        console.log("El usuario que buscas es: ", usuario)
    };

    let libroBuscado = libros.find(libro => libro.id == idLibro);  //busco libro con find comparando id ingresado y libro.id y guardo en variable
    if (!libroBuscado) {
        console.log("El id ingresado no corresponde a un libro de la lista.");
        return;
    } else {
        console.log("El libro que buscas es: ", libroBuscado) //muestro el libro buscado
    };

    let estaOno = usuario.librosPrestados.findIndex(libro => libro.id == idLibro);
    if (estaOno < 0) {   //busco indice del libro y corroboro si esta en la lista de libros prestados del ususario
        console.log("El libro no esta en la lista de libros prestados del usuario.")
        return;
    } else {
        usuario.librosPrestados.splice(estaOno, 1); //si si esta, lo borro de la lista de libros prestados
        if (!libroBuscado.disponible) {   
            libroBuscado.disponible = true; // y le cambio disponibilidad a true para q pueda ser prestado nuevamente
        }

    }
    console.log("Datos del usuario actualizados: ", usuario);
    console.log("El libro ya se encuentra disponible para ser prestado nuevamente.", libroBuscado)
}

//devolverLibro(5, 1);


////////////////////////////////////////////////////////////////// 5. Reportes /////////////////////////////////////////////////////////////////////////////////
// Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:


function generarReporteLibros() {
    //a)✓ Cantidad total de libros.
    let totalLibros = console.log("\nEl total de libros en nuestra bibilioteca es de: ", libros.reduce((acc, libro) => acc + 1, 0), " libros.");
//uso reduce para sacar el acumulado de libros total, x cada libro se acumula 1 al acc

    //b)✓ Cantidad de libros prestados.
    let librosPrestados = libros.filter(libro => libro.disponible === false) // filtro los libros q tienen disponib false.. osea prestados
    console.log("\nEl total de libros prestados es: ", librosPrestados.length);
    console.log(librosPrestados);
    

    //c)✓ Cantidad de libros por género.
    let librosDrama = libros.filter(libro => libro.genero === "Drama"); // filtro libros x genero y los guardo en una variable para cada genero
    librosDrama = console.log("\nReporte total de libros de genero DRAMA: ", librosDrama.length, " libros.");

    let librosSuspenso = libros.filter(libro => libro.genero === "Suspenso");
    librosSuspenso = console.log("\nReporte total de libros de genero SUSPENSO: ", librosSuspenso.length + " libros.");

    let librosFantasia = libros.filter(libro => libro.genero === "Fantasia");
    librosFantasia = console.log("\nReporte total de libros de genero FANTASIA: ", librosFantasia.length + " libros.");

    let librosMisterio = libros.filter(libro => libro.genero === "Misterio");
    librosMisterio = console.log("\nReporte total de libros de genero MISTERIO: ", librosMisterio.length + " libros.");

    let librosEmpoderamiento = libros.filter(libro => libro.genero === "Empoderamiento");
    librosEmpoderamiento = console.log("\nReporte total de libros de genero EMPODERAMIENTO: ", librosEmpoderamiento.length + " libros.");

    let librosDistopia = libros.filter(libro => libro.genero === "Distopia");
    librosDistopia = console.log("\nReporte total de libros de genero DISTOPIA: ", librosDistopia.length + " libros.");

    //d)✓ Libro más antiguo y más nuevo
    let libroMasNuevo = libros.reduce((ant, actual) => (actual.anio > ant.anio ? actual : ant)); 
    libroMasNuevo = console.log("\nEl libro mas nuevo de la biblioteca es: ", libroMasNuevo);

    let libroMasAntiguo = libros.reduce((ant, actual) => (actual.anio < ant.anio ? actual : ant));
    libroMasAntiguo = console.log("\nEl libro mas antiguo de la biblioteca es: ", libroMasAntiguo);
// uso un if ternario para comparar e intercambiar lugar dependiendo si es mayor o menos para sacar mas nuevo o mas antiguo

    return {
        totalLibros,
        librosPrestados,
        librosDrama,
        librosSuspenso,
        librosFantasia,
        librosMisterio,
        librosEmpoderamiento,
        librosDistopia,
        libroMasNuevo,
        libroMasAntiguo
    }
}

//generarReporteLibros();


/////////////////////////////////////////////////////////////// 6. Identificación Avanzada de libros //////////////////////////////////////////////////////////////////

// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).

// b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.

function librosConPalabrasEnTitulo() {
    const simbolosYnum = /^[a-zA-ZñÑ\s]+$/; //simbolo de num y caracteres especiales.. no se pq no me toma la ñÑ en el filtro
    let titulosSoloPalabras = libros.filter(libro => {

        let masDeUnaPalabra = libro.titulo.trim().split(" ").length > 1; // uso trim para sacar espacios finales y inic si hubieses, y tomo los " " como parametro para retornar titulos q tengan mas de 1 espacio(palabra) con el .length>1 
        let soloPalabras = simbolosYnum.test(libro.titulo); //el test filtra y quita los titulos q tengan simbolosOnum en libro.titulo
        return masDeUnaPalabra, soloPalabras;  //retorno titulos con mas d 1 palabra y que no tengan simb o num
    });


    console.log("Los libros que tienen mas de una palabra en su titulo y no contienen simbolos o numeros en ellos son: ", titulosSoloPalabras)
}

//librosConPalabrasEnTitulo();


//////////////////////////////////////////////////////////7. Cálculos Estadísticos!!!!!!!!!!!!!!!!!!!!!!!!! FALTA EL DE FRECUENCIA!///////////////////////////////////
//a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:

function calcularEstadisticas() {

    let anios = [];
    let suma = 0;
    for (let i = 0; i < libros.length; i++) {
        anios.push(libros[i].anio);
        suma += Number(libros[i].anio); // uso un for para recorrer array libros, hacer un nuevo array solo de anios y hacer la suma de los anios.
    }
    ////   ✓ Promedio de años de publicación de los libros.

    let promedio = suma / libros.length;
    console.log("\nEl promedio de años de publicacion de libros es: ", Math.round(promedio)); //saco el promedio usando suma anterior y redondeo el num con math.round

    ////   ✓ Diferencia en años entre el libro más antiguo y el más nuevo.

    let libroMasNuevo = Math.max(...anios); // encontre q los 3puntos permiten q el argumento q pasemos sea leido por el obj Math. Intente poner anios solo y no me dejo
    let libroMasAntiguo = Math.min(...anios);

    let diferenciaDeAnios = libroMasNuevo - libroMasAntiguo;
    console.log("\nLa diferencia en años entre el libro mas antiguo y el mas nuevo es de ", diferenciaDeAnios, " años.\n");

    //✓ Año de publicación más frecuente.
    let arrayAnios = [];
    libros.forEach(libro => {
        arrayAnios.push(libro.anio);
    })
    
    let aniosRepetidos = [];
    let anioConMasFrecuencia = [];
    for (let i = 0; i < arrayAnios.length; i++) {
        for (let j = i + 1; j < arrayAnios.length; j++) {
            if (arrayAnios[i] === arrayAnios[j]) {
                // Solo agregar a aniosRepetidos si no está ya en la lista
                if (!aniosRepetidos.includes(arrayAnios[i])) {
                    aniosRepetidos.push(arrayAnios[i]);
                    if (aniosRepetidos.length > 1) {
    // No se como hacer para contar la cantidad de veces q se repite un año en caso que hayan mas de 1 q se repita
                                    } else if (aniosRepetidos.length == 1) {
                                        console.log("\nEl año repetido con mayor frecuencia es: ", ...aniosRepetidos);
                                        return;
                                    } else if (aniosRepetidos.length <1) {
                                        console.log("\nNo hay años repetidos en la lista.");
                                        return;
                                    }
    
                                }
                            }
                        }
    
                    }
    

}

//calcularEstadisticas()


///////////////////////////////////////////////////////   8. Manejo de Cadenas  //////////////////////////////////////////////////////////////////////////////////
////   a) Crear una función normalizarDatos() que utilice métodos de strings para:

function normalizarDatos() {

    ////   ✓ Convertir todos los títulos a mayúsculas.
    libros.forEach(libro => libro.titulo = libro.titulo.toUpperCase()); //uso forEach para q modifique array original y uso toUpperCase para asignar libro.titulo a mayusc

    ////   ✓ Eliminar espacios en blanco al inicio y final de los nombres de autores.
    libros.forEach(libro => libro.autor = libro.autor.trim());  //le quito espacios inic y finales a los nombres de autores con trim()

    ////   ✓ Formatear los emails de los usuarios a minúsculas.
    usuarios.forEach(usuario => usuario.email = usuario.email.toLowerCase()); //idem anterior pero pasa a minusculas el email

    console.log("\nEn la lista de libros se han cambiado los titulos a mayusculas, y se han quitado los espacios iniciales y finales de los nombres de los autores: ", libros)
    console.log("\nSe han cambiado los emails a minusculas:", usuarios);

}
//normalizarDatos();


////////////////////////////////////////////////// 9. Interfaz de Usuario por Consola ///////////////////////////////////////////////////////////////////////

// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().



// b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

function menuPrincipal() {
    let opcion =
        prompt("\nIngrese la opcion que desea utilizar:\n \n1-Agregar Libro\n \n2-Buscar Libro\n \n3-Ordenar Libros\n \n4-Borrar Libro\n \n5-Registrar Usuario\n \n6-Mostrar lista de Usuarios\n \n7-Buscar Usuario\n \n8-Prestar Libro\n \n9-Devolver Libro\n \n10-Generar Reporte de libros\n \n11-Identificacion avanzada de libros\n \n12-Estadisticas de libros\n \n13-Manejo de Metodos de Strings: ");
//uso el prompt para q el usuario ingrese la ocpion que quiere usar
//el switch lo uso para q dependiendo la opcion elegida se ejecute determinada funcion y se corte la ejecucion al finalizar la misma.
//si la opcion elegida no esta en las propuestas, se termina la ejecucion con un msj de ingreso invalido.

    switch (opcion) {
        case "1":
            let titulo = prompt("Ingresa el titulo del libro: ");
            let autor = prompt("Ingresa el nombre del autor del libro: ");
            let anio = prompt("Ingrese el año de publicacion del libro: ");
            let genero = prompt("Ingrese el genero literario del libro: ");
            agregarLibro(titulo, autor, anio, genero)
            break;

        case "2":
            let criterioBusqueda = prompt("Ingresa el criterio con el que quieres buscar el libro(titulo, autor o anio): ");
            let valor = prompt("Ingresa el valor que corresponde al criterio ingresado del libro: ");
            buscarLibro(criterioBusqueda, valor)
            break;

        case "3":
            let criterioOrdenar = prompt("Ingresa el criterio con el que quieres ordenar los libros(titulo o anio): ");
            ordenarLibros(criterioOrdenar);
            break;

        case "4":
            let id = prompt("Ingresa el id del libro que quieres eliminar de la lista de libros: ");
            borrarLibro(id);
            break;

        case "5":
            let registroNombre = prompt("Ingresa el nombre del usuario que quieres registrar: ");
            let registroEmail = prompt("Ingresa el email del usuario que quieres registrar: ");
            registrarUsuario(registroNombre, registroEmail);
            break;

        case "6":
            console.log("La lista de usuarios actualizada es: ", mostrarTodosLosUsuarios());
            break;

        case "7":
            let emailBuscarUsuario = prompt("Ingresa el email del usuario que quieres encontrar(Ingresar en formato MAYUSCULA): ");
            buscarUsuario(emailBuscarUsuario);
            break;

        case "8":
            let idLibro = prompt("Ingresa el id del libro que quieres pedir prestado: ");
            let idUsuario = prompt("Ingresa el id del usuario que va a pedir prestado el libro: ");
            prestarLibro(idLibro, idUsuario);
            break;

        case "9":
            let idLibroDevolver = prompt("Ingresa el id del libro que quieres devolver: ");
            let idUsuarioDevolver = prompt("Ingresa el id del usuario que va a devolver el libro prestado: ");
            devolverLibro(idLibroDevolver, idUsuarioDevolver);
            break;

        case "10":
            generarReporteLibros();
            break;

        case "11":
            librosConPalabrasEnTitulo();
            break;

        case "12":
            calcularEstadisticas();
            break;

        case "13":
            normalizarDatos();
            break;
            
        default:
            console.log("La opcion ingresada es invalida.")
            break;
    }
}

menuPrincipal(libros);





