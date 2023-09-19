//função = tocar
function TocaSomToim (){
    //tocando Toim
    document.querySelector('#som_tecla_toim').play();
}

//constante = ListaDeSons - Teclas
const ListaDeSons = document.querySelectorAll('.tecla');

// variavel = contador = valor fixado 0
let Contador = 0;

while (Contador <9){
    //acessei a lista - peguei o elemento e pedi para tocar quando clicado
    ListaDeSons[5].onclick = TocaSomToim;
    Contador = Contador + 1;
    //console conversando
    console.log(Contador);
}