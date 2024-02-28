const input = require('fs').readFileSync('./tst.js', 'utf8')
const lines = input.split(`\n`)

function bank() {
    let dinheiroTotal = lines.shift()

    let cem = parseInt(dinheiroTotal / 100)
    let cinquenta = parseInt((dinheiroTotal % 100) / 50)
    let vinte = parseInt(((dinheiroTotal % 100) % 50) / 20)
    let dez = parseInt((((dinheiroTotal % 100) % 50) % 20) / 10)
    let cinco = parseInt(((((dinheiroTotal % 100) % 50) % 20) % 10) / 5)
    let dois = parseInt((((((dinheiroTotal % 100) % 50) % 20) % 10) % 5) / 2)
    let um = parseInt(((((((dinheiroTotal % 100) % 50) % 20) % 10) % 5) % 2) / 1)


    console.log(dinheiroTotal);
    console.log(`${cem} nota(s) de R$ 100,00`);
    console.log(`${cinquenta} nota(s) de R$ 50,00`);
    console.log(`${vinte} nota(s) de R$ 20,00`);
    console.log(`${dez} nota(s) de R$ 10,00`);
    console.log(`${cinco} nota(s) de R$ 5,00`);
    console.log(`${dois} nota(s) de R$ 2,00`);
    console.log(`${um} nota(s) de R$ 1,00`);
}

bank()