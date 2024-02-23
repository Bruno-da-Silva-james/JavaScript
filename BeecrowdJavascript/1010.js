var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    
    let productCode = parseInt(lines.shift())
    let productUnits = parseInt(lines.shift())
    let priceUnits = parseFloat(lines.shift())
    let A = priceUnits * productUnits
    
    console.log(`VALOR A PAGAR: R$ ${A.toFixed(2)}`)
}

main()