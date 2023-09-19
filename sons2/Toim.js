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
    ListaDeSons[Contador].onclick = function (){
    tocar('#som_tecla_toim');
    }
    const classe = ListaDeSons[Contador].classList[1];
    console.log(classe);
    //acessei a lista - peguei o elemento e pedi para tocar quando clicado
    Contador = Contador + 1;
    console.log(Contador);
    // mudando o valor da variável - somei 1 
}