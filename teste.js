

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let a
let b
let soma
rl.question(``, a => {
    rl.question(``, b => {
        soma = Number(a) + Number(b)
        console.log(`Soma = ${soma}`);
    })
})
