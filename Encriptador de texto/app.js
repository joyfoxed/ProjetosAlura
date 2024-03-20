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

document.getElementById('3').addEventListener('click', function() {
    var text = document.getElementById('2');
    text.select();
    try{
        document.execCommand('copy');
        console.log("Texto copiado com sucesso. " + text);
        alert("Texto copiado com sucesso.");
    } catch (err) {
        console.log("Não foi possível copiar!");
    }
  })
