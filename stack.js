class stack {
    constructor() {
        this.stack = []
    }

    empilhar(item) {
        this.stack.push(item)
    }

    desempilhar() {
        if (this.isEmpty()) {
            return `Esta vazio`
        }
        this.stack.pop()
    }

    topo() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }
        return this.stack[this.stack.length - 1];
    }

    historico(){
        return this.stack.length
    }

    isEmpty() {
        return this.stack.length === 0
    }
}

let pilha = new stack();

pilha.empilhar(1)
pilha.empilhar(13)
pilha.empilhar(42)

console.log(pilha.historico());
console.log(pilha.stack);
