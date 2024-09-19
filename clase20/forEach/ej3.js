/*3) Tenemos un array en una variable playlist con una lista de canciones de
un disco. Recorrer la lista con la función forEach y mostrar la posición y el
nombre de la canción utilizando un console.log()*/

const playlist = [
    "Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Rigth", "Run", "Y-Shirt"
];

let recorrer = playlist.forEach((cancion, index) => console.log("Posicion N° " + index + ": " + cancion));
