const input = require('fs').readFileSync('./tst.js', 'utf8')
const lines = input.split(`\n`)


function timeConverter() {
    let N = parseInt(lines.shift())
    let hour = parseInt(N / 3600)
    let min = parseInt(N / 60)

    
    

    console.log(hour,min,N);
    console.log(N);
}

timeConverter()