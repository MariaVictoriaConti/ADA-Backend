/*Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo
devuelva. Prueba la función con diferentes tipos de datos.*/
function comer<T> (comida: T){
    console.log(`Estoy comiendo ${comida}`);
    
}

comer<string>('pochoclo')
comer<number>(10)
comer<boolean>(true)
comer<undefined>(undefined)
