const leitor = require('readline-sync')


function main() {

    let menu = true
    while (menu) {
    let n = leitor.questionInt('Ensira um numero de 1 a 3, caso queira sair use 4: \n')
        switch (n) {
            case 1:
                console.log('Certo');
                break;
            case 2:
                console.log('Errado');
                break;
            case 3:
                console.log('Meio certo');
                break;
            case 4:
                console.log('n4');
                menu = false
                break;
            default:
                console.log('Numero invalido');
                break;
        }
    }
}
main()