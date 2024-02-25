var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function isMaior() {
    
    let arrayNumbers = lines.shift().split(' ');
    
    let value1 = parseInt(arrayNumbers[0]);
    let value2 = parseInt(arrayNumbers[1]);
    let value3 = parseInt(arrayNumbers[2]);

    const firstFormula = (value1 + value2 + Math.abs(value1 - value2)) / 2;
    const lastFormula = (firstFormula + value3 + Math.abs(firstFormula - value3)) / 2;

    console.log(`${lastFormula} eh o maior`);
}

isMaior();