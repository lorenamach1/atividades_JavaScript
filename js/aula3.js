// ATIVIDADE AULA 3

// (A)
let minhaString = "Manipulando strings com JS";

// (B)
console.log(minhaString.toUpperCase());

// (C)
console.log(minhaString.slice(0,5));

// (D)
console.log(minhaString.length);
let mensagem = "A quantidade de caracteres dessa string é: ";
alert(mensagem + minhaString.length);

// (F)
let segundaString = "Vamos concatenar as duas strings";
let stringsConcatenadas = '';
stringsConcatenadas = `${minhaString} ${segundaString}`;
console.log(stringsConcatenadas);
