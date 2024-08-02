let num = window.prompt("Escolha um valor de 1 a 20:");
let result = "";

for (let i = 1; i <= 10; i++) {
    result += num + "*" + i + "=" + num * i + "\n"; 
}

alert(
    "Resultado:\n" + result
);
