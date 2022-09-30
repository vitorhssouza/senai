// requerendo, chamando a classe Aluno
const Aluno = require("./aluno")

// requerendo, chamando a classe Curso
const Curso = require('./curso')

// Criar um objeto e instanciando
const aluno1 = new Aluno(001, "Vitor", 28, 7)

// Exibir os dados
//console.log(aluno1.aprovado())

// console.log(aluno1.toString())

// Criando objeto e instanciando 
const curso1 = new Curso(12, 'BackEnd', 7)
//console.log(curso1.toString())

// Teste 

const cursovitor = new Curso(101, 'BackEnd', 5)
const alunovitor = new Aluno(001, 'Vitor', 28, cursovitor)

console.log(alunovitor)