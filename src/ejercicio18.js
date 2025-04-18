// Función flecha para cambiar el texto del párrafo
const cambiarTexto = () => {
    const parrafo = document.getElementById("parrafo");
    parrafo.textContent = "¡Nuevo texto del parrafo!";  //Nuevo texto que se mostrará luego de hacer click en el botón
    parrafo.style.color = "blue";  // Cambia el color del texto a azul  
};

// Agrega el listener al botón
const boton = document.getElementById("botonCambiar");

boton.addEventListener("click", () => {
    cambiarTexto();
});
// Final del código