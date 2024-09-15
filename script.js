// Jumbotron
let currentSlide = 0;
const slides = document.querySelectorAll(".image");
const totalSlides = slides.length;

// Fungsi untuk menggeser slide
function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;

  // Geser slider-container ke kiri/kanan
  const slideWidth = slides[0].clientWidth;
  const newTransformValue = -currentSlide * slideWidth;

  document.querySelector(
    ".slider-container"
  ).style.transform = `translateX(${newTransformValue}px)`;

  // Update tombol prev dan next
  updateButtons();
}

// Memperbarui visibilitas tombol prev dan next
function updateButtons() {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  // Sembunyikan tombol prev slide pertama
  prevButton.style.display = currentSlide === 0 ? "none" : "block";

  // Sembunyikan tombol next slide terakhir
  nextButton.style.display =
    currentSlide === totalSlides - 1 ? "none" : "block";
}

// UpdateButtons
updateButtons();

// summit
document.addEventListener("DOMContentLoaded", function () {
  const welcomeElement = document.querySelector(".welcome");

  function activateWelcome() {
    welcomeElement.classList.add("active");
  }

  function deactivateWelcome() {
    welcomeElement.classList.remove("active");
  }

  setTimeout(activateWelcome, 1000);

  // Event listener jika ada tombol untuk mengaktifkan
  document
    .querySelector(".show-welcome")
    .addEventListener("click", activateWelcome);
});
