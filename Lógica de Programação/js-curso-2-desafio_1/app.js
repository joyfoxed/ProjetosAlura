let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirConsole(){
    console.log('O botão foi clicado')
}

function exibirAlerta(){
    alert('Eu amo JS');
}

function exibirPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert('Estive em '+cidade+' e lembrei de você');
}

function exibirSoma(){
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    let resultado = (numero1 + numero2);
    alert(`O resultado da soma é ${resultado} `);
    
}