const input = require('fs').readFileSync('./tst.js', 'utf8')
const lines = input.split(`\n`)


function timeConverter() {
    let N = lines.shift()

    let hour = parseInt(N * 60)
    let min = parseInt(hour % 60)
    let sec = parseInt(min % 60)

    console.log(hour,min,sec);
}

timeConverter()