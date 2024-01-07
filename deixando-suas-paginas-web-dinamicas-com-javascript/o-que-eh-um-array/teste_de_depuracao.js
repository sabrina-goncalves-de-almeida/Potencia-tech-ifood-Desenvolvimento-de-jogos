const notas = [];
// console.log('Passou por aqui', notas);
notas.push(5);
// console.log('Passou por aqui', notas);
notas.push(7);
// console.log('Passou por aqui', notas);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let k = 0; k < notas.length; k++) {
    const nota = notas[k];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);
