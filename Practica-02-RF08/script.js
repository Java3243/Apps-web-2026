const loginForm = document.getElementById("login-form");
const loginSection = document.getElementById("login-section");
const appSection = document.getElementById("app-section");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    loginSection.classList.add("d-none");
    appSection.classList.remove("d-none");
});

const reservationForm = document.getElementById("reservation-form");
const message = document.getElementById("message");
const reserveButton = document.getElementById("reserve-btn");
const availability = document.getElementById("availability");

reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    message.className = "alert alert-info mt-4";
    message.textContent =
        "Consulta realizada. El espacio seleccionado está disponible para la fecha y hora indicadas.";
});

reserveButton.addEventListener("click", function () {
    const current = parseInt(availability.textContent);

    if (current > 0) {
        availability.textContent = `${current - 1} espacios`;

        message.className = "alert alert-success mt-4";
        message.textContent = "La reserva se realizó correctamente.";
    } else {
        message.className = "alert alert-danger mt-4";
        message.textContent = "No hay espacios disponibles.";
    }
});
