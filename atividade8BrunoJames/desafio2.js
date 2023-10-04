const leitor = require('readline-sync')

let val1 = leitor.questionInt("Ensira um valor do cateto: ")
let val2 = leitor.questionInt("Ensira outro valor do cateto: ")

function raiz(n1,n2) {
    let hip = Math.sqrt(((n1*n1) + (n2*n2)))
    console.log(`O valor da hip é: ${hip}`);
    return 0
}


raiz(val1,val2)
