
var slidePosition = 1;
SlideShow(slidePosition);

// Add event listeners for touch
var carousel = document.getElementById('product-image-block'); // Change to your actual carousel id
carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchmove', handleTouchMove, false);

// Handle touch start
var xStart = 0;
function handleTouchStart(event) {
  xStart = event.touches[0].clientX;
}

// Handle touch move
function handleTouchMove(event) {
  if (!xStart) return;
  var xEnd = event.touches[0].clientX;
  var deltaX = xStart - xEnd;

  if (deltaX > 50) {
    plusSlides(1);  // Swipe left
  } else if (deltaX < -50) {
    plusSlides(-1);  // Swipe right
  }

  xStart = 0;
}

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

// images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("product-image");
  var circles = document.getElementsByClassName("product-carousel-dots");

  // Remove 'active' class from all slides and dots
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    circles[i].classList.remove('enable');
  }

  // Wrap slidePosition around if it goes beyond the slide count
  if (n > slides.length) {
    slidePosition = 1;
  } else if (n < 1) {
    slidePosition = slides.length;
  } else {
    slidePosition = n;
  }

  // Display the current slide with animation
  slides[slidePosition - 1].classList.add('active');
  circles[slidePosition - 1].classList.add('enable');
}
