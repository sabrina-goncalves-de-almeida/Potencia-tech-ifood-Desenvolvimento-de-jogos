/*
    1 - Crie uma classes para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometros rodados;
    Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);
const palio = new Carro('Fiat', 'Preto', 1/10)
console.log(uno);

console.log(uno.calcularGastoDePercurso(70,5));
console.log(palio.calcularGastoDePercurso(70,5));
