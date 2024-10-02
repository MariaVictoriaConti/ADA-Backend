//Definicion de una interfaz 'estudiante'

interface Estudiante{
    nombre:string; //propiedad nombre del tipo string
    edad:number;
    materiaFavorita: string;
    promedio:number;

    saludar: () => void //Metodo saluda que no devuelve valor
    obtenerDetalles: () => string //Metodo que devuelve una cadena de tecto con detalles
}


//Creacion de un objeto que cumple con la interfaz 'Estudiante'

const estudiante: Estudiante = {
    nombre: "Mariana",  //Asignacion del atributo nombre
    edad: 21,
    materiaFavorita: "Lengua",
    promedio: 9.5,

    //Implementacion del metodo 'saludar'
    saludar: function() {
        console.log(`Hola soy ${estudiante.nombre}, tengo ${this.edad} anios, y mi materia favorita es ${estudiante.materiaFavorita} y mi promedio es de ${estudiante.promedio}`);
    },

    //Implementacion del metodo 'obtenerDetalles'
    obtenerDetalles: function() {
        return `Nombre: ${estudiante.nombre}, edad: ${estudiante.edad}, materia favorita: ${estudiante.materiaFavorita}, promedio ${estudiante.promedio}`
    }
}

estudiante.saludar();

const detalles = estudiante.obtenerDetalles();
console.log(detalles);


