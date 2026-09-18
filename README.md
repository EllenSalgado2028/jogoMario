# Jogo Mario

## Descrição

O Jogo Mario é um jogo de navegador inspirado na dinâmica do Dino do Google Chrome. O jogador controla o personagem Mario, que deve pular para evitar os canos que se movimentam pela tela.

O objetivo é permanecer no jogo pelo maior tempo possível, desviando dos obstáculos. Quando ocorre uma colisão, o jogo é encerrado e uma mensagem de "Game Over" é exibida. O jogador pode iniciar uma nova partida por meio do botão "Reiniciar".

## Objetivo

Desenvolver um jogo simples e interativo para navegador, utilizando HTML5, CSS3 e JavaScript puro, aplicando conceitos de animação, movimentação de elementos, detecção de colisões e controle de estados do jogo.

## Funcionalidades

- Pulo do personagem utilizando a tecla Espaço.
- Movimentação contínua dos canos da direita para a esquerda.
- Reposicionamento do cano no lado direito após sair da tela.
- Detecção de colisão entre o personagem e os canos.
- Aumento gradual da velocidade dos canos durante o jogo.
- Exibição da mensagem "Game Over" após uma colisão.
- Interrupção do jogo após o Game Over.
- Animação de queda do personagem ao colidir.
- Botão "Reiniciar" para iniciar uma nova partida.
- Reinicialização das variáveis para o estado inicial do jogo.
- Sistema de pontuação previsto para implementação.

## Tecnologias utilizadas

- HTML5: utilizado para estruturar os elementos da página e do jogo.
- CSS3: utilizado para estilização, posicionamento e animação dos elementos.
- JavaScript: utilizado para desenvolver a lógica, a movimentação, as interações e as regras do jogo.

## Recursos utilizados

- `requestAnimationFrame`: utilizado para executar o loop de animação e atualizar continuamente os elementos do jogo.
- `getBoundingClientRect`: utilizado para obter a posição e as dimensões dos elementos, auxiliando na detecção de colisões.
- Git: utilizado para o controle de versão e o registro das alterações realizadas no projeto.
- GitHub: utilizado para o armazenamento e compartilhamento do código-fonte em um repositório remoto.

## Funcionamento

Durante a execução, o personagem permanece na tela e pode realizar um pulo ao pressionar a tecla Espaço. Os canos se movimentam continuamente da direita para a esquerda.

Quando um cano sai completamente da tela, ele é reposicionado no lado direito para continuar o movimento. A velocidade dos obstáculos aumenta gradualmente com o decorrer do jogo, tornando a partida mais desafiadora.

O sistema verifica constantemente se existe uma colisão entre o personagem e um cano. Caso ocorra uma colisão, o jogo é interrompido, a mensagem "Game Over" é exibida e o personagem executa uma animação de queda.

O botão "Reiniciar" permite iniciar uma nova partida, restaurando as variáveis e os elementos do jogo para seus estados iniciais.

## Instalação e execução

### Pré-requisitos

- Navegador web, como Google Chrome, Mozilla Firefox, Microsoft Edge ou outro navegador compatível.
- Git, caso o projeto seja obtido por meio do repositório remoto.

### Clonando o repositório

Para obter o projeto, execute o seguinte comando no terminal:

```bash
git clone https://github.com/EllenSalgado2028/jogoMario.git
```

## Integrantes

- Adrienne Ellen Salgado - 01794945
- Evelyn Aline Nunes Mineo - 01824704
- Mateus Enrique - Desenvolvedor - 01846550
- Marcus Vinicios Souza de Pablo - 01846641
- Flavio José Rego da Silva Junior - 01790691
- Roberto Salgado - 01821769
