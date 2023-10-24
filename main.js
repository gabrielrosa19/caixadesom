//declaração/criando função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}

//chamado/invocando a fumção tocaSomPom pelo click do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//referencia constante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamndo função tocaSomPom pela item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSomPom;

let contador=0;
while(contador<9){
    listaDeTeclas[contador].onclick=tocaSomPom;
    console.log(contador)
}
