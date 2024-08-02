let pilha = [];
let opcao = "";

do{
    let cartas = "";
    for (let i = pilha.length-1; i >= 0; i--) {
        cartas += "["+pilha[i]+"]" + "\n";
    }
    opcao = prompt("Pilha: \n"+ cartas + "\nEscolha uma opção: \n1.Adicionar Carta \n2.Puxar Carta \n3.Sair...");
    switch (opcao) {
        case "1":
            pilha.push(window.prompt("Nome da carta:"));
            alert("A carta foi adicionada a pilha");
            break;
        case "2":
            let retirada = pilha.pop();
            if (!retirada) {
                alert("Não há cartas no Baralho!");
            }else{
                alert("A carta " + retirada + " foi retirada da pilha");
            }
            break;
        case "3":
            alert("Saindo...");
            break;
            default:
            alert("Opção Inválida!");
            break;
    }
} while (opcao !== "3");
