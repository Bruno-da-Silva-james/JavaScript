var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calcDistance() {
    
    let value = lines.shift()

    console.log(`${value*2} minutos`);

}
calcDistance()