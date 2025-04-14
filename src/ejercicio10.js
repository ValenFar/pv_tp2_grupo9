// 10.Solicitar al usuario que ingrese tres números enteros, luego mostrar como resultado el promedio de los tres. El promedio de tres números se calcula sumando los tres números y dividiendo entre 3.
// Por ejemplo, si el usuario ingresa 4, 8 y 12, el promedio sería (4 + 8 + 12) / 3 = 8.

const calcularPromedio = () => {
    const num1 = parseInt(prompt("Ingrese el primer número entero:"));
    const num2 = parseInt(prompt("Ingrese el segundo número entero:"));
    const num3 = parseInt(prompt("Ingrese el tercer número entero:"));
  
    const promedio = (num1 + num2 + num3) / 3;
    console.log("El promedio de los tres números es:", promedio.toFixed(2));
  };
  
  calcularPromedio();
  