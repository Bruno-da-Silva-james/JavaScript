const input = require('fs').readFileSync('./tst.js', 'utf8')
const lines = input.split(`\n`)

    function convertDays() {
        let days = parseInt(lines.shift())

        let anos = parseInt(days / 365)
        let meses = parseInt((days % 365) / 30)
        let dias = (days % 365) % 30

        console.log(`${anos} ano(s)`);
        console.log(`${meses} mes(es)`);
        console.log(`${dias} dia(s)`);
    }

    convertDays()