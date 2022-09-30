// requerendo, chamando a classe Aluno
const Aluno = require("./aluno")

// Criar um objeto e instanciando
const aluno1 = new Aluno(001, "Vitor", 28, 7)

// Exibir os dados
console.log(aluno1.aprovado())