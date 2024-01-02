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

const precoEtanol = 5.60, precoGasolina = 5.79, tipoDeCombustivel = "gasolina", consumoCombustivelPorKm = 10, distanciaEmKm = 100;

if (tipoDeCombustivel === "etanol") {
    const valorTotal1 = precoEtanol * (distanciaEmKm/consumoCombustivelPorKm);
    console.log("Valor total da viagem: \n", "R$", valorTotal1.toFixed(2))
} else if (tipoDeCombustivel === "gasolina") {
    const valorTotal2 = precoGasolina * (distanciaEmKm/consumoCombustivelPorKm);
    console.log("Valor total da viagem: \n", "R$", valorTotal2.toFixed(2))
} else {
    console.log("Tipo de combustível é inválido.")
}