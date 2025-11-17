"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agenda {
    compromissos;
    constructor() {
        this.compromissos = [];
    }
    adicionar(compromissos) {
        this.compromissos.push(compromissos);
    }
    listar() {
        console.log("Compromissos da agenda: ");
        this.compromissos.forEach((c, index) => {
            console.log(`${index + 1} . ${c}`);
        });
    }
}
const agenda1 = new Agenda();
agenda1.adicionar("7:00: ir para o trbalho");
agenda1.adicionar("11:30: horario de almoço");
agenda1.listar();
//# sourceMappingURL=Agenda.js.map