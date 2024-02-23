var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
let n = 3.14159

let variableR_input = parseFloat(lines.shift())
let A = n * Math.pow(variableR_input,2) 

console.log(`A=${A.toFixed(4)}`)

}

main()