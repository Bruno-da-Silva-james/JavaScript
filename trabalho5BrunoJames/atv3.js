const pessoa = new obj_pessoa('Bruno', 18, 'Futuro backend',42,'casado');

function obj_pessoa(nome,idade,profissao,calcadoT,rel) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    this.calcadoT = calcadoT
    this.rel = rel
    this.apresentar = `Meu nome e ${nome} tenho ${idade} anos, sou ${rel}, trabalho com ${profissao} e calço ${calcadoT}`
}
console.log(pessoa.apresentar);

