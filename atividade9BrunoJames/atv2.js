const leitor = require('readline-sync')
function main() {
    let menu = true
    while (menu) {
        let cor = leitor.question("Ensira uma cor: ")
        switch (cor) {
            case `Verde`:
                console.log(`Me lembra um campo de mato`);
                break;
            case `Azul`:
                console.log(`Me lembra o mar`);
                break;
            case `Cinza`:
                console.log(`Me lembra tempo nublado`);
                break;
            case `Preto`:
                console.log(`Me lembra carros de luxo`);
                break;
            case `Branco`:
                console.log(`Me lembra limpeza`);
                break;
            case `Vermelho`:
                console.log(`Me lembra maça`);
                break;
            case `Marrom`:
                console.log(`Me lembra chocolate`);
                break;
            case `Sair`:
                console.log(`Adeus!`);
                menu = false
                break;
            default:
                console.log(`Essa cor nao existe no nosso banco de cores`);
                break;
        }

    }
}
main()