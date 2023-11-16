
function main() {
    console.log(invertString("bom dia"));
    console.log(contarVogais('bom dia'));
}

function invertString(string) {
    return string.split('').reverse().join('')
}

function contarVogais(string) {
    let nVogal = string.replace(/(a|e|i|o|u)/gi, '').length
    return nVogal - string.length
}

