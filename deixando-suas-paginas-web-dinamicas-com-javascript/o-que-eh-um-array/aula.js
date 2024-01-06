const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos[0]);

// Adicionar alunos a lista

alunos.push('Renan');
console.log(alunos[3]);

alunos[4] = 'Vinicius';

console.log(alunos);

const listaVazia = [];

listaVazia.push('Teste');
listaVazia.push(3);
listaVazia.push('Ana');
listaVazia.push(10);

console.log(listaVazia);

// Remover de uma lista

listaVazia.pop(); // retira o último
console.log(listaVazia);

listaVazia.shift(); // retira o primeiro
console.log(listaVazia);

delete listaVazia[0]; // retira de uma posição especifica, sem retirar o espaço da lista, ocupa uma posição, mas não guarda nada na memória.
console.log(listaVazia);


// Estruturas de reptição

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length); // verifica tamanho da lista

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}

// for com uma string
const nome = 'Vitor Johansen Guerra';

for (let n = 0; n < nome.length; n++) {
    console.log(nome[n]);
    
}
