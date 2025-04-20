const input = document.getElementById("textInput");
const output = document.getElementById("output");

input.oninput = function() {
  const texto = input.value;
  output.innerHTML = texto;

  if (texto.length > 20) {
    output.classList.add("largo");
  } else {
    output.classList.remove("largo");
  }
};
