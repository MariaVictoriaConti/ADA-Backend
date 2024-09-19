
let libros = [
    { id: 1, titulo: "El Psicoanalista", autor: " Jhon Katzenback ", anio: "1987", genero: "Suspenso", disponible: true },
    { id: 2, titulo: "Comer, Rezar, Amar", autor: " Jhon Katzenback ", anio: "1995", genero: "Drama", disponible: true },
    { id: 3, titulo: "El Padrino", autor: " Mario Puzo ", anio: "1969", genero: "Drama", disponible: true },
    { id: 4, titulo: "El Nombre del Viento", autor: " Patrick Rothfuss ", anio: "2007", genero: "Fantasia", disponible: false },
    { id: 5, titulo: "El Principito", autor: " Antonie de Saint ", anio: "1943", genero: "Fantasia", disponible: true },
    { id: 6, titulo: "El Código Da Vinci", autor: " Dan Brown ", anio: "2003", genero: "Misterio", disponible: true },
    { id: 7, titulo: "El Señor de los Anillos", autor: " J.R.R. Tolkien ", anio: "1954", genero: "Fantasia", disponible: true },
    { id: 8, titulo: "1984", autor: " George Orwell ", anio: "1949", genero: "Distopia", disponible: true },
    { id: 9, titulo: "Fahrenheit 451", autor: " Ray Bradbury ", anio: "1995", genero: "Distopia", disponible: true },
    { id: 10, titulo: "#Girlboss", autor: " Nasty Gal ", anio: "2015", genero: "Empoderamiento", disponible: true }
];

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
                                    console.log("El año repetido con mayor frecuencia es: ", ...aniosRepetidos);
                                    return;
                                } else if (aniosRepetidos.length <1) {
                                    console.log("No hay años repetidos en la lista.");
                                    return;
                                }

                            }
                        }
                    }

                }



            
