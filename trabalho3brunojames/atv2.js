let arrayOriginal = [1, 5, 3, 6, 7, 10, 4, 2, 12]
let arrayPar = []
function print() {
    for (const number of arrayOriginal) {
        console.log(number);
    }
    console.log('');
}
function printDiv() {
    for (const number of arrayOriginal) {
        console.log(number / 10);
    }
    console.log('');
}

function printPar() {
    for (const number of arrayOriginal) {
        if ((number % 2) == 0) {
            arrayPar.push(number)
        }
    }
    console.log("\n", arrayPar);
}

function string() {
    let string = [
        `O index do elemento 0 é ${arrayOriginal[0]}`,
        `O index do elemento 1 é ${arrayOriginal[1]}`,
        `O index do elemento 2 é ${arrayOriginal[2]}`,
        `O index do elemento 3 é ${arrayOriginal[3]}`,
        `O index do elemento 4 é ${arrayOriginal[4]}`,
        `O index do elemento 5 é ${arrayOriginal[5]}`,
        `O index do elemento 6 é ${arrayOriginal[6]}`,
        `O index do elemento 7 é ${arrayOriginal[7]}`,
        `O index do elemento 8 é ${arrayOriginal[8]}`
    ]
    console.log(string);
}

function maior() {
    const min = Math.min(...arrayOriginal)
    const max = Math.max(...arrayOriginal)

    console.log(`O menor valor ${min}`); 
    console.log(`O maior valor${max}`);

}

print()
printDiv()
printPar()
string()
maior()