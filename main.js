const input = document.getElementById("inputcontra");
const parrafo = document.getElementById("parrafo");

function mostrar() {
    const inputValue = document.getElementById("inputcontra").value;
    const long = inputValue.length;

    console.log(inputValue);
    if (long <= 8) {
        parrafo.innerHTML = "La contraseña es segura";
        parrafo.setAttribute("class", "verde");
    } else if (long > 8) {
        parrafo.innerHTML = "La contraseña es segura";
        parrafo.setAttribute("class", "rojo");
    } else if (long > 10) {
        parrafo.innerHTML = "La contraseña es segura";
        parrafo.setAttribute("class", "azul");
    }
}

input.addEventListener("keyup", mostrar);
