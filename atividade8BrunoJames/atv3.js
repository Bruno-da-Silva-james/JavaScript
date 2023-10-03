const leitor = require('readline-sync')

let valor1 = leitor.questionInt("Ensira um valor: ")
let valor2 = leitor.questionInt("Ensira outro valor: ")

function soma(a,b) {
    let som = a + b
    console.log(som);
}

function sub(a,b) {
    let su = a - b
    console.log(su);
}

function mult(a,b) {
    let mul = a*b
    console.log(mul);
}

function div(a,b) {
    let di = a / b
    console.log(di);
}

function main() {
    console.log(`Numero inseridos ${valor1} e ${valor2}`);
    console.log("Soma: ", soma(valor1,valor2));
    console.log("Subtracao: ",sub(valor1,valor2));
    console.log("Multiplicacao: ",mult(valor1,valor2));
    console.log("Divisao: ",div(valor1,valor2));
}



main()
