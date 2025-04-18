const paises = document.getElementById("paises");
const capitales = document.getElementById("capitales");

const mapa = {
  argentina: "buenosaires",
  brasil: "brasilia",
  mexico: "cdmx",
  colombia: "bogota",
  peru: "lima",
  chile: "santiago"
};

// 🔁 Creamos el reverso del mapa (capital -> país)
const capitalToPais = {};
for (let pais in mapa) {
  capitalToPais[mapa[pais]] = pais;
}

// Cuando se cambia el país
paises.addEventListener("change", () => {
  const paisSeleccionado = paises.value;
  const capitalCorrespondiente = mapa[paisSeleccionado];

  capitales.value = capitalCorrespondiente;

  console.log(`País: ${paisSeleccionado}, Capital: ${capitalCorrespondiente}`);
});

// Cuando se cambia la capital
capitales.addEventListener("change", () => {
  const capitalSeleccionada = capitales.value;
  const paisCorrespondiente = capitalToPais[capitalSeleccionada];

  paises.value = paisCorrespondiente;

  console.log(`Capital: ${capitalSeleccionada}, País: ${paisCorrespondiente}`);
});
