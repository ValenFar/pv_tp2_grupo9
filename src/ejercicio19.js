//Crear una página que muestre 3 campos (input): Nombre, apellido, libreta universitaria.
//Crear un script para obtener cada uno de los elementos input creados, mediante el método querySelector(), manipular los elementos para obtener 
// su valor con la propiedad JS value y mostrar los datos con un alert de la siguiente forma:
//“Los datos ingresados son: Nombre: María    Apellido: Diaz   Libreta Universitaria: APU999999
function mostrarDatos() {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const libreta = document.querySelector('#libreta').value;
  
    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
  }
