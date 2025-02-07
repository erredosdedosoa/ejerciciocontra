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
    }
}
input.addEventListener("keyup", mostrar);
