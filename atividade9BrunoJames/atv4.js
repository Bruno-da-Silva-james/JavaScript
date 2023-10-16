const leitor = require('readline-sync')
function main() {
    let menu = true
    while (menu) {
        console.log(`Produtos: \nBolsa  Tenis\nCalça  Salgadinho \nCamisa  Mochila\n--Sair--`);
        let produto = leitor.question("Ensira um produto: ")
        switch (produto) {
            case `Bolsa`:
                console.log(`R$69,90`);
                break;
            case `Tenis`:
                console.log(`R$120,90`);
                break;
            case `Calça`:
                console.log(`R$50,00`);
                break;
            case `Salgadinho`:
                console.log(`R$1000,90`);
                break;
            case `Camisa`:
                console.log(`R$25,50`);
                break;
            case `Mochila`:
                console.log(`R$85,99`);
                break;
            case `Sair`:
                console.log(`Adeus!`);
                menu = false
                break;
            default:
                console.log(`Este produto nao existe no banco de dados`);
                break;
        }

    }
}
main()