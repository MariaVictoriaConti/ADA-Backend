let vehiculo = "coche";
let litrosConsumidos = 3;
let valorLitro = 0;
let total = 0;
console.log("El vehiculo ingresado es: " + vehiculo + " y los litros consumidos son: " + litrosConsumidos + ".");

switch (vehiculo) {
    case "coche":
        valorLitro = 86;
        litrosConsumidos >= 0 && litrosConsumidos <= 25 ? total = ((valorLitro * litrosConsumidos) + 50) : total = ((valorLitro * litrosConsumidos) + 25);
        console.log("\nEl total a abonar por los " + litrosConsumidos + " litros consumidos es de: $" + total + ".");
        break;
    case "moto":
        valorLitro = 70;
        litrosConsumidos >= 0 && litrosConsumidos <= 25 ? total = ((valorLitro * litrosConsumidos) + 50) : total = ((valorLitro * litrosConsumidos) + 25);
        console.log("\nEl total a abonar por los " + litrosConsumidos + " litros consumidos es de: $" + total + ".");
        break;
    case "autobus":
        valorLitro = 55;
        litrosConsumidos >= 0 && litrosConsumidos <= 25 ? total = ((valorLitro * litrosConsumidos) + 50) : total = ((valorLitro * litrosConsumidos) + 25);
        console.log("\nEl total a abonar por los " + litrosConsumidos + " litros consumidos es de: $" + total + ".");
        break;
}

