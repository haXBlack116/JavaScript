let palavra = window.prompt("Informe uma Palavra:");
let palavraInvertida = "";

for (let i = palavra.length-1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
    alert("É um palindromo!");
}else{
    alert("Não é um Palindromo!\n" + palavra + "\n" + palavraInvertida);
}