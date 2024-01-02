
function calculaJuros(valor, percentualDeJuros) {
    const valorDeAcrescimo = (percentualDeJuros/100)*valor;
    return valor + valorDeAcrescimo;
}

function main(){
    console.log('Função principal');
    calculaJuros(100, 10);
}

main();
