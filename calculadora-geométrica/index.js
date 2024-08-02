let opcoes = "";

function areaTri(base, altura) {
    let area = (base * altura)/2;
    return area;
}

function areaRet(base, altura) {
    return base*altura;
}

function areaQua(l1) {
    return l1*l1;
}

function areaTrap(baseMaior, BaseMenor, altura) {
    let area = ((baseMaior + BaseMenor) * altura)/2;
    return area;    
}

function areaCir(pi, raio) {
    let area = pi * (raio*raio);
    return area;    
}

do {
    opcoes = window.prompt("Escolha uma opção: \n1.Área do Triângulo \n2.Área do Retângulo \n3.Área do Quadrado \n4.Área do Trapézio \n5.Área do Círculo \n6.Sair..");
    switch (opcoes) {
        case "1":
            alert("Valor da Área: \n" +
            areaTri(parseFloat(window.prompt("Valor da Base:")), parseFloat(window.prompt("Valor da Altura")))
            )
            break;
        case "2":
            alert("Valor da Área: \n" +
            areaRet(parseFloat(window.prompt("Valor da Base:")), parseFloat(window.prompt("Valor da Altura"))) 
            )
            break;
        case "3":
            alert("Valor da Área: \n" +
            areaQua(parseFloat(window.prompt("Valor do Lado:"))) 
            )
            break;
        case "4":
            alert("Valor da Área: \n" +
            areaTrap(parseFloat(window.prompt("Valor da Base Maior:")), parseFloat(window.prompt("Valor da Base Menor:")), parseFloat(window.prompt("Valor da Altura")))
            )
            break;
        case "5":
            alert("Valor da Área: \n" +
            areaCir(parseFloat(window.prompt("Valor do Raio:")),parseFloat(3.14))
        )
            break;
        case "6":
            alert("Saindo...");
            break;
        default:
            alert("Opção Inválida!");
            break;
    }
} while (opcoes !== "6");
