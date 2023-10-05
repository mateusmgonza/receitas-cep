//função = tocar
function TocaSomToim(idaudio) {
    //tocando Toim
    document.querySelector(idaudio).play();
}

//constante = ListaDeSons - Teclas
const ListaDeSons = document.querySelectorAll('.tecla');

// variavel = contador = valor fixado 0
for (let Contador = 0; Contador < ListaDeSons.length; Contador++) {
    const tecla = ListaDeSons[Contador];
    const classe = tecla.classList[1];

    const idSom = `#som_${classe}`;

    tecla.onclick = function () {
        TocaSomToim(idSom);
    }
    tecla.onkeydown = function (evento) {
        if (evento.Contador === 'Space' || evento.Contador === 'Enter') {
            tecla.classList.add('ativa');
            //console.log(evento.Contador === 'Space' || evento.Contador === 'Enter');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')

    }



}
