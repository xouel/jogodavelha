let tabuleiro
let board
let aviso
let jogador
let partidaFinalizada

function inicia(){
    tabuleiro = []
    board = document.getElementById('board')
    aviso = document.getElementById('aviso')
    jogador = 1
    partidaFinalizada = false

    for(let i = 0; i < 3; i++){
        tabuleiro[i] = []
        for(let j = 0; j < 3; j++){
            tabuleiro[i][j] = 0
        }
    }

    aviso.innerHTML = 'Vez do jogador ' + numeroJogador()
    exibir()
}

function exibir(){
    let tabela = '<table>'

    for(let i = 0; i < 3; i++){
        tabela += '<tr>'

        for(let j = 0; j < 3; j++){
            let marcador = ''
            let classe = partidaFinalizada ? 'bloqueado' : ''

            switch(tabuleiro[i][j]){
                case -1:
                    marcador = 'X'
                    classe = 'ocupado jogador-2'
                    break
                case 1:
                    marcador = 'O'
                    classe = 'ocupado jogador-1'
                    break
            }

            tabela += '<td class="' + classe + '" onclick="jogar(' + i + ', ' + j + ')">' + marcador + '</td>'
        }

        tabela += '</tr>'
    }

    tabela += '</table>'
    board.innerHTML = tabela
}

function jogar(linha, coluna){
    if(partidaFinalizada){
        aviso.innerHTML = 'A partida acabou. Clique em reiniciar para jogar de novo.'
        return
    }

    if(tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1
        exibir()

        if(checar()){
            return
        }

        jogador++
        aviso.innerHTML = 'Vez do jogador ' + numeroJogador()
    } else {
        aviso.innerHTML = 'Esse campo ja foi marcado.'
    }
}

function checar(){
    for(let i = 0; i < 3; i++){
        let soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]

        if(soma == 3 || soma == -3){
            venceu()
            return true
        }
    }

    for(let i = 0; i < 3; i++){
        let soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i]

        if(soma == 3 || soma == -3){
            venceu()
            return true
        }
    }

    let soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]
    if(soma == 3 || soma == -3){
        venceu()
        return true
    }

    soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0]
    if(soma == 3 || soma == -3){
        venceu()
        return true
    }

    if(deuEmpate()){
        aviso.innerHTML = 'Deu velha!'
        partidaFinalizada = true
        exibir()
        return true
    }

    return false
}

function venceu(){
    aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
    partidaFinalizada = true
    exibir()
}

function numeroJogador(){
    return jogador % 2 == 1 ? 1 : 2
}

function deuEmpate(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(tabuleiro[i][j] == 0){
                return false
            }
        }
    }

    return true
}
