const leitor = require('readline-sync')

let a = leitor.questionInt("Ensira um numero: ")
let b = leitor.questionInt("Ensira outro numero: ")
    const vdd = true
    const falso = false
        let frase = leitor.question("Escreva uma frase: ")
function num(a,b) {
    let soma = a + b
    console.log(`A soma do numero ${a} com o numero ${b} é ${soma}`);
}

num(a,b)

function bool(a,b) {

    if (a > b) {
        console.log(vdd);
    } else {
        console.log(falso);
    }
}
bool(a,b)

function par(a) {
    if ((a % 2) === 0) {
        console.log(`O valor é par ${vdd}`);
    }else{
        console.log(`O valor é impar ${falso}`);
    }
    
}
par(a)

function fraseLeng(frase) {
    console.log(frase.length);
    console.log(frase.toUpperCase());
}

fraseLeng(frase)