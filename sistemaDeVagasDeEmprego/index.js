let vagas = [];

do {
    opcoes = window.prompt("| SISTEMA DE VAGAS DE EMPREGO | \nEscolha uma opção: \n1.Listar Vagas \n2.Criar uma Nova Vaga \n3.Visualizar uma Vaga \n4.Inscrever um Candidato em uma Vaga \n5.Excluir Vaga \n6.Sair...");
    switch (opcoes) {
        case "1":
        let listar = "";
        let totalDeCandidatos = 0;
        for (let i = 0; i < vagas.length; i++) {
            listar += "Vaga: " + i + "\nNome da Vaga: " + vagas[i].nome + " (" + vagas[i].candidatos.length + " Candidato(s))" + "\n" + "\n";
            totalDeCandidatos += vagas[i].candidatos.length;
        }
        alert(
            listar + "\nNúmero de Candidatos Inscritos de Todas as Vagas: " + totalDeCandidatos
        )
        break;
        case "2":
        let nomeVaga = window.prompt("Insira o nome da Vaga: ");
        let descricao = window.prompt("Insira uma descrição para Vaga: ");
        let dataLimite = window.prompt("Insira a data limite para Inscrição: ");    
        criarVaga(nomeVaga, descricao, dataLimite);
        break;
        case "3":
        let indiceV = window.prompt("Insira o Indice da Vaga que Deseja Visualizar");
        exibirVaga(indiceV);
        break;
        case "4":
        let nomeCandidato = window.prompt("Insira o nome do Candidato: ");
        let indiceDaVaga = window.prompt("Insira o Indice da Vaga: ");
        inscreverCandidato(nomeCandidato, indiceDaVaga);             
        break;
        case "5":
        let indiceDaVagaRemove = window.prompt("Insira o Indice da Vaga a ser Removida: ");
        removerVaga(indiceDaVagaRemove);
        break;
        case "6":
            alert("Saindo...");
            break;
        default:
            alert("Opção Inválida!");
            break;
    }
} while (opcoes !== "6");

function criarVaga(nome, descricao, dataLimite) {
    let vaga = {
        nome : nome,
        descricao : descricao,
        dataLimite : dataLimite,
        candidatos : []
    }
    let confirmacao = confirm(
        "Tem certeza que deseja criar uma vaga com os seguintes dados? \n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )
    if (confirmacao) {
    vagas.push(vaga);
    alert("Vaga criada com sucesso!");
    }else{
        alert("A vaga não foi criada!");
    }
}

function inscreverCandidato(nome,indice) {
    let vaga = vagas[indice];
    let candidato = {
        nome : nome,
        indice : indice
    }
    if (indice >= vagas.length || indice < 0) {
        alert("ERRO: Indice inválido!");
        return;
    }else{
    let confirmacao = confirm(
        "Tem certeza que deseja inscrever um Candidato com os seguintes dados? \n" +
        "Nome: " + candidato.nome + "\nIndice da Vaga: " + candidato.indice  
    )

    if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Candidato Inscrito com Sucesso...");  
    }else{
        alert("Candidato não foi Cadastrado!");
    }
}
}

function exibirVaga(indice) {
    let nomeCandidatos = "";
    let vaga = vagas[indice];

    if (indice >= vagas.length || indice < 0) {
        alert("ERRO: Indice inválido!");
        return;
    }else{
        for (let i = 0; i < vaga.candidatos.length; i++) {
            if (vaga.candidatos[i].indice === indice) {
                nomeCandidatos += "-" + vaga.candidatos[i].nome + "\n"
            }
        }
        alert(
            "Indice da Vaga: " + indice + "\nNome da Vaga: " + vagas[indice].nome +
            "\nDescrição da Vaga: " + vagas[indice].descricao +
            "\nData Limite: " + vagas[indice].dataLimite +
            "\nQuantidade de Candidatos: " + vaga.candidatos.length +
            "\nNome dos Candidatos Inscritos: \n" + nomeCandidatos
        )
}
}

function removerVaga(indice) {
    if (indice >= vagas.length || indice < 0) {
        alert("ERRO: Indice inválido!");
        return;
    }else{
    let confirmacao = confirm(
        "Deseja mesmo remover a vaga " + indice + "?"
    )
    if (confirmacao) {
        vagas.splice(indice,1);
        alert("Vaga Removida com Sucesso!");        
    }
}
}

