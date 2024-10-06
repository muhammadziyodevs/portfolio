let currentSlide = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

function moveSlide(n) {
    showSlides(currentSlide += n);
}

// Initial call to display the first slide
showSlides(currentSlide);
