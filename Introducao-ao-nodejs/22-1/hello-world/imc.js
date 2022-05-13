const readline = require('readline-sync');
const peso = readline.questionInt('Qual é o seu peso?');
const altura = readline.questionInt('Qual é o sua altura?');

const calculaIMC = (peso, altura) => {
  const alt = altura / 100;
  const result = peso / alt ** 2;
  console.log(result);
  return result;
}

calculaIMC(peso, altura);

module.exports = calculaIMC;
