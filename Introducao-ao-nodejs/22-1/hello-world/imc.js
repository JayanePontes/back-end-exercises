const peso_fixo = 60;
const altura_fixa = 160;

const calculaIMC = (peso, altura) => {
  const alt = altura / 100;
  const result = peso / alt ** 2;
  console.log(result);
  return result;
}

calculaIMC(peso_fixo, altura_fixa);

module.exports = calculaIMC;
