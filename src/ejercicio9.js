let nombre = prompt("Por favor, ingresa tu nombre", "");
if (nombre === null || nombre === "") { // Si el usuario no ingresa un nombre, se le asigna "Invitado"
    nombre = "Invitado";
}
alert("Hola " + nombre + ", bienvenido a Programación Visual!");