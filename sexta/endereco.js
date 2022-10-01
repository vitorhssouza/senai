module.exports = class Endereco{
    constructor(rua, numero, bairro, cidade, uf){
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.uf = uf
    }

    toString(){
        return `Rua: ${this.rua}, ${this.numero} - bairro: ${this.bairro} - cidade: ${this.cidade} - UF: ${this.uf}`
    }
}