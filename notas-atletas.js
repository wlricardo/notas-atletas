let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function obterNome(atleta) {
    return atleta.nome;
}

function obterNotas(atleta) {
    return atleta.notas;
}

function ordenarNotas(atleta) {
    let notas = atleta.notas.sort((a, b) => a - b);
    return notas;
}

function notasValidas(atleta) {
    let notas = ordenarNotas(atleta);
    return notas.slice(1, 4);
}

function calcularMedia(atleta) {
    let soma = 0.0;
    notasValidas(atleta).forEach(function (nota) {
        soma += nota;
    });
    return soma / notasValidas(atleta).length;
}

function exibirDados(atleta) {
    let nome = obterNome(atleta);
    let notas = obterNotas(atleta);
    let media = calcularMedia(atleta);

    return `Nome: ${nome}\nNotas Obtidas: ${notas}\nMédia Válida: ${media}\n`;
}

atletas.forEach(function (atleta) {
    console.log(exibirDados(atleta[i]));
})