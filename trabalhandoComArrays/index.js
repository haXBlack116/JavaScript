let fila = [];
let opcao = "";

do{
    let pacientes = "";
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i+1) + "° - " + fila[i] + "\n";
        
    }
    opcao = prompt("Pacientes: \n"+ pacientes + "\nEscolha uma opção: \n1.Adicionar Paciente \n2.Consultar Paciente \n3.Sair...");

    switch (opcao) {
        case "1":
            fila.push(window.prompt("Insira o nome do paciente:"));
            alert("Paciente foi adicionado com sucesso!");
            break;
        case "2":
            let paciente = fila.shift();
            alert(paciente + " foi consultado!");
            break;
        case "3":
            alert("Saindo...");
            break;
            default:
            alert("Opção Inválida!");
            break;
    }
} while (opcao !== "3");
