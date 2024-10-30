// Objeto aluno com método mostrarInformacoes:
const aluno = {
    nome: "João",
    idade: 20,
    curso: "Computação",
    matricula: "12345",
    
    mostrarInformacoes: function() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Matrícula: ${this.matricula}`);
    }
  };
  
  aluno.mostrarInformacoes();
  