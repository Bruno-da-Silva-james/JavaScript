const input = require('fs').readFileSync('./tst.js', 'utf8')
const lines = input.split(`\n`)

function bank() {
    let dinheiroTotal = lines.shift()

    let cem = 0
    let cinquenta = 0
    let vinte = 0
    let dez = 0 
    let cinco = 0 
    let dois = 0
    let um = 0 

    for (let i = 0; i < parseInt(dinheiroTotal / 100); i++) {
        cem = cem + 100 
    }

    
    console.log(cem);

}

bank()