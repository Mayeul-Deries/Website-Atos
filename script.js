var slide = new Array("img/cloud3.jpeg", "img/fibre2.png", "img/environnement.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);