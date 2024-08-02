let opcoes = "";
let imoveis = [];
let quantidadeImoveis = 0;
do {
    opcoes = window.prompt("Numero de Imóveis Cadastrados: " + quantidadeImoveis + "\n" + "Escolha uma opção: \n1.Salvar um Imóvel \n2.Mostrar Imóveis Salvos \n3.Encerrar");
    switch (opcoes) {
        case "1":
            let novoImovel = {
            nomeProprietário : window.prompt("Nome do Proprietário: "),
            quantidadeDeQuartos : window.prompt("Quantidade de Quartos: "),
            quantidadeDeBanheiros : window.prompt("Quantidade de Banheiros: "),
            possuiGaragem : window.prompt("Possui Garagem? ")
            }
            imoveis.push(novoImovel);
            quantidadeImoveis++;
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
            alert(
                "Imóvel " + (i+1) +
                "\nProprietário: " + imoveis[i].nomeProprietário +
                "\nQuantidade de Quartos: " + imoveis[i].quantidadeDeQuartos + 
                "\nQuantidade de Banheiros: " + imoveis[i].quantidadeDeBanheiros +
                "\nPossui Garagem?: " + imoveis[i].possuiGaragem
            )
            }
            break;
        case "3":
            alert("Saindo...");
            break;
        default:
            alert("Opção Inválida!");
            break;
    }
} while (opcoes !== "3");
