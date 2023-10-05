
function timeSpent(hoO, hoH) {
    if (hoH > hoO) {
        return true
    }
    return false
}
function main() {
    let horaHoje = 1.19
    let horaOntem = 3.52

    console.log(timeSpent(horaOntem, horaHoje));

}
main()