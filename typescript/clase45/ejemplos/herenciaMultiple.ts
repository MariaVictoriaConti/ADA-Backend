//SE USA IMPLEMENTS

//Interfaz - especie de contrato que debe cumplirse al llamar la clase
interface flying {
    fly():void; //metodo que implementamos para volar
};

//Otra interfaz
interface swimming {
swimg():void; //Metodo para nada
};

class Duck implements flying, swimming{
    fly(){
        console.log(`El pato esta volando.`);        
    }
    swimg() {
        console.log(`El pato esta nadando.`);
        
    }
}

const pato = new Duck()
pato.fly()
pato.swimg()