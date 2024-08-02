let personagem1 = window.prompt("Nome do personagem de Ataque: ");
let ataque = window.prompt("Poder de Ataque do personagem: ");
let personagem2 = window.prompt("Nome do personagem de Defesa: ");
let vida = window.prompt("Pontos de Vida do personagem de Defesa: ");
let defesa = window.prompt("Pontos de Defesa do personagem de Defesa: ");
let escudo = window.prompt("O personagem tem escudo?");
let dano;

if (ataque > defesa && escudo === "não") {
    dano = ataque - defesa;
}else if (ataque > defesa && escudo == "sim") {
    dano = (ataque - defesa)/2;
}else if (defesa >= ataque) {
    dano = 0;
}

vida -= dano;

alert(
    "Dano recebido: " + dano +
    "\nVida atualizada: " + vida
)

