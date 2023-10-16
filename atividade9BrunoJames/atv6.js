const leitor = require('readline-sync')


function main() {

    let menu = true
    while (menu) {
    let trans = leitor.question('Ensira seu meio de transporte: ')
        switch (trans) {
            case `Carro`:
                console.log('70km/h');
                break;
            case `Bike`:
                console.log('12km/h');
                break;
            case `ônibus`:
                console.log('55km/h');
                break;
            case `Sair`:
                console.log('Adeus!');
                menu = false
                break;
            default:
                console.log('Meio de transporte invalido');
                break;
        }
    }
}
main()