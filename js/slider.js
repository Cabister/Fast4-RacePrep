const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function mostrarSlide(i){

    slides.forEach(slide => {
        slide.classList.remove('ativo');
    });

    slides[i].classList.add('ativo');
}

next.addEventListener('click', () => {

    index++;

    if(index >= slides.length){
        index = 0;
    }

    mostrarSlide(index);
});

prev.addEventListener('click', () => {

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    mostrarSlide(index);
});