const leitor = require('readline-sync')


function main() {

    let menu = true
    while (menu) {
        let n1 = leitor.questionInt('Se deseja sair digite 10\nEnsira um numero de 1 a 5: ')
        switch (n1) {
            case 1:
                console.log('Ola!');
                break;
            case 2:
                console.log('Bom dia!');
                break;
            case 3:
                console.log('Tudo bem?');
                break;
            case 4:
                console.log('Qual sua idade?');
                break;
            case 5:
                console.log('Boa noite!');
                break;
            case 10:
                console.log('Adeus!');
                menu = false
                break;
            default:
                console.log('Numero invalido, ensire um numero de 1 a 5');
                break;
        }
    }
}
main()