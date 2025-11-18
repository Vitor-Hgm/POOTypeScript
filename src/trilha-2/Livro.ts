class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  marcarComoLido(): void {
    this.lido = true;
  }
}

const livro = new Livro("O Hobbit", "J.R.R. Tolkien", 310);
livro.marcarComoLido();

console.log(livro.lido); 
