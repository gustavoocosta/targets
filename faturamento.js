const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const faturamento = JSON.parse(data).faturamento;
    let total = 0;
    let menor = Infinity;
    let maior = -Infinity;
    let diasAcimaMedia = 0;
    let diasContados = 0;

    for (const dia of faturamento) {
        const valor = dia.valor;
        if (valor > 0) {
            total += valor;
            diasContados++;
            if (valor < menor) menor = valor;
            if (valor > maior) maior = valor;
        }
    }

    const media = total / diasContados;

    for (const dia of faturamento) {
        if (dia.valor > media) {
            diasAcimaMedia++;
        }
    }

    console.log("Menor faturamento:", menor);
    console.log("Maior faturamento:", maior);
    console.log("Dias acima da média:", diasAcimaMedia);
});
