"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    preco;
    quantidade;
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorTotal() {
        return this.preco * this.quantidade;
    }
}
const produto1 = new Produto("Calça", 150, 20);
console.log(produto1.valorTotal());
