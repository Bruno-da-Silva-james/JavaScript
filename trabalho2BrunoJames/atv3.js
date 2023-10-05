const leitor = require('readline-sync')

function calcParty() {
    let kid = leitor.questionInt("Ensira quantas crianças tem na festa: ")
    let adulto = leitor.questionInt("Ensira quantos adultos tem na festa: ")
    let soma = adulto + kid
    console.log(`The total party size is: ${soma}`);
}
calcParty()