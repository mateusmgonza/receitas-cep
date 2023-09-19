//função = tocar
function TocaSomToim (idaudio){
    //tocando Toim
    document.querySelector(idaudio).play();
}

//constante = ListaDeSons - Teclas
const ListaDeSons = document.querySelectorAll('.tecla');

// variavel = contador = valor fixado 0
let Contador = 0;

// condição ou enquanto
while (Contador <9){
    ListaDeSons[Contador].onclick = function (){
    TocaSomToim('#som_tecla_toim');
    }
    const classe = ListaDeSons[Contador].classList[1];
    console.log(classe);
    //acessei a lista - peguei o elemento e pedi para tocar quando clicado
    Contador = Contador + 1;
    console.log(Contador);
    // mudando o valor da variável - somei 1 
}