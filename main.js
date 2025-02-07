const input = document.getElementById("inputcontra");
const inputUser = document.getElementById("inputuser");
const parrafo = document.getElementById("parrafo");
const enButton = document.getElementById("inputButton"); //Registra en variable el Botón Login
enButton.disabled = true; //POr defecto a abrir la página el boton de Login esta deshabilitado

function mostrar() {
    const inputValue = document.getElementById("inputcontra");
    const long = inputValue.value.length; // Se modifican las variables de la funcion para que
    const user = inputUser.value.length; // detecte la longitud de los input y los devuelva en número

    console.log(long);
    if (long <= 8) {
        parrafo.innerHTML = "La contraseña no es segura";
        parrafo.setAttribute("class", "rojo");
        enButton.style.backgroundColor = "grey";
        enButton.disabled = true;
    } else if (long > 8) {
        parrafo.innerHTML = "La contraseña es segura";
        parrafo.setAttribute("class", "verde");
        if (user == 0) {
            //Se añade una codición para detectar si hay un usuario intrucido en el ID HTML 'inputuser'
            // En caso de no haber un usuario introducido el botón se deshabilita (o se mantiene deshabilitado)
            enButton.style.backgroundColor = "grey";
            enButton.disabled = true;
        } else {
            enButton.style.backgroundColor = "aqua";
            enButton.disabled = false;
        }
    }
}
inputUser.addEventListener("keyup", mostrar);
input.addEventListener("keyup", mostrar);
