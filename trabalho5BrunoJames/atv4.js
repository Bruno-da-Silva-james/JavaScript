let numero = [2,5,4,3,7]

function main() {
    console.log(somarArray(numero));
}
function somarArray(arrayNumero) {
    let soma = 0
    for (let i = 0; i < numero.length; i++) {
        soma += arrayNumero[i]         
    }
    return soma
}

main()