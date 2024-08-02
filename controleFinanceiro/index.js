let dinheiro = parseFloat(window.prompt("Qual a quantidade inicial de dinheiro disponivel?"));
let opcoes = 1;
do {
    opcoes = window.prompt("Quantidade de Dinheiro: " + dinheiro + "\n1.Adicionar Dinheiro \n2.Remover Dinheiro \n3.Sair");
    switch (opcoes) {
        case "1":
            dinheiro += parseFloat(window.prompt("Qual a quantidade a ser adicionada?"));
            break;
        case "2":
            dinheiro -= parseFloat(window.prompt("Qual a quantidade a ser retirada?"));
            break;
        case "3":
            alert("Encerrando...");
            break;
        default:
            alert("Opção Invalida!")
            break;
    }

} while (opcoes !== "3");
