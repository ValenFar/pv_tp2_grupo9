const boton = document.getElementById("cambiarColor");

boton.onclick = function() {
  const colores = ["#FFCDD2", "#C8E6C9", "#BBDEFB", "#FFF9C4", "#D1C4E9", "#FFE0B2"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
  console.log("Color de fondo cambiado a: " + colorAleatorio);
};
