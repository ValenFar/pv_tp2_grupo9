// EJERCICIO 12: Saber si es PAR o IMPAR
function verificarParidad() {
    let numero = prompt("Ingrese un número:");
    numero = parseInt(numero);

    if (!isNaN(numero)) { 
    //isNaN sirve para verificar si lo que estamos poniendo es un numero 
    //el if para comparar con lo que el usuario agrega para que solo entren numeros
        if (numero % 2 === 0) {
        //hace la operacion para saber so los numeros son pares o impares
            console.log("El número " + numero + " es PAR.");
        } else {
            console.log("El número " + numero + " es IMPAR.");
        }
    } else {
        console.log("Eso no es un número válido.");
    }
}