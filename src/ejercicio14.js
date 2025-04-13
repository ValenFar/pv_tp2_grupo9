//14. Escribir una función llamada duplicar que reciba un arreglo de números y retorne un
//    nuevo arreglo donde cada número esté multiplicado por dos (2).
//    Ejercicio realizado por Maximo Valentin Farfan Antileo


const Duplicar = (arreglo) => {
    let numerosDuplicados = arreglo.map(n => n * 2); // Multiplica cada elemento del arreglo por 2
    return numerosDuplicados; // Retorna el nuevo arreglo
}

let numeros = [1, 3, 5, 7, 9]; // Declaracion de los Numeros

console.log(numeros.length); // Imprime la longitud del arreglo original
console.log(Duplicar(numeros)); // Imprime el arreglo duplicado
console.log(Duplicar(numeros).length); // Imprime la longitud del arreglo duplicado