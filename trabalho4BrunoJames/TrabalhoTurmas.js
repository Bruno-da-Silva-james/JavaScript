const leitor = require('readline-sync')
let alunoL = {}
let alunos = []
let arrayMaior = []
function main() {

    login()

}

function login() {
    let aluno = []
    let nomeProf = leitor.question("\nEnsira seu nome: ")
    let nomeMat = leitor.question("\nEnsira a materia que leciona: ", '\n')
    console.log(`Ola! ${nomeProf} vamos fazer as medias de ${nomeMat}! \n`);
    let valAluno = leitor.questionInt('Ensira a quantidade de alunos a serem calculados: ')
    for (let i = 0; i < valAluno; i++) {
        insertAlunos()
    }
    
    console.log(alunos);    
    console.log('As maiores notas sao: ', getNotaMaior());

}

function getNotaMaior() {
    alunos.forEach(a => {
        arrayMaior.push(a.media)
    });
    return arrayMaior
}

function insertAlunos() {
    let notaT = 0
    let nota = 0
    alunoL.nome = leitor.question(`Ensira o nome do aluno: `)
    for (let i = 0; i < 6; i++) {
        nota = leitor.questionInt(`Ensira a nota do aluno de 1 a 10: `)
        if (nota > 10) {
            console.log('Valor excedido...\n');
            i--
        } else {
            notaT = notaT + nota
        }

    }
    alunoL.nota = notaT
    alunoL.media = notaT / 6
    console.log(alunoL);
    if (alunos.media >= 6) {
        alunos.status = `Aprovado`
    } else {
        alunos.status = `Reprovado`
    }
    
    alunos.push(alunoL)
    
}


main()