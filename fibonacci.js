function isFibonacci(num) {
    let a = 0, b = 1;
    while (a < num) {
        const temp = a;
        a = b;
        b = temp + b;
    }
    return a === num;
}

const prompt = require('prompt-sync')();
const n = parseInt(prompt("Digite um número: "));
if (isFibonacci(n)) {
    console.log(`${n} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${n} não pertence à sequência de Fibonacci.`);
}
