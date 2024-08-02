let nome = window.prompt("Qual o nome do turista?");
let visita = window.prompt("Já visitou alguma cidade cidade?");

if (visita === "sim") {
    let cidades = window.prompt("Qual Cidade?");
    let contador = parseFloat(1);
    while (visita = window.prompt("Já visitou mais alguma outra cidade?") === "sim") {
        cidades +=  " " + window.prompt("Qual Cidade?");
        contador++;
    }
    alert(
        "Nome do Turista: " + nome +
        "\nNumero de Cidades Visitadas: " + contador +
        "\nQuais cidades foram visitadas: " + cidades 
    )
}else{
    alert("Nome do Turista: " + nome +
        "\nNão Visitou nenhuma cidade..."
    )
}
