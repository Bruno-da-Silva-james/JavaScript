var input = require('fs').readFileSync('./tst.js', 'utf8')
var lines = input.split('\n')

function consumptionCalc() {
    
    let values1 = lines.shift();


    console.log(values1);
}

consumptionCalc()

