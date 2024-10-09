enum Clima {
    Soleado = "Soleado",
    Nublado = "Nublado", 
    Lluvioso = "Lluvioso",
    Tormentoso = "Tormentoso",
}

let arrayClima: Clima[] = [Clima.Lluvioso, Clima.Nublado, Clima.Soleado, Clima.Tormentoso];
arrayClima.forEach(clima => console.log(clima));
