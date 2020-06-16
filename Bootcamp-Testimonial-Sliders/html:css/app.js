const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

const slide1 = document.querySelector('slide1');
const slide2 = document.querySelector('slide2');

const totalSlides = [slide1, slide2];
let currentSlide = 0;

prevButton.addEventListener('click', () => {
    totalSlides[currentSlide].style.display = 'none';
    currentSlide--;
    if(currentSlide > 1){
        currentSlide = 0;
    } if(currentSlide = 0){
        currentSlide = 1;
    }
    totalSlides[currentSlide].style.display = 'block'
})

nextButton.addEventListener('click', () => {
    totalSlides[currentSlide].style.display = 'none';
    currentSlide++;
    if(currentSlide > 1){
        currentSlide = 0;
    } if(currentSlide = 0){
        currentSlide = 1;
    }
    totalSlides[currentSlide].style.display = 'block'
})