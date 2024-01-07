// 1) Crie um programa que dado um número imprima sua tabuada
(function (){
    function tabuada(num){
        for (let i = 0; i <= 10; i++) {
            const multiplicacao = num * i;
            console.log(`${num} * ${i} = ${multiplicacao}`);
        }
    }
    tabuada(2);
})();

// Resposta dos professores
/*
const numero = 7;
for (let i = 1; i <= 10; i++) {
    console.log(i * numero);
}
*/
