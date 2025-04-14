// EJERCICIO 11: Calcular consumo de combustible
function calcularConsumo() {
    let km = prompt("Ingrese los `kilómetros recorridos:");
    let litros = prompt("Ingrese los litros de combustible consumidos:");

    // Convierte los valores ingresados (que son texto) a números decimales
    km = parseFloat(km);
    litros = parseFloat(litros);

    // Verifica que ambos números sean mayores a 0
    if (km > 0 && litros > 0) {
        let consumo = litros / km;

        // Muestra el resultado con 2 decimales
        console.log("El consumo es: " + consumo.toFixed(2) + " litros por kilómetro.");
    } else {
        console.log("Datos inválidos. Escriba números correctos.");
    }
}