/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de Pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou no PIX, recebe 15% de desconto;
    - Em duas vezes,preço nomral de etiqueta sem juros;
    - Acima de duas vezes,preço nomral de etiqueta mais juros de 10%;
*/

const precoProduto = 100;
const formaDePagamento = 'Acima de duas vezes';

if (formaDePagamento === 'À vista Débito') {
    const valorTotal = precoProduto - ((precoProduto/100) * 10);
    console.log(valorTotal.toFixed(2));
} else if (formaDePagamento === 'À vista no Dinheiro ou no PIX') {
    const valorTotal = precoProduto - ((precoProduto/100) * 15);
    console.log(valorTotal.toFixed(2));
} else if (formaDePagamento === 'Em duas vezes') {
    const valorTotal = precoProduto;
    console.log(valorTotal.toFixed(2));
} else if (formaDePagamento === 'Acima de duas vezes') {
    const valorTotal = precoProduto + ((precoProduto/100) * 10);
    console.log(valorTotal.toFixed(2));
}
