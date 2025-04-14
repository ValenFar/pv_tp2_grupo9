// Función que centa la cantidad de letras "a" en un string (mayúsculas o minúsculas)
export function contarLetraA(texto) {
    let contador = 0; //inicio el contador 
    for (let letra of texto.toLowerCase()) {
        if (letra === 'a') {
            contador++;
        }
    }
    return contador;
}

// evento y manipulación del DOM
document.addEventListener("DOMContentLoaded", () => {
    const inputTexto = document.getElementById("texto");
    const botonContar = document.getElementById("contar");
    const resultado = document.getElementById("resultado");

    botonContar.addEventListener("click", () => {
        const textoIngresado = inputTexto.value;
        const cantidad = contarLetraA(textoIngresado);
        resultado.textContent = `La letra "a" aparece ${cantidad} veces.`;
    });
});
