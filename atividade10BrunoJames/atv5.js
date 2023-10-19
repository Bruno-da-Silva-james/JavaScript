function par(num) {
    let soma = num
    for (let i = 1; i > num; i ++) {
        soma *= i 
    }
    console.log(soma);
}

console.log(par(10));