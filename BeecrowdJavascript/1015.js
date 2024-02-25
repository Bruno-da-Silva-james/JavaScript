var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function distanceCalc() {
    let values = lines.shift().split(' ');
    let values1 = lines.shift().split(' ');

    let x1 = parseFloat(values[0])
    let y1 = parseFloat(values[1])

    let x2 = parseFloat(values1[0])
    let y2 = parseFloat(values1[1])

    let formula = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

    console.log(formula.toFixed(4));

}

distanceCalc()