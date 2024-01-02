function escrevaMeuNome(nome){
    return 'Meu nome é: ' + nome;
}

function verificaAIdade(idade){
    if(idade < 18){
        console.log('Você é menor de idade');
    } else {
        console.log('Você é maior de idade');
    }
}

function verificaIdadeEChamaNome(idade){
    if(idade < 18){
        console.log(escrevaMeuNome('Sabrina') + '. Você é menor de idade');
    } else {
        console.log(escrevaMeuNome('Sabrina') + '. Você é maior de idade');
    }
}

(function (){
    console.log(escrevaMeuNome('Sabrina'));
    console.log(escrevaMeuNome('Vitor'));
    console.log(escrevaMeuNome('Renan'));

    verificaAIdade(17);
    verificaAIdade(18);

    verificaIdadeEChamaNome(17);
    verificaIdadeEChamaNome(18);
})();