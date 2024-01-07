// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado
(function (){
    const listaTeste = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function apenasPares(lista){
        for (let i = 0; i <= lista.length; i++) {
            const numero = lista[i];
            if (numero % 2 === 0){
                console.log(numero);
            }
        }
    }

    apenasPares(listaTeste);
})();

// Resposta dos professores
/*
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let k = 0; k < numeros.length; k++) {
    const numero = numeros[k];
    if(numero % 2 === 0){
        console.log(numero);
    }
}
*/
