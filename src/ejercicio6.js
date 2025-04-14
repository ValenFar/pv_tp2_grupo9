// Creo un array con 8 edades distintas
let edades = [18, 21, 25, 30, 19, 23, 27, 22];

// Inicializar suma
let suma = 0;

// Recorro  el array para sumar las edades
for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
}

// Calcular el promedio
let promedio = suma / edades.length;

// resultado
console.log("Edades:", edades);
console.log("Promedio de edades:", promedio);
