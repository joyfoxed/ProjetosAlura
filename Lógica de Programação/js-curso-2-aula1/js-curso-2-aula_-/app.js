let listaDeNumerosSorteados = [] ; // .push(*) adicionar ultimo campo .pop(*) remover ultimo campo
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); //script responsiveVOice
}


function exibirMenssagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e '+numeroMaximo);    
}

exibirMenssagemInicial();
console.log(numeroSecreto);

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); //pega campo de texto do HTML e coloca na variável chute
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}` ;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++ ;
        limparCampo();
    }
    /* console.log(chute == numeroSecreto);
    console.log('O botão foi clicado'); */
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio(numeroMaximo){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;
    if (quantidadeElementosLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(numeroMaximo);
    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }
}


function olaMundo(){ 
    console.log('Olá Mundo!');
}

function olaNome(nome) {
    console.log(`Olá, ${nome}`);
}

function dobroNumero(numero1){
    return parseInt(numero1*2);
}

function calcularMedia(numero1, numero2, numero3, numero4){
    return parseInt((numero1+numero2+numero3+numero4)/4);
}

function maiorNumero(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2 ;
}
 //alert(maiorNumero(11,10));

function multiplicaNumero(numero1){
    return parseInt(numero1*numero1);
}