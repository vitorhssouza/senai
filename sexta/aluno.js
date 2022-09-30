// CLasse 
// OBS o modulo exports serve para outras classes poderem utilizalas 

module.exports = class Aluno{
    // Caracteristica = Propriedades do aluno
    constructor(matricula, nome, idade, nota){
        this.matricula = matricula
        this.nome = nome
        this.idade = idade
        this.nota = nota
    }

    maior(){
        return this.idade >= 18;
    }

    aprovado(){
        return this.nota >= 6;
    }

}