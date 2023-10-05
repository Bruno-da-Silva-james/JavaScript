const leitor = require('readline-sync')
let sala = leitor.questionInt("Ensira seu salario: ")

function inss(sal) {
    let inss = [0.93, 0.91, 0.88, 0.86]
    let salDescInss = 0
    if (sal <= 1302) { salDescInss = sal * inss[0] }
    if (sal >= 1303 && sal < 2570) { salDescInss = sal * inss[1] }
    if (sal >= 2571 && sal < 3856) { salDescInss = sal * inss[2] }
    if (sal >= 3857) { salDescInss = sal * inss[3] }
    return salDescInss
}


function irrf(sal) {
    let irrf = [0.93, 0.85, 0.77]
    let salDescIrrf = inss(sala)
    let liquido = 0
    if (sal <= 2112) { console.log("As taxas sao isentas"); }
    if (sal >= 2113 && sal < 3800) { liquido = salDescIrrf * irrf[0] }
    if (sal >= 3800 && sal < 7500) { liquido = salDescIrrf * irrf[1] }
    if (sal >= 7500) { liquido = salDescIrrf * irrf[2] }
    return liquido
}


function main() {
    console.log(`Seu salario bruto é ${sala}, ja com desconto do INSS fica ${inss(sala)},\ne o valor com desconto do IRRF fica ${irrf(sala)}`);
}
main()