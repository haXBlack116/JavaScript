function escalar() {
    const time = document.getElementById('time');
    const nome = document.getElementById('nome').value;
    const numeroDaCamisa = document.getElementById('numero').value;
    const posicao = document.getElementById('posicao').value;

    const confirmation = confirm("Escalar " + nome + " como " + posicao + "?");

    if (confirmation) {
    const newPlayer = document.createElement('li');
    newPlayer.id = 'player-' + numeroDaCamisa;
    newPlayer.innerText = posicao + ": " + nome + " (Camisa " + numeroDaCamisa + ")";
    time.appendChild(newPlayer);

    document.getElementById('posicao').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('numero').value = '';
    }
}

function remover() {
    const numeroRemove = document.getElementById('numeroRemove').value;
    const playerToRemove = document.getElementById('player-' + numeroRemove);

    const confirmation = confirm("Remover o Jogador " + playerToRemove.innerText + "?");

    if (confirmation) {
        playerToRemove.remove();
        document.getElementById('numeroRemove').value = '';
    }
}