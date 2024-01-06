/*Faça um programa para calcular o valor de uma viagem:

Você terá 3 variáveis, sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio do combustível do carro em KM;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

let precoCombustivel = 5.79, gastoMedioCombustivel = 10, distanciaDaViagem = 100;

console.log("O valor gasto na viagem será: \n", "R$",(precoCombustivel*(distanciaDaViagem/gastoMedioCombustivel)));
