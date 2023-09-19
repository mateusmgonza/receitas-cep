//função = tocar
function TocaSomToim (){
    //tocando Toim
    document.querySelector('#som_tecla_toim').play();
}

//constante = ListaDeSons - Teclas
const ListaDeSons = document.querySelectorAll('.tecla');

// variavel = contador = valor fixado 0
let Contador = 0;

// condição ou enquanto
while (Contador <9){
    //acessei a lista - peguei o elemento e pedi para tocar quando clicado
    ListaDeSons[Contador].onclick = TocaSomToim;
// mudando o valor da variável - somei 1
    Contador = Contador + 1;
//console conversando com a gente (achei fofo)
    console.log(Contador);
}