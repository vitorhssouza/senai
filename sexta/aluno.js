// CLasse 
// OBS o modulo exports serve para outras classes poderem utilizalas 

module.exports = class Aluno{
    // Caracteristica = Propriedades do aluno
    constructor(matricula, nome, idade, curso){
        this.matricula = matricula
        this.nome = nome
        this.idade = idade
        this.curso = curso
    }

    maior(){
        return this.idade >= 18;
    }

    toString(){
        return `O aluno ${this.nome} tem ${this.idade} anos`
    }

}