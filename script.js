let slidePosition = 0
let slides = document.getElementsByClassName("slide");
const totalSlides = slides.length

document.
    getElementById("carousel-button-prev")
    .addEventListener('click', function(){
    moveToPrevSlide();
});
document.
    getElementById("carousel-button-next")
    .addEventListener('click', function(){
    moveToNextSlide();
});

function updateSlidePosition(){
    for (let slide of slides) {
        slide.classList.remove("slide-visible")
        slide.classList.add("slide-hidden")
    }

    slides[slidePosition].classList.add("slide-visible")
};

function moveToPrevSlide() {
    if (slidePosition === 0){
        slidePosition = totalSlides -1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
};
function moveToNextSlide() {
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
};