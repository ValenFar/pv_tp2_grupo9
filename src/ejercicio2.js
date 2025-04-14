let numerosPares = []; // Arreglo para almacenar los números pares
let contador = 0;

for (let i = 0; i < 10; i++) {
    numerosPares.push(contador); // Agregar el número par al arreglo
    // Incrementar el contador de dos en dos para obtener el siguiente número par
    contador += 2;
}

console.log(numerosPares);