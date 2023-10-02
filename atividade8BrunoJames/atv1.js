const leitor = require('readline-sync')
//Ex01
//a
function frase() {
    console.log("Eu sou o BrunoJames, tenho 18 anos, moro em Canoas e sou estudante");
}

frase()

//b
let nome = leitor.question('Ensira seu nome: ')
let idade = leitor.questionInt('Ensira sua idade: ')
let cidade = leitor.question('Ensira sua cidade: ')
let prof = leitor.question('Ensira sua profissão: ')
 
function fraseInp(nome,idade,cidade,prof) {
    
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${prof}.`);
    
}

fraseInp(nome, idade,cidade,prof)