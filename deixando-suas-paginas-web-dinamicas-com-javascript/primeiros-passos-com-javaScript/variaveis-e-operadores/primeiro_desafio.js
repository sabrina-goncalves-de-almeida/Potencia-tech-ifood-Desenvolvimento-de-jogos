/*Faça um programa para calcular o valor de uma viagem:

Você terá 3 variáveis, sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio do combustível do carro em KM;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distancia = 1580;

const litrosConsumidos = distancia/kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
