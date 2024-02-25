var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function fuelCalc() {
    let spentTime = lines.shift();
    let avgSpeed = lines.shift();

    let calc = (spentTime * avgSpeed)/ 12

    console.log(calc.toFixed(3));

}

fuelCalc()