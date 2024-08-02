let opcoes = window.prompt("Escolha uma opção: \n1.a \n2.b \n3.c \n4.d \n5.encerrar");
do {
    opcoes = window.prompt("Escolha uma opção: \n1.a \n2.b \n3.c \n4.d \n5.encerrar");
    switch (opcoes) {
        case "1":
            alert("Opção a foi escolhida");
            break;
        case "2":
            alert("Opção b foi escolhida");
            break;
        case "3":
            alert("Opção c foi escolhida");
            break;
        case "4":
            alert("Opção d foi escolhida");
            break;
        case "5":
            alert("O programa foi Finalizado...");            
            break;
        default:
            alert("Opção Inválida!");
            break;
    }
} while (opcoes !== "5");
