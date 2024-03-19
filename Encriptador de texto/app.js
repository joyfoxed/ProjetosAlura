// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function cript(texto) {
    let criptografia = [ ["e", "enter"], ["i", "imes"] , ["a","ai"],["o", "ober"],["u", "ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < criptografia.length; i++) {
        if (texto.includes(criptografia[i][0])) {
            texto = texto.replaceAll(criptografia[i][0], criptografia[i][1]) ;
        }
    }
    return texto;
}

function decript(texto) {
    let criptografia = [ ["e", "enter"], ["i", "imes"] , ["a","ai"],["o", "ober"],["u", "ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < criptografia.length; i++) {
        if (texto.includes(criptografia[i][1])) {
            texto = texto.replaceAll(criptografia[i][1], criptografia[i][0]) ;
        }
    }
    return texto;
}


function btn_cript(){
    const texto = cript(textArea.value);
    mensagem.value = texto;
    textArea.value = "";
    let fundo = document.getElementsByClassName('mensagem')[0];
    fundo.style.backgroundImage = 'none';
}

function btn_decript(){
    const texto = decript(textArea.value);
    mensagem.value = texto;
    textArea.value = "";
    let fundo = document.getElementsByClassName('mensagem')[0];
    fundo.style.backgroundImage = 'none';
}

function btn_copiar(id){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Texto copiado com sucesso. ' + r);
    } catch (err) {
        console.log('Não foi possível copiar!');
    }
}
