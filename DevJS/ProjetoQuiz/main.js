function vperg1(botaoClicado, opcaoSelecionada){
    if(opcaoSelecionada == "c1"){
        var respCerta = document.getElementById('c1');
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp1').innerHTML = "Parabéns, você acertou!!!🎉🎉"
    }
    else{
        var respCerta = document.getElementById('c1');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp1').innerHTML = "Resposta errada, que pena!! Melhore."
    }
}

function vperg2(botaoClicado, opcaoSelecionada){
    if(opcaoSelecionada == "b2"){
        var respCerta = document.getElementById('b2');
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp2').innerHTML = "Parabéns, você acertou!!!🎉🎉"
    }
    else{
        var respCerta = document.getElementById('b2');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp2').innerHTML = "Resposta errada, que pena!! Melhore."
    }
}

function vperg3(botaoClicado, opcaoSelecionada){
    if(opcaoSelecionada == "a3"){
        var respCerta = document.getElementById('a3');
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp3').innerHTML = "Parabéns, você acertou!!!🎉🎉"
    }
    else{
        var respCerta = document.getElementById('a3');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp3').innerHTML = "Resposta errada, que pena!! Melhore."
    }
}


function reiniciar(){
// Limpa os textos de resposta
document.getElementById('resp1').innerHTML = "";
document.getElementById('resp2').innerHTML = "";
document.getElementById('resp3').innerHTML = "";

// Volta todos os botões à cor original
const botoes = document.querySelectorAll("button");
botoes.forEach(botao => {
    botao.style.backgroundColor = "rgb(0, 139, 139)";
});
}

