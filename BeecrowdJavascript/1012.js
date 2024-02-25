var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function areaCalc() {
    
    
    let valor = lines.shift().split(' ');

    let A = parseFloat(valor[0]);
    let B = parseFloat(valor[1]);
    let C = parseFloat(valor[2]);
    
    let rectangleTriangle_formula = (A * C) / 2;
    let circle_formula = 3.14159 * Math.pow(C,2);
    let trapezium_formula = (A + B)*  C / 2; 
    let square_formula = Math.pow(B,2);
    let rectangle_formula = A * B;

    console.log(`TRIANGULO: ${rectangleTriangle_formula.toFixed(3)}\nCIRCULO: ${circle_formula.toFixed(3)}\nTRAPEZIO: ${trapezium_formula.toFixed(3)}\nQUADRADO: ${square_formula.toFixed(3)}\nRETANGULO: ${rectangle_formula.toFixed(3)}`); 
}

areaCalc();