// requerendo, chamando a classe Aluno
const Aluno = require("./aluno")

// Criar um objeto e instanciando
const aluno1 = new Aluno(001, "Vitor", 28, 98)

// Exibir os dados
console.log(aluno1.maior())