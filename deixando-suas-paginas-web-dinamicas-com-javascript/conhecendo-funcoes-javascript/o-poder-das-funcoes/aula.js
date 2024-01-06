function teste() {
    console.log('Olá mundo!');
}

teste();

function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Victor');
sayMyName('Renan');

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez + quadradoDeDez);

function incrementaJuros(valor, percentualDeJuros) {
    const valorDeAcrescimo = (percentualDeJuros/100)*valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementaJuros(100, 10));
console.log(incrementaJuros(100, 15));
console.log(incrementaJuros(100, 20));
