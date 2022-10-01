module.exports = class Cliente{
    constructor(nome, idade, email, endereco){
        this.nome = nome
        this.idade = idade
        this.email = email
        this.endereco = endereco
        this.data_cadastro = new Date()
    }

}
