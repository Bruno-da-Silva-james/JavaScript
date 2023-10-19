const leitor = require('readline-sync')

let num = leitor.questionInt('Ensira um numero a ser multiplicado: ')

for (let i = 0; i < 11; i++) {
    let mult = num * i
    console.log(`${num} x ${i} = ${mult}`);
    
}