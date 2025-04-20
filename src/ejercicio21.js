const input = document.getElementById("entrada");
const salida = document.getElementById("salida");

input.addEventListener("input", function() {
    salida.textContent = input.value;
});
