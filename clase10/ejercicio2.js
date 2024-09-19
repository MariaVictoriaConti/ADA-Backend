const prompt = require("prompt-sync")({ sigint: true });

let palabraUsuario = prompt("Ingrese la palabra (casa, perro, pelota, arbol o genio): ");

switch(palabraUsuario){
    case "casa":
        console.log("Su palabra en ingles es: house.");
        break;
    case "perro":
        console.log("Su palabra en ingles es: dog.");
        break;
        case "pelota":
            console.log("Su palabra en ingles es: ball.");
            break;
            case "arbol":
                console.log("Su palabra en ingles es: tree.");
                break;
                case "genio":
                    console.log("Su palabra en ingles es: amazing.");
                    break;
                    default:
                        console.log("La palabra ingresada es incorrecta.")
}

