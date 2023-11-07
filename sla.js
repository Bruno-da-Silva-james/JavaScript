const leitor = require("readline-sync")

function main(){
    let numQuest = 6
    let numAluno = 3
    let soma = 0;
    let alunoArray = []
    let mediaArray = []
    let notaArray = []
    let media = 0

    for (let i = 1; i <= numAluno; i++){
        let nome = leitor.question("digite o nome do aluno: ")
        alunoArray.unshift(nome)

        for (let i = 1; i <= numQuest; i++){
            let nota = leitor.questionInt(`insira a ${i} nota: `)
            soma += nota
            notaArray.unshift(nota)
            media = soma / numQuest
            mediaArray.unshift(media)
            if (i == numQuest){
                soma = 0
            }
        }

        console.log(`a nota do aluno ${alunoArray[0]} é ${mediaArray[0]}`);
        if (mediaArray[0] < 7){
            console.log(`o aluno ${alunoArray[0]} foi reprovado`);
        } else {
            console.log(`o aluno ${alunoArray[0]} foi aprovado`);
        }
    }

    let somaMedia = 0
    for(let i = 0; i < mediaArray.length; i += 6){
       somaMedia += mediaArray[i];
    }
    let mediaGeral = somaMedia / numAluno

    let notaAluno1 = []
    let notaAluno2 = []
    let notaAluno3 = []
    for (i = 0; i < 6; i ++){
        notaAluno1.push(notaArray[i])
    }
    for (i = 6; i < 12; i++){
        notaAluno2.push(notaArray[i])
    }
    for (i = 12; i < 18; i++){
        notaAluno3.push(notaArray[i])
    }
    let aluno1 = [alunoArray[2], mediaArray[12], notaAluno1]
    let aluno2 = [alunoArray[1], mediaArray[6], notaAluno2]
    let aluno3 = [alunoArray[0], mediaArray[0], notaAluno3]

    aluno1.forEach((notas) => console.log(notas))
    aluno2.forEach((notas) => console.log(notas))
    aluno3.forEach((notas) => console.log(notas))
    console.log(`a media da turma é ${mediaGeral}`)

    console.log(`a maior nota foi ${Math.max(...mediaArray)}`);
}



main()