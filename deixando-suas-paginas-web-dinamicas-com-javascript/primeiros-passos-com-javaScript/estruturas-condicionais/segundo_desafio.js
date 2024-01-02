/*
Faça um programa para calcular o valor de uma viagem:

Você terá 5 variáveis, sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro
    4 - Gasto médio do combustível do carro em KM;
    5 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distancia = 100;
const tipoCombustivel = 'gasolina';

const litrosConsumidos = distancia/kmPorLitros;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else if (tipoCombustivel === 'gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
