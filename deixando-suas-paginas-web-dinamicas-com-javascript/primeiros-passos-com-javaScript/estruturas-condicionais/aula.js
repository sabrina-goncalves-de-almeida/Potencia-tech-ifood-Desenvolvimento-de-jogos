const numero = 10;

const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log("É par");
} else {
    console.log("É impar");
}

// Divisivel por 5

const num = 15;
const numDivisivelPor5 = (num % 5) === 0;

if (num === 0) {
    console.log("O número informado é inválido.")
} else if (numDivisivelPor5) {
    console.log("Sim");
} else {
    console.log("Não");
}
