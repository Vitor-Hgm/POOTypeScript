"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    titulo;
    autor;
    paginas;
    lido;
    constructor(titulo, autor, paginas, lido = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    marcarComoLido() {
        this.lido = true;
    }
}
const livro = new Livro("O Hobbit", "J.R.R. Tolkien", 310);
livro.marcarComoLido();
console.log(livro.lido);
//# sourceMappingURL=Livro.js.map