const prompt = require("prompt-sync")({ sigint: true });

let valoracion = prompt("Que te parecio la pelicula que viste?(Opciones: Muy mala/Mala/Mediocre/Buena/Muy buena): ");

switch (valoracion) {
    case "Muy mala":
        console.log("OH! esperemos que la proxima este mejor!");
        break;
    case "Mala":
        console.log("Que pena!");
        break;
    case "Mediocre":
        console.log("Guau, veo que sos una persona exigente!");
        break;
    case "Buena":
        console.log("Buenisimo!Me alegro que te haya gustado!");
        break;
    case "Muy buena":
        console.log("Genial!! te recomendaremos mas peliculas al estilo de la que acabas de ver!");
        break;
    default:
        console.log("Ingresaste un valor invalido");
}