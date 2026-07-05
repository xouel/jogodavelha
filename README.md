[README.md](https://github.com/user-attachments/files/29667425/README.md)
# Jogo da Velha

Projeto simples de Jogo da Velha desenvolvido com HTML, CSS e JavaScript.

## Sobre o projeto

O jogo permite que dois jogadores alternem jogadas entre os símbolos `X` e `O`, informando a linha e a coluna desejadas. O sistema verifica automaticamente vitória, empate e posições já ocupadas.

## Funcionalidades

- Tabuleiro 3x3
- Alternância entre jogador 1 (`X`) e jogador 2 (`O`)
- Validação de linha e coluna entre 1 e 3
- Bloqueio de casas já marcadas
- Verificação de vitória
- Verificação de empate
- Botão para reiniciar a partida

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto

```text
jogo-da-velha/
├── jogo-da-velha.html
├── README.md
└── js/
    └── jogoDaVelha.js
```

## Como executar localmente

1. Baixe ou clone este repositório.
2. Abra o arquivo `jogo-da-velha.html` no navegador.
3. Informe a linha e a coluna desejadas para marcar uma jogada.

## Como hospedar no GitHub Pages

Para hospedar no GitHub Pages, o ideal é renomear o arquivo principal:

```text
jogo-da-velha.html -> index.html
```

Depois disso, a estrutura recomendada fica assim:

```text
jogo-da-velha/
├── index.html
├── README.md
└── js/
    └── jogoDaVelha.js
```

No GitHub:

1. Crie um repositório para o projeto.
2. Faça upload dos arquivos `index.html`, `README.md` e da pasta `js`.
3. Vá em `Settings`.
4. Acesse `Pages`.
5. Em `Branch`, selecione `main` e a pasta `/root`.
6. Salve e aguarde o GitHub gerar o link do site.

## Comandos Git

```bash
git add .
git commit -m "feat: adiciona jogo da velha"
git push
```

## Autor

Feito por Xouel.
