const leitor = require('readline-sync')

const soma = (a, b) =>console.log(a + b); 
const sub = (a, b) => console.log(a - b);
const mult = (a, b) => console.log(a * b);
const div = (a, b) => console.log(a / b);

function main() {
    let n1 = leitor.questionInt(`Ensira um numero: `)
    let n2 = leitor.questionInt(`Ensira outro numero: `)

    let op = leitor.questionInt(`OP1: soma\nOP2: sub\nOP3: mult \nOP4: div\nEnsira uma opcao: `)
    switch (op) {
        case 1:
        soma(n1, n2)
            break;
        case 2:
            sub(n1, n2)
            break;
        case 3:
            mult(n1, n2)
            break;
        case 4:

            break;
        default:
            console.log(`Opcao invalida, coloque uma valida`);
            break;
    }

}
main()