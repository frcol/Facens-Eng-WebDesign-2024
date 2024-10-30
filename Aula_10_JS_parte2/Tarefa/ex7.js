// Função que retorna o maior número de um array:
//const encontraMaiorNumero = (array) => Math.max(...array);

function encontraMaiorNumero(array) {
  let maior = array[0];
  for (let num of array) {
    if (num > maior) {
      maior = num;
    }
  }
  return maior;
}

console.log(encontraMaiorNumero([10, 25, 30, 50, 5]));
