let arrayMultidimensional: [string, number[]][] = [
    ["Maria", [5, 6, 7]],
    ["Pedro", [9, 8, 4]],
    ["Luis", [4, 7, 6]],
]

console.log(`Nombre: ${arrayMultidimensional[1][0]}, Notas: ${arrayMultidimensional[1][1]}`);
arrayMultidimensional.forEach(estudiante => {
    let promedio = estudiante[1].reduce((total, num) => total + num, 0) / estudiante[1].length;
    console.log(`El promedio del estudiante ${estudiante[0]} es ${promedio}`);
});