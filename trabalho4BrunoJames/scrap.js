const leitor = require('readline-sync')

let cont_a = 0
let cont_t = 0
let turmas = leitor.questionInt("Numero de turmas: ")
let alunos 
let nota 
let soma_t =0
let soma_e = 0
let media
let media_e = 0
 
do {
    soma_t = 0
    cont_a = 0
    alunos = leitor.questionInt("Numero de alunos: ")
    do {                                                            
        nota = leitor.questionInt("Entre com a nota do aluno: ")
        soma_t = soma_t + nota 
        console.log("Aluno: ", cont_a);
        cont_a = cont_a + 1 
        
    } while (cont_a < alunos);

    media = soma_t / alunos
    console.log("Media da turma: ", cont_t + 1, "e", media);
    soma_e = soma_e + media 
    cont_t = cont_t + 1
} while (cont_t < turmas);
    media_e = soma_e / turmas

    console.log("A media escolar é: ", media_e);