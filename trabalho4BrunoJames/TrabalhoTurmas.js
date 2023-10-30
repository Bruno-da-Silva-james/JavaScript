const leitor = require('readline-sync')

function main() {
    let qntAluno = leitor.questionInt("Ensira a quantidade de alunos")
    let a = getNota(qntAluno)
    let soma = 0
    for (let i = 1; i <= a.length; i + 6) {
        for (let j = 0; j < 6; j++) {
            soma = soma + a[j]

        }

    }

    console.log(soma);
}


function getNota(alunos) {
    let nota
    const qntNota = 6
    let notasA = []
    for (let i = 1; i < alunos + 1; i++) {
        console.log(`aluno${i}`);
        for (let j = 0; j < qntNota; j++) {
            nota = leitor.questionInt('Ensira uma nota: ')
            notasA.push(nota)
        }
    }
    return notasA
}


main()