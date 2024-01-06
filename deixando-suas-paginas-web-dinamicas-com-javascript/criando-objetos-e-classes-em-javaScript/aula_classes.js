class Pessoa{
    nome;
    idade;
    dataDeNascimento;

    // constructor(){
    //     this.nome = 'teste';
    //     this.idade = 20;
    // }

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.dataDeNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos de idade, nasci no ano ${this.dataDeNascimento}.`);
    }
}

const vitor = new Pessoa('Vitor J. Guerra', 25);

console.log(vitor);

const renan = new Pessoa('Renan J. Paula', 30);

console.log(renan);

vitor.descrever();
renan.descrever();

// compara pesosoas

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const ana = new Pessoa('Ana', 25);
const alana = new Pessoa('Alana', 30);

compararPessoas(ana, alana);
