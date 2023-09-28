//função = tocar
function TocaSomToim(idaudio) {
    //tocando Toim
    document.querySelector(idaudio).play();
}

//constante = ListaDeSons - Teclas
const ListaDeSons = document.querySelectorAll('.tecla');

// variavel = contador = valor fixado 0
let Contador = 0;

while (Contador < ListaDeSons.length) {
    const tecla = ListaDeSons[Contador];
    const classe = tecla.classList[1];
    const idSom = ;
    tecla.onclick = function () {
        TocaSomToim(idSom);
    }
    Contador = Contador + 1;
    tecla.onkeydown = function (evento){
        tecla.classList.add('ativa');
        console.log(evento.Contador === 'Space' || evento.Contador === 'Enter');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')

    }
    


}
