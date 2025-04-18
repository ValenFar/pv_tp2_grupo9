import mostrarSeleccion from './ejercicio23_module.js';



// Seleccionamos el elemento del formulario
const formulario = document.querySelector('form');

// Agregamos un evento change al formulario
formulario.addEventListener('change', (e) => {
    mostrarSeleccion(e); // Llamamos a la función mostrarSeleccion y le pasamos como parámetro el evento
});

