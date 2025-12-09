// LISTA DE IMAGENS (adicione mais se quiser)
const imagens = [
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/04.png",
    "images/05.png",
    "images/06.png",
    "images/07.png",
    "images/08.png",
    "images/09.png",
    "images/10.png",
    "images/11.png",
    "images/12.png",
    "images/13.png",
    "images/14.png",
    "images/15.png",
    "images/16.png"
];

let index = 0;
const slide = document.getElementById("slide");

// Mostra a primeira imagem
slide.src = imagens[index];

// Troca a imagem a cada 1 segundo
setInterval(() => {
    index = (index + 1) % imagens.length;
    slide.src = imagens[index];
}, 750);