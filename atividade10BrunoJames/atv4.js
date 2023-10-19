function isPrimo(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
        return true
    }
}

function checaPrimo(limite) {
    for (let n = 2; n <= limite; n++) {
        if (isPrimo(n)) { console.log(n); }
    }
}

checaPrimo(100)

