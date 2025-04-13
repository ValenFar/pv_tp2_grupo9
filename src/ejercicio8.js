//8.Declarar una función con nombre calcularMayor() y pasarle como
//parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los
//números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un
//alert también.
//Invocar la función y enviar los argumentos con diferentes números para probar.
///Ejercicio realizado por Maximo Valentin Farfan Antileo

// Declaracion de la funcion calcularMayor
function calcularMayor(numero1, numero2){
    if (numero1 > numero2) {
        window.alert("El numero mayor es: " + numero1);
    } else if (numero1 < numero2) {
        window.alert("El numero mayor es: " + numero2);
    } else {
        window.alert("Los numeros son iguales: " + numero1 + " y " + numero2);
    }
}


// se llama a la funcion calcularMayor

calcularMayor(222, 222); // Invocacion de la funcion con argumentos


