// EJERCICIO 7: Buscar el nombre más largo
function nombreMasLargo() {
    let nombres = ["josejoseelcapo", "Juan", "Zerpa", "jorge", "Valentin", "Luis"];
    let nombreLargo = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i].length > nombreLargo.length) {
            nombreLargo = nombres[i];
        }
    }

    console.log("El nombre más largo es: " + nombreLargo);
}