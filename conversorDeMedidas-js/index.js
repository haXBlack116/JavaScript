let valor = parseFloat(window.prompt("Insira um valor"));
const option = window.prompt("Para qual unidade de medida você deseja converter:\n 1.mm\n 2.cm\n 3.dm\n 4.dam\n 5.hm\n 6.km");

switch (option) {
    case "1":
        valor *= 1000;
        alert("Valor Convertido: " + valor + "mm");
        break;
    case "2":
        valor *= 100;
        alert("Valor Convertido: " + valor + "cm");
        break;
    case "3":
        valor *= 10;
        alert("Valor Convertido: " + valor + "dm");
        break;
    case "4":
        valor /= 10;
        alert("Valor Convertido: " + valor + "dam");
        break;
    case "5":
        valor /= 100;
        alert("Valor Convertido: " + valor + "hm");
        break;
    case "6":
        valor /= 1000;
        alert("Valor Convertido: " + valor + "km");
        break;
    default:
        alert("Opção Inválida..")
        break;
}