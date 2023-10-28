const imgs = document.getElementById("img");
const imgList = document.querySelectorAll("#img img");
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");

let idx = 0;

function carrossel() {
    idx++;

    if (idx >= imgList.length) {
        idx = 0;
    }

    atualizarCarrossel();
}

function retroceder() {
    idx--;

    if (idx < 0) {
        idx = imgList.length - 1;
    }

    atualizarCarrossel();
}

function atualizarCarrossel() {
    const translateXValue = -idx * 500;
    imgs.style.transform = `translateX(${translateXValue}px)`;
}

setaEsquerda.addEventListener("click", retroceder);
setaDireita.addEventListener("click", carrossel);