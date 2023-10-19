function par(num) {
    let soma = 0
    for (let i = 0; i <= num; i += 2) {
        soma += i
    }
    return soma
}

console.log(par(50));