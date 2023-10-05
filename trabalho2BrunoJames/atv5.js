const leitor = require('readline-sync')


const soma = (a, b) => a + b
const sub = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => a / b


function main() {
    let n1 = leitor.questionInt("Ensira um numero: ")
    let n2 = leitor.questionInt("Ensira outro numero: ")

    let resultSoma = soma(n1,n2)
    let resultSub = sub(n1,n2)
    let resultMult = mult(n1,n2)
    let resultDiv = div(n1,n2)

    console.log(`O resultado da soma dos numeros ${n1} e ${n2} é ${resultSoma}`);
    console.log(`O resultado da subtracao dos numeros ${n1} e ${n2} é ${resultSub}`);
    console.log(`O resultado da multiplicacao dos numeros ${n1} e ${n2} é ${resultMult}`);
    console.log(`O resultado da divisao dos numeros ${n1} e ${n2} é ${resultDiv}`);
}

main()