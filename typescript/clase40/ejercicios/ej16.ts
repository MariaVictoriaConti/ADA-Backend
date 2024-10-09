enum CategoriaProducto {
    Electronica,
    Ropa,
    Alimentos,
    Muebles,
}

function productos(categoria:CategoriaProducto):string{
if(categoria === CategoriaProducto.Electronica){
    return `Productos: microhondas, Heladera, Lavarropas`
}else if( categoria === CategoriaProducto.Ropa){
    return `Productos: Remera, Pantalon, Zapatos`
}else if(categoria===CategoriaProducto.Alimentos){
    return `Productos:Arroz, pochoclos`
}else{
    return `Productos:mesa repisa`
}
} 

console.log(productos(CategoriaProducto.Alimentos));
