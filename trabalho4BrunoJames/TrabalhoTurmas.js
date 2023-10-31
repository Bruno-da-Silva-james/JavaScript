const leitor = require('readline-sync')

function main() {
    let qntAluno = leitor.questionInt("Ensira a quantidade de alunos: ")
    getNota(qntAluno, 0)
}

function login() {
    let nomeProf = leitor.questionInt("Ensira seu nome: ")
    let nomeMat = leitor.questionInt("Ensira a materia que leciona: ")

}

function getNota(alunos, n) {
    let alunoL = [{}, {}, {}, {}, {}, {}]
    while (n < alunos) {
        let notaT = 0
        let nota = 0
        alunoL[n].nome = leitor.question(`Ensira o nome do aluno: `)
        for (let i = 0; i < 6; i++) {
            nota = leitor.questionInt(`Ensira a nota do aluno: `)
            notaT = notaT + nota
        }
        alunoL[n].nota = notaT
        let notaSoma = alunoL[n,2]
        
        alunoL[n].media = notaSoma / alunos
        n++
    }
    let value
console.log(alunoL.findIndex(value === `nota`));
}


main()