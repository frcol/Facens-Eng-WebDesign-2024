// Objeto produto com método calcularTotal:
const produto = {
    nome: "Cadeira",
    preco: 100,
    quantidade: 4,
    
    calcularTotal: function() {
      return this.preco * this.quantidade;
    }
  };
  
  console.log(produto.calcularTotal());
  