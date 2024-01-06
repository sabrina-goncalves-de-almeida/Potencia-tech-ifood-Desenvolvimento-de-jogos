/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de Pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou no PIX, recebe 15% de desconto;
    3 - Em duas vezes,preço nomral de etiqueta sem juros;
    4 - Acima de duas vezes,preço nomral de etiqueta mais juros de 10%;
*/

function aplicarDesconto(precoEtiqueta, desconto){
    return precoEtiqueta - (precoEtiqueta * (desconto/100));
}

function aplicarJuros(precoEtiqueta, juro){
    return precoEtiqueta + (precoEtiqueta * (juro/100));
}

(function (){
    const precoEtiqueta = 100;
    const formaDePagamento = 1;
    
    if (formaDePagamento === 'À vista Débito') {
        console.log(aplicarDesconto(formaDePagamento, 10).toFixed(2));
    } else if (formaDePagamento === 'À vista no Dinheiro ou no PIX') {
        console.log(aplicarDesconto(formaDePagamento, 15).toFixed(2));
    } else if (formaDePagamento === 'Em duas vezes') {
        console.log(precoEtiqueta.toFixed(2));
    } else if (formaDePagamento === 'Acima de duas vezes') {
        console.log(aplicarJuros(formaDePagamento, 10).toFixed(2));
    }
})();
