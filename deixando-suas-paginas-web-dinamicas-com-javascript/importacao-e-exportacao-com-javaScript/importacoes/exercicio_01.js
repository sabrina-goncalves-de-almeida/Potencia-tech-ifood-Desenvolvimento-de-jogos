/*
    Uma sala tem 5 alunos e para cada aluno foi sorteado um número de 1 -100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
     5
     50
     10
     98
     23
    
    Saída:
     98

*/
(function(){
    const {gets, print} = require('./funcoes_auxiliares');

    function maiorNumero(array){
        let num = 0;
        for (let n = 0; n < array.length; n++) {
            if(array[n] > num){
                num = array[n];
            }
            
        }
        return num;
    }

    const array = [];
    for (let i = 0; i < 6; i++) {
        array[i] = gets();
    }
    print(maiorNumero(array));
})();

// // Resolução do professor

// const {gets, print} = require('./funcoes_auxiliares');

// const numerosSorteados = [];

// for (let i = 0; i <= 5; i++) {
//     const numeroSorteado = gets();
//     numerosSorteados.push(numeroSorteado);
// }

// let maiorValor = 0;

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numeroSorteado = numerosSorteados[i];
//     if(numeroSorteado > maiorValor){
//         maiorValor = numeroSorteado;
//     }
// }

// print(maiorValor);

// // 2ª Resolução do professor

// const {gets, print} = require('./funcoes_auxiliares');

// const quantidadeDeAlunos = gets();

// let maiorValor = 0;

// for (let i = 0; i < quantidadeDeAlunos; i++) {
//     const numeroSorteado = gets();
//     if(numeroSorteado > maiorValor){
//         maiorValor = numeroSorteado;
//     }
// }

// print(maiorValor);
