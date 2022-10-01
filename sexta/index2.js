// requerendo, chamando a classe Aluno
const Endereco = require("./endereco")

// requerendo, chamando a classe Curso
const Cliente = require('./cliente')

const enderecovitor = new Endereco("Rua A", 570, 'Santa Clara', 'Cataguases', 'MG')
const clientevitor = new Cliente('Vitor', 28, 'vitor@hotmail.com', enderecovitor)

console.log(clientevitor)