// Função para retornar apenas os números ímpares de um array:
const numerosImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const filtraImpares = (array) => array.filter(numero => numero % 2 !== 0);

function filtraImpares(array) {
    let newArray = [];

    for (let num of numerosImpares) {
        if (num % 2 !== 0) {
            newArray.push(num);
        }
    }

    return newArray
}

console.log(filtraImpares(numerosImpares));
