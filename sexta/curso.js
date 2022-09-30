
module.exports = class Curso{
    constructor(id, nome, nota){
        this.id = id
        this.nome = nome
        this.nota = nota
        this.resultado = this.status()
    }

    status(){
        if (this.nota >= 6){
            return "Aprovado"
        } else{
            return 'Reprovado'
        }
        
    }

    toString(){
        this.status()
        return `O Aluno ${this.nome}, está ${this.status()}`
    }
}


/* Para testar e preciso remover o modulo require
const curso1 = new Curso(12, 'vitor', 7)
console.log(curso1.toString())
*/ 

