const prompt = require('prompt-sync')();

function inverter(s) {
    let resultado = "";
    for (let i = 0; i < s.length; i++) {
        resultado = s.charAt(i) + resultado;
    }
    return resultado;
}

const texto = prompt("Digite uma string: ");
console.log(inverter(texto));
