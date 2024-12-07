// Sección 1
let currentIndex1 = 0;

function showSlide1(index) {
    const slides = document.querySelectorAll('#carousel1 .carousel-item');
    if (index >= slides.length) currentIndex1 = 0;
    if (index < 0) currentIndex1 = slides.length - 1;

    const newTransform = -currentIndex1 * 100;
    document.querySelector('#carousel1 .carousel-inner').style.transform = `translateX(${newTransform}%)`;
}

function nextSlide1() {
    currentIndex1 += 1;
    showSlide1(currentIndex1);
}

function prevSlide1() {
    currentIndex1 -= 1;
    showSlide1(currentIndex1);
}

// Sección 2
let currentIndex2 = 0;

function showSlide2(index) {
    const slides = document.querySelectorAll('#carousel2 .carousel-item');
    if (index >= slides.length) currentIndex2 = 0;
    if (index < 0) currentIndex2 = slides.length - 1;

    const newTransform = -currentIndex2 * 100;
    document.querySelector('#carousel2 .carousel-inner').style.transform = `translateX(${newTransform}%)`;
}

function nextSlide2() {
    currentIndex2 += 1;
    showSlide2(currentIndex2);
}

function prevSlide2() {
    currentIndex2 -= 1;
    showSlide2(currentIndex2);
}

// Sección 3
let currentIndex3 = 0;

function showSlide3(index) {
    const slides = document.querySelectorAll('#carousel3 .carousel-item');
    if (index >= slides.length) currentIndex3 = 0;
    if (index < 0) currentIndex3 = slides.length - 1;

    const newTransform = -currentIndex3 * 100;
    document.querySelector('#carousel3 .carousel-inner').style.transform = `translateX(${newTransform}%)`;
}

function nextSlide3() {
    currentIndex3 += 1;
    showSlide3(currentIndex3);
}

function prevSlide3() {
    currentIndex3 -= 1;
    showSlide3(currentIndex3);
}

// Inicializar los carruseles
showSlide1(currentIndex1);
showSlide2(currentIndex2);
showSlide3(currentIndex3);