const leitor = require('readline-sync')

class Fila {
    constructor() {
        this.filaT = []
    }


    createTicket(element) {
        this.filaT.push(element);
    }

    removeTicket() {
        if (this.isEmpty()) {
            return `A fila esta vazia`
        }
        return this.filaT.shift()
    }

    showLast() {
        if (this.isEmpty()) {
            return `A fila esta vazia`
        }
        return this.filaT[0]
    }

    isEmpty(){
        return this.filaT.length === 0
    }

    quantTicket(){
        return this.filaT.length
    }
}
let ticketErro = leitor.questionInt("Ensira o numero do erro: ")

const fila = new Fila();
fila.createTicket(ticketErro)

//fila.removeTicket()

console.log(fila.showLast());

console.log(fila.quantTicket());

