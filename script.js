
const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;

    const respuesta = document.getElementById("respuesta");

    respuesta.textContent =
        "¡Gracias " + nombre +
        "! Tu solicitud de " + servicio +
        " ha sido registrada en esta demostración.";

    respuesta.style.color = "green";

    formulario.reset();

});
