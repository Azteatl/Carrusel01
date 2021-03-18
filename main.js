const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

//---Función para avanzar de imagen:
function NextImage(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

//---Función para regresar de imagen:
function PreviousImage(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

//--Para los botones:
btnright.addEventListener('click', function(){
    NextImage();
}); 
btnleft.addEventListener('click', function(){
    PreviousImage();
}); 

//---Para Slider Automático:
setInterval(function(){
    NextImage();
}, 3000);