var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){

    let R = parseInt(lines.shift())
    let volume = (4/3.0) * 3.14159 * Math.pow(R,3)
    
    console.log(`VOLUME = ${volume.toFixed(3)}`)
}

main()