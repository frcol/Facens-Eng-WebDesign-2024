// Loop para mostrar propriedades e valores do objeto endereco:
const endereco = {
    rua: "Av. Brasil",
    numero: 1000,
    bairro: "Centro",
    cidade: "Sorocaba"
  };
  
  for (let propriedade in endereco) {
    console.log(`${propriedade}: ${endereco[propriedade]}`);
  }
  