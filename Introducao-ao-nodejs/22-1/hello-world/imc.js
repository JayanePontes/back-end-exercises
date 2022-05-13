const readline = require('readline-sync');
const peso = readline.questionFloat('Qual é o seu peso?');
const altura = readline.questionInt('Qual é o sua altura?');
/* const magreza = 18.5;
const normal =  */
const calculaIMC = (peso, altura) => {
  const alt = altura / 100;
  const result = peso / alt ** 2;
  console.log(result);
  if (result <= 18.5) {
    console.log('Abaixo do peso');
  } else if (result > 18.5 && result <= 24.9) {
    console.log('Peso normal');
  } else if (result >= 25.0 && result <= 29.9) {
    console.log('Acima do peso');
  } else if (result >= 30.0 && result <= 34.9) {
    console.log('Obesidade grau I');
  } else if (result >= 35.5 && result <= 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade grau III');
  }
  return result;
}

calculaIMC(peso, altura);

module.exports = calculaIMC;
