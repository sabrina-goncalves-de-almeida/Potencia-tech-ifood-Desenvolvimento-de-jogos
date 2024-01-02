/*
    1) Faça um algorítmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;    
*/

const nota1 = 10;
const nota2 = 10;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(media, 'Reprovação');
} else if (media >= 5 && media <= 7) {
    console.log(media, 'Recuperação');
} else if (media > 7) {
    console.log(media, 'Passou de semestre');
} else {
    console.log('Cálculo inválido, verifique as notas');
}