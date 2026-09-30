function mostrarFormulario() {

    document
        .getElementById("formulario")
        .classList.remove("oculto");

}


function actualizarEspacio() {

    let disponibilidad =
        document.getElementById("nuevaDisponibilidad").value;

    let inicio =
        document.getElementById("horaInicio").value;

    let fin =
        document.getElementById("horaFin").value;


    document.getElementById("disponibilidad").textContent =
        disponibilidad;


    document.getElementById("horario").textContent =
        inicio + " - " + fin;


    alert("Espacio actualizado correctamente.");

}
