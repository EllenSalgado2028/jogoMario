const mario = document.querySelector(".mario");
const cano = document.querySelector(".cano");
const gameOverEl = document.querySelector(".game-over");
const btnReiniciar = document.querySelector("button");
const jogo = document.querySelector(".game");

let pulando = false;
let fimDeJogo = false;
let velocidade = 3;
let posicaoCano = 0;

const ALTURA_CHAO = 50;

function pular() {
    if (pulando || fimDeJogo) return;
    pulando = true;

    const alturaMaxima = 320; // altura do pulo
    const duracao = 1200;  //duração do pulo
    const inicio = performance.now();

    function animarPulo(agora) {
        const tempoPassado = agora - inicio;
        const progresso = Math.min(tempoPassado / duracao, 1);

        const altura = ALTURA_CHAO + (alturaMaxima - ALTURA_CHAO) * Math.sin(progresso * Math.PI);
        mario.style.bottom = `${altura}px`;

        if (progresso < 1) {
            requestAnimationFrame(animarPulo);
        } else {
            mario.style.bottom = `${ALTURA_CHAO}px`;
            pulando = false;
        }
    }

    requestAnimationFrame(animarPulo);
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        pular();
    }
});

jogo.addEventListener("click", pular);

function checarColisao() {
    const marioRect = mario.getBoundingClientRect();
    const canoRect = cano.getBoundingClientRect();

    const colidiu =
        marioRect.right > canoRect.left + 15 &&
        marioRect.left < canoRect.right - 15 &&
        marioRect.bottom > canoRect.top + 10;

    if (colidiu) {
        perder();
    }
}

function perder() {
    fimDeJogo = true;
    gameOverEl.style.display = "block";

    const duracao = 800;
    const inicio = performance.now();
    const bottomInicial = parseFloat(mario.style.bottom) || ALTURA_CHAO;

    function animarQueda(agora) {
        const tempoPassado = agora - inicio;
        const progresso = Math.min(tempoPassado / duracao, 1);

        const rotacao = 90 * progresso;
        const quedaExtra = 30 * progresso;
        const opacidade = 1 - 0.7 * progresso;

        mario.style.transform = `rotate(${rotacao}deg)`;
        mario.style.bottom = `${bottomInicial - quedaExtra}px`;
        mario.style.opacity = opacidade;

        if (progresso < 1) {
            requestAnimationFrame(animarQueda);
        }
    }

    requestAnimationFrame(animarQueda);
}

function loop() {
    requestAnimationFrame(loop);

    if (fimDeJogo) return;

    posicaoCano -= velocidade;
    cano.style.transform = `translateX(${posicaoCano}px)`;

    const canoRect = cano.getBoundingClientRect();
    if (canoRect.right < 0) {
        posicaoCano = 0;
        cano.style.transform = "translateX(0)";
        velocidade += 0.3;
    }

    checarColisao();
}

function reiniciar() {
    fimDeJogo = false;
    pulando = false;
    velocidade = 3;
    posicaoCano = 0;

    cano.style.transform = "translateX(0)";

    mario.style.bottom = `${ALTURA_CHAO}px`;
    mario.style.transform = "rotate(0deg)";
    mario.style.opacity = 1;

    gameOverEl.style.display = "none";
}

btnReiniciar.addEventListener("click", reiniciar);

loop();