const leitor = require('readline-sync')

let tipoA
let tipoV
let tipoV2

let tipoIv
let tipoIv2

function main() {
    let menu = true
    while (menu) {
        tipoA = leitor.question(`Vertebrado ou Invertebrado? `)
        switch (tipoA) {
            case `vertebrado`:
                vert()
                menu = false
                break;
            case `invertebrado`:
                invert()
                menu = false
                break;
            default:
                console.log('A palavra ou esta digitada errada, ou nao foi respondida corretamente!')
                break;
        }
    }
    
}

function vert() {
    let menu = true
    while (menu) {
        tipoV = leitor.question(`Ave ou Mamifero? `)
        switch (tipoV) {
            case `ave`:
                subVert()
                menu = false
                break;
            case `mamifero`:
                subVert()
                menu = false
                break;
            default:
                console.log('A palavra ou esta digitada errada, ou nao foi respondida corretamente!')
                break;
        }
    }
}



function subVert() {
    if (tipoV === 'ave') {
        let menu = true
        while (menu) {
            tipoV2 = leitor.question(`Carnivoro ou Onivoro? `)
            switch (tipoV2) {
                case `carnivoro`:
                    console.log('Uma aguia');
                    menu = false
                    break;
                case `onivoro`:
                    console.log('Uma pomba');
                    menu = false
                    break;
                default:
                    console.log('A palavra ou esta digitada errada, ou nao foi respondida corretamente!')
                    break;
            }
        }
    }

    if (tipoV === 'mamifero') {
        let menu = true
        while (menu) {
            tipoV2 = leitor.question(`Onivoro ou herbivoro? `)
            switch (tipoV2) {
                case `onivoro`:
                    console.log('O homem');
                    menu = false
                    break;
                case `herbivoro`:
                    console.log('Uma vaca');
                    menu = false
                    break;
                default:
                    console.log('A palavra ou esta digitada errada, ou nao foi respondida corretamente!')
                    break;
            }
        }
    }
}

function invert() {
    let menu = true
    while (menu) {
        tipoIv = leitor.question(`Inseto ou Anelideo? `)
        switch (tipoIv) {
            case `inseto`:
                subInvert()
                menu = false
                break;
            case `anelideo`:
                subInvert()
                menu = false
                break;
            default:
                console.log('A palavra ou esta digitada errada, ou nao foi respondida corretamente!')
                break;
        }
    }
}

function subInvert() {
    if (tipoIv == 'inseto') {
        let menu = true
        while (menu) {
            tipoIv2 = leitor.question(`Hematofago ou Herbivoro? `)
            switch (tipoIv2) {
                case `hematofago`:
                    console.log('Uma pulga');
                    menu = false
                    break;
                case `herbivoro`:
                    console.log('Uma lagarta');
                    menu = false
                    break;
                default:
                    console.log('A palavra ou esta digitada errada, ou nao foi respondida corretamente!')
                    break;
            }
        }
    }

    if (tipoIv == 'anelideo') {
        let menu = true
        while (menu) {
            tipoIv2 = leitor.question(`Hematofago ou Onivoro? `)
            switch (tipoIv2) {
                case `hematofago`:
                    console.log('Uma sanguesuga');
                    menu = false
                    break;
                case `onivoro`:
                    console.log('Uma minhoca');
                    menu = false
                    break;
                default:
                    console.log('A palavra ou esta digitada errada, ou nao foi respondida corretamente!')
                    break;
            }
        }
    }
}


main()