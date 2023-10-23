const leitor = require('readline-sync')

function acert() {
    console.log('Vamos jogar!');
    const n = 10
    let tentativas = 0
    let boll = true
    while (boll) {
        let num = leitor.questionInt("Chute um numero: ")
        if (num > n) {
            console.log('Errrrrou, é menor');
            tentativas++
        }
        if (num < n) {
            console.log('Errrrrou, é maior');
            tentativas++
        }
        if (num == n) {
            console.log('Acerto!');
            console.log(`Foram ${tentativas} tentativas!`);
            return boll = false
        }
    }
}
acert()
