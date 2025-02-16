function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    // se elemento existe 
    if (elemento && elemento.localName === "audio") {
        elemento.play();
    } 
    else {
        console.log('Elemento não encontrado');
    }
    
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (evento) {
        tecla.classList.remove('ativa');
    }
}
