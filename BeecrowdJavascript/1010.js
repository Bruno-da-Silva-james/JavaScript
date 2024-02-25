var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function cartCalc(){
        
    let valor1 = lines.shift().split(' ');
    let valor2 = lines.shift().split(' ');

    let codProd1 = parseInt(valor1[0]);
    let priceUnit1 = parseInt(valor1[1]);
    let productUnits1 = parseFloat(valor1[2]);
    let prodA = priceUnit1 * productUnits1;
    
    let codProd2 = parseInt(valor2[0]);
    let priceUnit2 = parseInt(valor2[1]);
    let productUnits2 = parseFloat(valor2[2]);
    let prodB = priceUnit2 * productUnits2;
    
    let sum = prodA + prodB;

    console.log(`VALOR A PAGAR: R$ ${sum.toFixed(2)}`);
}

cartCalc()