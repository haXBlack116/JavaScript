let nome1 = window.prompt("Nome do veiculo 1: ");
let velocidade1 = parseFloat(window.prompt("Velocidade do veiculo 1: "));
let nome2 = window.prompt("Nome do veiculo 2: ");
let velocidade2 = parseFloat(window.prompt("Velocidade do veiculo 2: "));

if (velocidade1 > velocidade2) {
    console.log(nome1 + " é mais rápido que " + nome2);
}else if(velocidade2 === velocidade1){
    console.log(nome1 + " é tão rápido quanto " + nome2);
}else{
    console.log(nome2 + " é mais rápido que " + nome1);
}
