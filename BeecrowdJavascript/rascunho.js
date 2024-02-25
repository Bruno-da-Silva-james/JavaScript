//console.log(255 === 0b11111111); true


/*function areaCalc() {
    let arrayNumber = ['3.0 4.0 5.2']
    
    let valor = arrayNumber.split('');

    let A = parseFloat(valor[0]);
    let B = parseFloat(valor[1]);
    let C = parseFloat(valor[2]);
    
    let rectangleTriangle_formula = (A * C) / 2;
    let circle_formula = 3.14159 * Math.pow(C,2);
    let trapezium_formula = (A + B)*  C / 2; 
    let square_formula = Math.pow(B,2);
    let rectangle_formula = A * B;

    console.log(A,B,C) ;   
}

areaCalc();


// Node.js program to demonstrate the  
// fs.readFileSync() method 
  
// Include fs module
const fs = require('fs');
   
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./tst.js',
            {encoding:'utf8', flag:'r'});

let lines = data.split('')
// Display the file data
console.log(lines);
*/

const input = require('fs').readFileSync('./tst.js', 'utf8')
const lines = input.split(`\n`)