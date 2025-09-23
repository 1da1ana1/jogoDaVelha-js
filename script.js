const morango = "assets/img/morango.png";
const laranja = "assets/img/laranja.png";
const somDeClique = new Audio('assets/pop.mp3');

const boxes = document.querySelectorAll(".box");

const form = document.getElementById("form");

let playerOneName = ""; 
let playerTwoName = ""; 

//por nome
window.onload = function popUp() {
    playerOneName = prompt("Jogador 1, insira seu nome: ");
    playerTwoName = prompt("Jogador 2, insira seu nome: ");

    if (playerOneName && playerTwoName) {
        alert("Jogador 1 (morango): " + playerOneName + "\nJogador 2 (laranja): " + playerTwoName);
    } else {
        alert("Você precisa inserir os dois nomes!");
         location.reload();
    }
}

function anunciarVencedor(imagemGanhadora) {   
    if (imagemGanhadora.src.includes('morango')) {
        setTimeout(() => alert(`Fim de jogo! O vencedor é ${playerOneName}!`), 10);
         location.reload();
    } else{
        setTimeout(() => alert(`Fim de jogo! O vencedor é ${playerTwoName}!`), 10);
         location.reload();
    }
    jogoFinalizado = true; 
}

function checarVitoria() {
    const img1 = boxes[0].querySelector('img');
    const img2 = boxes[1].querySelector('img');
    const img3 = boxes[2].querySelector('img');
    const img4 = boxes[3].querySelector('img');
    const img5 = boxes[4].querySelector('img');
    const img6 = boxes[5].querySelector('img');
    const img7 = boxes[6].querySelector('img');
    const img8 = boxes[7].querySelector('img');
    const img9 = boxes[8].querySelector('img');


    if (img1 && img2 && img3 && img1.src === img2.src && img1.src === img3.src) {
        anunciarVencedor(img1);
    } 
    else if (img4 && img5 && img6 && img4.src === img5.src && img4.src === img6.src) {
        anunciarVencedor(img4);
    }
    else if (img7 && img8 && img9 && img7.src === img8.src && img7.src === img9.src) {
        anunciarVencedor(img7);
    }
    else if (img1 && img4 && img7 && img1.src === img4.src && img1.src === img7.src) {
        anunciarVencedor(img1);
    }
    else if (img2 && img5 && img8 && img2.src === img5.src && img2.src === img8.src) {
        anunciarVencedor(img2);
    }
    else if (img3 && img6 && img9 && img3.src === img6.src && img3.src === img9.src) {
        anunciarVencedor(img3);
    }
    else if (img1 && img5 && img9 && img1.src === img5.src && img1.src === img9.src) {
        anunciarVencedor(img1);
    }
    else if (img3 && img5 && img7 && img3.src === img5.src && img3.src === img7.src) {
        anunciarVencedor(img3);
    }

    if ([...boxes].every(box => box.querySelector('img') !== null)) {
        setTimeout(() => {
            alert("Deu velha! Ninguém ganhou");
            location.reload();
        }, 10);
    }
}
//jogo
let jogadorVez = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        const imagemNaCaixa = box.querySelector('img');

        somDeClique.currentTime = 0;
        somDeClique.play();

        if (imagemNaCaixa) {
            return;
        }

        let imagemParaAdicionar;

        if (jogadorVez === true) {
            imagemParaAdicionar = morango;
        } else {
            imagemParaAdicionar = laranja;
        }

        box.innerHTML = `<img src="${imagemParaAdicionar}" alt="personagem do jogo">`;
        checarVitoria();

        if (jogadorVez === true) {
            jogadorVez = false;

        } else {
            jogadorVez = true;

        }

        setTimeout(() => {
            if (jogadorVez === true) {
                window.alert("Vez do jogador: " + playerOneName);
            } else {
                window.alert("Vez do jogador: " + playerTwoName);
            }
        }, 1000);

    });
});


