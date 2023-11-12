const leitor = require('readline-sync')
//atv 1 e 2
/*
let pessoa1 = new pessoa('Bruno', 18, 'TJ')

function pessoa(nome,idade,profissao) {
    this.nome = nome 
    this.idade = idade 
    this.profissao = profissao 
    this.apresentacao = `Meu nome é ${nome} tenho ${idade} anos e trabalho em ${profissao}` 
}

console.log(pessoa1.apresentacao);

//atv 3 e 4
const carroVar = new carro(`Subaru`, `Impreza WRX`, 1999)

function carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.informacao = `Carro da marca ${marca} do modelo ${modelo} do ano ${ano}`

}
console.log(carroVar.informacao);

const prod = new produto('sabão', 4.99, 3)

function produto(nome,preco,unid) {
    this.nome = nome
    this.preco = preco
    this.unid = unid

    this.total = preco * unid
}

console.log(prod.total);

//atv 7 e 8

let saque = leitor.questionInt('Qual valor deseja sacar? ')

const contaBanco = new banco('Bruno', 310, saque)

function banco(nome, saldo, saque) {
    this.nome = nome
    this.saldo = saldo 
    this.sacar = `Seu saldo ficou ${saldo - saque}`
}
console.log(contaBanco.sacar);

*/

const livro = new fLivro(`Senhor dos aneis`,`J. R. R. Tolkien`, 576)

function fLivro(titulo,autor,paginas) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.ler = `O livro esta sendo lido`
}

console.log(livro.ler);