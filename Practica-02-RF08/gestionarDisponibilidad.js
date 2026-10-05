let espacioSeleccionado = 1;


function gestionarEspacio(numero) {

    espacioSeleccionado = numero;

    document
        .getElementById("panelGestion")
        .classList.remove("oculto");

}


function guardarCambios() {

    let disponibilidad =
        document.getElementById("nuevaDisponibilidad").value;

    let inicio =
        document.getElementById("horaInicio").value;

    let fin =
        document.getElementById("horaFin").value;


    document.getElementById(
        "estado" + espacioSeleccionado
    ).textContent = disponibilidad;


    document.getElementById(
        "horario" + espacioSeleccionado
    ).textContent = inicio + " - " + fin;


    document
        .getElementById("panelGestion")
        .classList.add("oculto");


    alert("Cambios guardados correctamente.");
}
