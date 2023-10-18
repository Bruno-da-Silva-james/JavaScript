const leitor = require('readline-sync')

function main() {
        let nota = leitor.questionInt("Ensira sua nota de 0 a 100: ")
        let conc
        if (nota <= 100 || nota > 80) { conc = `A` }
        if (nota <= 80 && nota > 60) { conc = `B` }
        if (nota <= 60 && nota > 40) { conc = `C` }
        if (nota < 40) { conc = `F` }
        switch (conc) {
            case `A`:
                console.log('A');
                break;
            case `B`:
                console.log('B');
                break;
            case `C`:
                console.log('C');
                break;
            case `F`:
                console.log('F');
                break;
            default:
                break;
        }
    }

main()