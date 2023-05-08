var jogadorNome
var jogadorEscolha = 0;
var computadorEscolha = 0;
var jogadorPontos = 0;
var computadorPontos = 0;
const botao = document.querySelector("#regras-jogo");
const modal = document.querySelector("dialog");
const botaoFecha = document.querySelector("#botao-fechar");

function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = jogadorNome
}

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//soma os pontos do jogador
function somarPontoJogador() {
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
    }

//soma os pontos do computador
function somarPontoComputador() {
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
    }



//calcular quem ganhou
// 0 = empate
// 1 = jogador
// 2 = computador
function calcular_escolha(jogador, computador) {
    if (jogador == 1 && computador == 1) {
        return 0;
    }
    else if (jogador == 1 && computador == 2) {
        return 2;
    }
    else if (jogador == 1 && computador == 3) {
        return 1;
    }
    else if (jogador == 1 && computador == 4) {
        return 1;
    }
    else if (jogador == 1 && computador == 5) {
        return 2;
    }
    else if (jogador == 2 && computador == 1) {
        return 1;
    }
    else if (jogador == 2 && computador == 2) {
        return 0;
    }
    else if (jogador == 2 && computador == 3) {
        return 2;
    }
    else if (jogador == 2 && computador == 4) {
        return 2;
    }
    else if (jogador == 2 && computador == 5) {
        return 1;
    }
    else if (jogador == 3 && computador == 1) {
        return 2;
    }
    else if (jogador == 3 && computador == 2) {
        return 1;
    }
    else if (jogador == 3 && computador == 3) {
        return 0;
    }
    else if (jogador == 3 && computador == 4) {
        return 1;
    }
    else if (jogador == 3 && computador == 5) {
        return 2;
    }
    else if (jogador == 4 && computador == 1) {
        return 2;
    }
    else if (jogador == 4 && computador == 2) {
        return 1;
    }
    else if (jogador == 4 && computador == 3) {
        return 2;
    }
    else if (jogador == 4 && computador == 4) {
        return 0;
    }
    else if (jogador == 4 && computador == 5) {
        return 1;
    }
    else if (jogador == 5 && computador == 1) {
        return 1;
    }
    else if (jogador == 5 && computador == 2) {
        return 2;
    }
    else if (jogador == 5 && computador == 3) {
        return 1;
    }
    else if (jogador == 5 && computador == 4) {
        return 2;
    }
    else if (jogador == 5 && computador == 5) {
        return 0;
    }
}

function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado')
}

function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado')
}

function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    computadorEscolha = sortear(1, 5);
    selecionar('computador', computadorEscolha);

    var ganhador = calcular_escolha(jogadorEscolha, computadorEscolha);

    if (ganhador == 0) {
        mensagem('empate');
    }
    else if (ganhador == 1) {
        mensagem (jogadorNome +' ganhou');
        somarPontoJogador();
    }
    else if (ganhador == 2) {
        mensagem ('computador ganhou');
        somarPontoComputador();
    }

    setTimeout(function() {
        deselecionar('jogador', jogadorEscolha),
        deselecionar('computador', computadorEscolha),

        mensagem(jogadorNome + ' você está preparado? Faça a sua escolha!');
        }, 1500);
}

document.getElementById('jogador-escolha-1').onclick = function() {jogar(1)};
document.getElementById('jogador-escolha-2').onclick = function() {jogar(2)};
document.getElementById('jogador-escolha-3').onclick = function() {jogar(3)};
document.getElementById('jogador-escolha-4').onclick = function() {jogar(4)};
document.getElementById('jogador-escolha-5').onclick = function() {jogar(5)};

jogadorNome = prompt('Qual é o seu nome?')

mensagem ('Bem-vindo ' + jogadorNome + ' está preparado? Faça a sua escolha!')
definirNomeJogador (jogadorNome);

botao.onclick = function() {
    modal.showModal()
}

botaoFecha.onclick = function() {
    modal.close()
}
