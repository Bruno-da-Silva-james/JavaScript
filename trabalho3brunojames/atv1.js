const leitor = require('readline-sync')

function pets() {
let bichos = leitor.questionInt("Quantos animais voce tem? ")
let arrnome = []
let nomes
if (bichos == 0) {
    console.log("Que pena! Você pode adotar um pet!");
}

if (bichos > 0) {
    for (let i = 0; i < bichos; i++) {
        nomes = leitor.question(`Diga me os nomes do pet: `)
        arrnome.push(nomes)

    }
}
console.log(arrnome);
}
pets()