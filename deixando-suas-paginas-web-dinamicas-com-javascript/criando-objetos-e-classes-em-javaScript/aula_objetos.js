// objeto literal

const pessoa = {
    nome: 'Vitor J. Guerra',
    idade: 25,

    descrever: function(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} de altura.`)
    }
};

pessoa.descrever();

pessoa.altura = 1.69;

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa);

delete pessoa.idade;
console.log(pessoa);

//acessando valores de forma dinâmica

const atributo = 'nome';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);
