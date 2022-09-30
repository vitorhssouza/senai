//const requeri = input("prompt-sync")({sigint:true});

class Tijolo{
    constructor(altura, base){
    this.altura = altura;
    this.base = base
    }

    area(){
        return this.altura * this.base;
    }

    soma(){
        return this.altura + this.base;
    }

    multiplicar(valor){
        return (this.altura + this.base) * valor
    }
}

var tijolo1 = new Tijolo(2, 5)

console.log(tijolo1.area())
console.log(tijolo1.soma())
console.log(tijolo1.multiplicar(2))