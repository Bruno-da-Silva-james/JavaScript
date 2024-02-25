var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function consumptionCalc() {
    
    let values1 = parseInt(lines.shift());
    let values2 = parseFloat(lines.shift()).toFixed(1);

    let consumption = (values1 / values2);

    console.log(`${consumption.toFixed(3)} km/l`);
}

consumptionCalc();