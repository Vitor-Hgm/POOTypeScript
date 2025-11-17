class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotal (): number{
        return this.preco * this.quantidade;
    }

  
}

const produto1 = new Produto("Calça", 150, 20 );
console.log(produto1.valorTotal());