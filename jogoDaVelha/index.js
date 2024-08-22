const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const comecarJogoBtn = document.getElementById('startbtn');
const recomecarJogoBtn = document.getElementById('restartbtn');
let player1Wins = 0;
let player2Wins = 0;
let currentPlayer;
let jogadorInicial = player1.value;

function createLabel(text, htmlfor) {
    const newLabel = document.createElement('label');
    newLabel.htmlFor = htmlfor;
    newLabel.innerText = text;
    newLabel.style.color = '#fff';
    newLabel.style.backgroundColor = '#606060';
    return newLabel;
}

function createPlayer(name, id) {
    const newLi = document.createElement('li');
    newLi.id = id;
    newLi.innerText = name;
    newLi.style.color = '#fff';
    newLi.style.backgroundColor = '#606060';
    return newLi;
}

comecarJogoBtn.addEventListener('click', function() {
    if (player1.value !== "" && player2.value !== "") {
        console.log("O jogo começou!");
        const x = createLabel(' X');
        const o = createLabel(' O');
        const ul = document.getElementById('players-ul');
        
        const p1 = createPlayer(player1.value + x.innerText, 'p1-name');
        const p2 = createPlayer(player2.value + o.innerText, 'p2-name');
    
        const bolaP1 = document.createElement('span');
        bolaP1.className = 'bola';
        const bolaP2 = document.createElement('span');
        bolaP2.className = 'bola';
    
        p1.appendChild(bolaP1);
        p2.appendChild(bolaP2);
        const labelP1 = createLabel('Player1-Vitórias: ', 'p1');
        const labelP2 = createLabel('Player2-Vitórias: ', 'p2');

        const p1WinsLabel = document.createElement('span');
        p1WinsLabel.id = 'p1-wins';
        p1WinsLabel.innerText = player1Wins;
        p1WinsLabel.style.backgroundColor = '#606060';
        
        const p2WinsLabel = document.createElement('span');
        p2WinsLabel.id = 'p2-wins';
        p2WinsLabel.innerText = player2Wins;
        p2WinsLabel.style.backgroundColor = '#606060';

        labelP1.appendChild(p1WinsLabel);
        labelP2.appendChild(p2WinsLabel);
        labelP1.append(p1);
        labelP2.append(p2);
        ul.appendChild(labelP1);
        ul.appendChild(labelP2);
        currentPlayer = player1.value;
        jogar();
        comecarJogoBtn.disabled = true;
        comecarJogoBtn.style.backgroundColor = "#341038";
        comecarJogoBtn.style.color = "#434343";
        bolaP1.style.backgroundColor = '#9c15cd';
        bolaP2.style.backgroundColor = '#2c1c31';
    } else {
        alert("É preciso inserir o nome dos 2 players para iniciar o jogo!");
    }
});


recomecarJogoBtn.addEventListener('click', function() {
    if (verificarVitoria()) {
        if (currentPlayer === player1.value) {
            player1Wins++;
            document.querySelector('#p1-wins').innerText = player1Wins;
        } else {
            player2Wins++;
            document.querySelector('#p2-wins').innerText = player2Wins;
        }
    }
    if (jogadorInicial === player1.value) {
        jogadorInicial = player2.value;
    } else {
        jogadorInicial = player1.value;
    }
    currentPlayer = jogadorInicial;
    buttons.forEach(button => {
        button.innerText = '';
        button.disabled = false;
        button.style.backgroundColor = '#333';
        button.style.color = '#fff';
        button.style.borderRadius = '0px';
    });
    if (mostraVencedor.firstChild) {
        mostraVencedor.removeChild(mostraVencedor.firstChild);
    }
    quadrado2.style.backgroundColor = '#606060';
    atualizarBolinha();
})


function verificarVitoria() {
    const keys = [];
    for (let i = 1; i <= 9; i++) {
        keys[i] = document.querySelector('.charKey-' + i);
    }
    const vitorias = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (const [a, b, c] of vitorias) {
        if (keys[a].innerText === 'X' && keys[b].innerText === 'X' && keys[c].innerText === 'X') {
            // Muda a cor de fundo das células vencedoras
            keys[a].style.backgroundColor = '#fff';
            keys[b].style.backgroundColor = '#fff';
            keys[c].style.backgroundColor = '#fff';
            keys[a].style.color = '#606060';
            keys[b].style.color = '#606060';
            keys[c].style.color = '#606060';
            keys[a].style.borderRadius = '15px';
            keys[b].style.borderRadius = '15px';
            keys[c].style.borderRadius = '15px';
            return true;
        } else if (keys[a].innerText === 'O' && keys[b].innerText === 'O' && keys[c].innerText === 'O') {
            // Muda a cor de fundo das células vencedoras
            keys[a].style.backgroundColor = '#fff';
            keys[b].style.backgroundColor = '#fff';
            keys[c].style.backgroundColor = '#fff';
            keys[a].style.color = '#606060';
            keys[b].style.color = '#606060';
            keys[c].style.color = '#606060';
            keys[a].style.borderRadius = '15px';
            keys[b].style.borderRadius = '15px';
            keys[c].style.borderRadius = '15px';
            return true;
        }
    }
    return false;
}


function verificarEmpate() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText === "") {
            return false;
        }
    }
        if (!verificarVitoria()) {
            console.log("Terminou em Empate!");
            const empate = createLabel("Empate!");
            empate.style.backgroundColor = '#57de57';
            empate.style.color = '#1a3d2e';
            empate.style.fontWeight = '900';
            mostraVencedor.appendChild(empate);
            quadrado2.style.backgroundColor = '#57de57';
            return true;
        }
    return false;
}

function atualizarBolinha() {
    const bolaP1 = document.querySelector('#p1-name .bola');
    const bolaP2 = document.querySelector('#p2-name .bola');
    bolaP1.style.backgroundColor = 'transparent';
    bolaP2.style.backgroundColor = 'transparent';

    if (currentPlayer === player1.value) {
        bolaP1.style.backgroundColor = '#9c15cd';
        bolaP2.style.backgroundColor = '#2c1c31';  
    } else {
        bolaP2.style.backgroundColor = '#9c15cd';
        bolaP1.style.backgroundColor = '#2c1c31';
    }
}

function alternarJogador() {
    if (currentPlayer === player1.value) {
        currentPlayer = player2.value;
    } else {
        currentPlayer = player1.value;
    }
    atualizarBolinha();
    console.log("A vez é de: ", currentPlayer);
}

const buttons = document.querySelectorAll('#keys button');
const mostraVencedor = document.getElementsByClassName('players-square2')[0]; 
const quadrado2 = document.getElementsByClassName('players-square2')[0]; 

function jogar() {
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                if (button.innerText === '') {
                    if (currentPlayer === player1.value) {
                        button.innerText = 'X';
                        button.dataset.value = 'X';
                    }else{
                        button.innerText = 'O';
                        button.dataset.value = 'O';
                    }
                    console.log("Botão Clicado: ", button.innerText);
                    
                    verificarEmpate();
                    
                    if (verificarVitoria()) {
                        console.log("O jogo Acabou!");
                        buttons.forEach(function(button) {
                            button.disabled = true;
                        })
                        const vencedor = createLabel("Vencedor: " + currentPlayer);
                        vencedor.style.backgroundColor = '#57de57';
                        vencedor.style.color = '#1a3d2e';
                        vencedor.style.fontWeight = '900';
                        mostraVencedor.appendChild(vencedor);
                        quadrado2.style.backgroundColor = '#57de57';
                    }else{
                        alternarJogador();
                    }                
                }
            });
        });
    }

    