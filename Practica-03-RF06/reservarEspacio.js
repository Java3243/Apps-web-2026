function reservar() {

    let fecha = document.getElementById("fecha").value;
    let horaEntrada = document.getElementById("horaEntrada").value;
    let horaSalida = document.getElementById("horaSalida").value;

    
    if (fecha === "" || horaEntrada === "" || horaSalida === "") {

        alert("Por favor completa todos los campos.");

        return;
    }


    
    let entrada = new Date("1970-01-01T" + horaEntrada);
    let salida = new Date("1970-01-01T" + horaSalida);


   
    let diferencia = (salida - entrada) / 3600000;


   
    if (diferencia <= 0) {

        alert("La hora de salida debe ser mayor que la hora de entrada.");

        return;
    }


   
    let precio = diferencia * 20;


    
    document.getElementById("total").innerText =
        "$" + precio.toFixed(0) + " MXN";


    
    let disponibilidad =
        document.getElementById("disponibilidad");

    let espacios = parseInt(disponibilidad.innerText);


    
    if (espacios <= 0) {

        alert("No hay espacios disponibles.");

        return;
    }


   
    espacios--;

    disponibilidad.innerText = espacios;


   
    alert("¡Reserva realizada correctamente!");


    
    let boton = document.querySelector(".reservar");

    boton.innerText = "Reservado";
    boton.disabled = true;
}