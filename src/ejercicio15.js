// 5. Escribir una función llamada retornar mes, que reciba un número entero y si corresponde a un mes del año devolver el nombre del mes, si no se cumple entonces mostrar un mensaje que no es un mes.

const retornarMes = () => {
    const numero = parseInt(prompt("Ingrese un número del 1 al 12:"));
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    if (numero >= 1 && numero <= 12) {
      console.log("El mes correspondiente es:", meses[numero - 1]);
    } else {
      console.log("Ese número no corresponde a un mes del año.");
    }
  };
  
  retornarMes();
  