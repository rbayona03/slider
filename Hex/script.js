const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const container = document.querySelector('.images');

let counter = 0;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500, fill:'forwards'});
    if(counter === 2){
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url(images/bcg-${counter}.jpg)`;
}

function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500, fill:'forwards'});
    if(counter === 0){
        counter = 3;
    }
    counter--;
    container.style.backgroundImage = `url(images/bcg-${counter}.jpg)`;
}