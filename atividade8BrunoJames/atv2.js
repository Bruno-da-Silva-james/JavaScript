const leitor = require('readline-sync')

let a = leitor.questionInt("Ensira um numero: ")
let b = leitor.questionInt("Ensira outro numero: ")
let frase = leitor.question("Escreva uma frase: ")
function num(a, b) {
    let soma = a + b
    console.log(`A soma do numero ${a} com o numero ${b} é ${soma}`);
}

num(a, b)

function bool(a, b) {

    if (a > b) {
        console.log(true);
    } else {
        console.log(false);
    }
}
bool(a, b)

function par(a) {
    if ((a % 2) === 0) {
        console.log(`O valor é par ${true}`);
    } else {
        console.log(`O valor é impar ${false}`);
    }

}
par(a)

function fraseLeng(frase) {
    console.log("A frase tem ", frase.length, "letras");
    console.log("Em maiusculo ", frase.toUpperCase());
}

fraseLeng(frase)