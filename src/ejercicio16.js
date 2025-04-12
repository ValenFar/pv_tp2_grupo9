let sumarRango = (inicial,final) => {
    let suma = 0;
    if (inicial > final) {
        suma = 0;
        alert("El valor inicial debe ser menor o igual al valor final.\nValor inicial: " + inicial + "\nValor final: " + final);
    }else{
        for (let i = inicial; i <= final; i++) {
            suma += i;
        }
    }
    return suma;
}

let inicial = parseInt(prompt("Ingrese el valor inicial:")); // Cambiamos el valor ingresado por el usuario a un número entero con parseInt
// Si el valor ingresado no es un número, se le asigna 0 y se muestra un mensaje de error
if (isNaN(inicial)) {
    alert("El valor inicial no es un número.");
    inicial = 0;
}
let final = parseInt(prompt("Ingrese el valor final:"));// Cambiamos el valor ingresado por el usuario a un número entero con parseInt
// Si el valor ingresado no es un número, se le asigna 0 y se muestra un mensaje de error
if (isNaN(final)) {
    alert("El valor final no es un número.");
    final = 0;
}

console.log("RESULTADO: " + sumarRango(inicial,final));

