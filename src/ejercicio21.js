// Ejercicio 21: Crear un input de texto y un elemento HTML que muestre el texto ingresado en tiempo real.
const input = document.getElementById("entrada");
const salida = document.getElementById("salida");


input.addEventListener("input", function() {
    salida.textContent = input.value;
});
