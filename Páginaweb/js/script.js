/* ===============================
   Blog de Música - Ritmos Urbanos
   Funcionalidades JS
   =============================== */

/* Mostrar / Ocultar comentarios */
function toggleComments(id) {
  const elem = document.getElementById(id);
  elem.style.display = elem.style.display === "block" ? "none" : "block";
}
function toggleComments(id) {
  const elem = document.getElementById(id);
  elem.style.display = elem.style.display === "block" ? "none" : "block";
}

function likeFunction(button) {
  button.style.fontWeight = "bold";
  button.innerHTML = "✓ Me gusta";
}

function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Mostrar la primera al inicio
showSlide(currentSlide);

// Cambiar cada 10 segundos
setInterval(nextSlide, 10000);
/* Botón de "Me gusta" */
function likeFunction(button) {
  button.style.fontWeight = "bold";
  button.innerHTML = "✓ Me gusta";
}

/* Abrir y cerrar modales */
function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

/* Subir al inicio suavemente */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===============================
   Extra: cerrar modal con tecla ESC
   =============================== */
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.style.display = "none");
  }
});

/* ===============================
   Extra: cerrar modal si clic fuera
   =============================== */
window.addEventListener("click", function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});