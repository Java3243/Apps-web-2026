// JavaScript personalizado - Practica 02 RF08
const editButtons = document.querySelectorAll(".edit-space-btn");
const editModal = new bootstrap.Modal(document.getElementById("editSpaceModal"));
const editForm = document.getElementById("edit-space-form");

const modalSpace = document.getElementById("modal-space");
const modalLocation = document.getElementById("modal-location");
const modalAvailability = document.getElementById("modal-availability");
const modalOpen = document.getElementById("modal-open");
const modalClose = document.getElementById("modal-close");

let currentCard = null;

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCard = button.closest(".space-card");
    modalSpace.value = button.dataset.space;
    modalLocation.value = button.dataset.location;
    modalAvailability.value = button.dataset.availability;
    modalOpen.value = button.dataset.open;
    modalClose.value = button.dataset.close;
    editModal.show();
  });
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const availability = Number(modalAvailability.value);
  const opening = modalOpen.value;
  const closing = modalClose.value;

  if (availability < 0) return;

  if (opening >= closing) {
    window.alert("La hora de apertura debe ser anterior a la hora de cierre.");
    return;
  }

  const availabilityElement = currentCard.querySelector("[data-availability]");
  const scheduleElement = currentCard.querySelector("[data-schedule]");
  const badge = currentCard.querySelector(".availability-badge, .bg-secondary");
  const button = currentCard.querySelector(".edit-space-btn");

  availabilityElement.textContent =
    `${availability} ${availability === 1 ? "espacio" : "espacios"}`;
  scheduleElement.textContent = `${opening} - ${closing}`;

  button.dataset.availability = availability;
  button.dataset.open = opening;
  button.dataset.close = closing;

  if (availability === 0) {
    badge.textContent = "Sin disponibilidad";
    badge.classList.remove("availability-badge");
    badge.classList.add("bg-secondary");
  } else {
    badge.textContent = "Disponible";
    badge.classList.remove("bg-secondary");
    badge.classList.add("availability-badge");
  }

  editModal.hide();

  const alertElement = document.getElementById("success-alert");
  alertElement.classList.remove("d-none");
  alertElement.classList.add("show");

  setTimeout(() => {
    alertElement.classList.remove("show");
    setTimeout(() => alertElement.classList.add("d-none"), 150);
  }, 3500);
});
