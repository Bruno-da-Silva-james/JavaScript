const leitor = require('readline-sync')
let agenda = []

//funcao principal com switch case que permite usar perguntas para criar um loop de repeticao e criar quantos contatos quiser
function main() {
    let menu = true
    while (menu) {
        let valueCont = leitor.questionInt('\n1 Inserir contato \n2 Listar contatos \n3 Parar listagem\n')
        switch (valueCont) {
            case 1:
                let novoContato = criarContato()
                agenda.push(novoContato)
                break;
            case 2:
                listarContato(agenda)
                break;
            case 3:
                menu = false
                break;
            default:
                console.log("Opcao invalida...");
                break;
        }
    }
    console.log(criadoCtt)
}


//Funcao para listar contatos usando foreach, com o array agenda de parametro.
function listarContato(agenda) {
    agenda.forEach(a => {
        console.log("nome: ", a.nome);
        console.log("num: ", a.numero);
        console.log("email: ", a.email);
    });
}

//funcao de objeto que pega valores do criarContato e armazena em uma "variavel"
function Contato(nome, numero, email) {
    this.nome = nome
    this.numero = numero
    this.email = email
}

//funcao que preenche as variaveis e armazena os parametros dentro da funcao objeto contato, e retorna o array contato
function criarContato() {
    let nome = leitor.question("Insira seu nome: ")
    let numero = leitor.questionInt('Insira seu numero: ')
    let email = leitor.question('Insira seu email? ')
    let contato = new Contato(nome, numero, email)
    return contato
}

main()
