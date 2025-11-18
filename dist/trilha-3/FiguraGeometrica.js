"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    raio;
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class Quadrado extends FiguraGeometrica {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    base;
    altura;
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach((figura, index) => {
        console.log(`Área da figura ${index + 1}: ${figura.calcularArea()}`);
    });
}
const figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 8),
];
imprimirAreas(figuras);
