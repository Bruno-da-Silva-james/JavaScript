const leitor = require('readline-sync')

function coffeMachine() {
    let menu = true
    let moneyTotal = 0.0
    let qntExpresso = 0
    let qntCapuccino = 0
    let qntLate = 0

    while (menu) {
        console.log(`\n1 - café expresso;\n 2 - café capuccino;\n 3 - leite com café;\n 4 - totalizar vendas;`);
        let option = leitor.questionInt('Ensira uma opcao: ')
        switch (option) {
            case 1:
                moneyTotal = moneyTotal + 0.75
                qntExpresso = qntExpresso + 1
                console.log(`0.75 cents added to the check`);
                break;

            case 2:
                moneyTotal = moneyTotal + 1.00
                qntCapuccino = qntCapuccino + 1
                console.log(`1.00 cents added to the check`);
                break;

            case 3:
                moneyTotal = moneyTotal + 1.25
                qntLate = qntLate + 1
                console.log(`1.25 cents added to the check`);
                break;

            case 4:
                console.log(`Quantity of expresso sold: ${qntExpresso}\nQuantity of capuccino sold: ${qntCapuccino}\nQuantity of latte: ${qntLate}`);
                console.log(`Total da conta: ${moneyTotal}`);
                
                menu = false
                break;
            default:
                console.log(`Wrong value`);
                break;
        }
    }


}

coffeMachine()