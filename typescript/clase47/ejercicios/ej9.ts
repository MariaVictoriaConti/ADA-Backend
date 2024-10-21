/*9. Ejercicio de Playlist
Diseña una clase Playlist que contenga propiedades privadas para nombre y
canciones (un array de títulos de canciones). Implementa métodos para agregar
canciones, eliminar canciones y listar todas las canciones en la playlist.
Asegúrate de que se imprima un mensaje si se intenta agregar una canción
vacía o eliminar una canción que no existe.
*/


class Playlist {
    private _nombre:string;
    private _canciones!: string[]; 

    constructor(nombre:string){
this._nombre = nombre;
this._canciones! = [];
    }
public get canciones(): string[]{
    console.log(`La lista de canciones es: `);    
    return this._canciones;
}

public agregarCanciones(cancion:string):void{
    if(typeof cancion === "string"){
        this._canciones.push(cancion)
        console.log(`Se agrego la cancion correctamene.`);
    }else{
        console.log("Cancion no valida.");        
    }
}

//FALTA HACER ELIMINAR CANCION DE LA LISTA
}

const miPlaylist = new Playlist("Mis Favoritas");
miPlaylist.agregarCanciones("Asereje");
console.log(miPlaylist.canciones);
