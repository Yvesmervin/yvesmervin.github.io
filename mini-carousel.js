// Function to update slides and dots within the clicked carousel
function updateImageDisplay(carousel, slideIndex) {
  const slides = carousel.querySelectorAll(".mini-product-image");
  const dots = carousel.querySelectorAll(".mini-product-carousel-dots");

  // Wrap around if index is out of bounds
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and remove active class
  slides.forEach(slide => {
    slide.style.display = "none";
    slide.classList.remove("active");
  });

  // Deactivate all dots
  dots.forEach(dot => dot.classList.remove("active"));

  // Show selected slide and activate its dot
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  // Store the current index on the carousel for later use
  carousel.setAttribute("data-slide-index", slideIndex);
}

// Advance slides by n in the specific carousel
function plusSlides(n, el) {
  const carousel = el.closest(".mini-product-carousel-block");
  let currentIndex = parseInt(carousel.getAttribute("data-slide-index")) || 1;
  updateImageDisplay(carousel, currentIndex + n);
}

// Jump to specific slide in the specific carousel
function currentSlide(n, el) {
  const carousel = el.closest(".mini-product-carousel-block");
  updateImageDisplay(carousel, n);
}

// Initialize all carousels on page load
document.addEventListener("DOMContentLoaded", function () {
  const allCarousels = document.querySelectorAll(".mini-product-carousel-block");
  allCarousels.forEach(carousel => {
    carousel.setAttribute("data-slide-index", 1);
    updateImageDisplay(carousel, 1);
  });
});
