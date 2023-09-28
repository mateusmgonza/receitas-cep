//função = tocar
function TocaSomToim (idaudio){
    //tocando Toim
    document.querySelector(idaudio).play();
}

//constante = ListaDeSons - Teclas
const ListaDeSons = document.querySelectorAll('.tecla');

// variavel = contador = valor fixado 0
let Contador = 0;
while (contador < lista.lentgh){
    const tecla = lista[Contador];
    const classe = tecla.classList[1];
    tecla.onclick = function (){
        tocar(idSom);
    }

}
// condição ou enquanto
while (Contador <9){

    ListaDeSons[Contador].onclick = function (){
    TocaSomToim('#som_tecla_toim');
    }


const classe = ListaDeSons[Contador].classList[1];
console.log(classe);
    //acessei a lista - peguei o elemento e pedi para tocar quando clicado
const idSom = `#som_${classe}`;
console.log(idSom);


Contador = Contador + 1;
console.log(Contador);
    // mudando o valor da variável - somei 1 

    tecla.classList.add ('ativa');
    tecla.classList.remove ('ativa')

}