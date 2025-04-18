export default function mostrarSeleccion(e){
    // Seleccionamos todas las imagenes y las ocultamos en cada evento change
    const imgs = document.querySelectorAll('.img'); // Seleccionamos todas las imágenes
    imgs.forEach((img) => {
        img.style.display = 'none'; // Ocultamos todas las imágenes al inicio
    })

    // Seleccionamos el elemento de resultado (el <p> donde se mostrará el resultado)
    const resultado = document.getElementById('resultado');

    // Obtenemos los valores de algunas propiedades del elemento seleccionado
    const lenguajeSeleccionado = e.target.value; // e.target.value es el valor del botón de opción (radio) seleccionado. Seria el nombre del lenguaje de programación
    const idLenguajeSeleccionado = e.target.id; // e.target.id es el id del botón de opción (radio) seleccionado
    
    // Obtenemos el elemento img correspondiente al lenguaje seleccionado
    const imgLenguajeSeleccionado = document.getElementsByClassName(`_${idLenguajeSeleccionado}`); // Obtenemos el elemento img correspondiente al lenguaje seleccionado por clase
    imgLenguajeSeleccionado[0].style.display = 'block'; // Mostramos el elemento img correspondiente al lenguaje seleccionado
    

    // Actualizamos el contenido del elemento de resultado
    resultado.textContent = `Has seleccionado: ${lenguajeSeleccionado}`;

    // Muestro el valor seleccionado en la consola
    console.log(`Has seleccionado: ${lenguajeSeleccionado}`);
}