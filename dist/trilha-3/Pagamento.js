"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe base
class Pagamento {
}
// Subclasse para pagamento com cartão
class PagamentoCartao extends Pagamento {
    numeroCartao;
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    validarCartao() {
        // Validação simples: cartão precisa ter 16 dígitos numéricos
        const regex = /^[0-9]{16}$/;
        return regex.test(this.numeroCartao);
    }
    processar() {
        console.log("\nProcessando pagamento com cartão...");
        if (!this.validarCartao()) {
            console.log("❌ Número do cartão inválido!");
            return;
        }
        console.log(`✔️ Cartão válido! Pagamento aprovado.`);
    }
}
// Subclasse para pagamento com boleto
class PagamentoBoleto extends Pagamento {
    gerarCodigoBoleto() {
        const codigo = Math.floor(Math.random() * 999999999999).toString();
        return codigo.padStart(12, "0");
    }
    processar() {
        console.log("\nProcessando pagamento via boleto...");
        const codigo = this.gerarCodigoBoleto();
        console.log(`✔️ Boleto gerado! Código: ${codigo}`);
    }
}
// Função que usa polimorfismo
function processarPagamentos(pagamentos) {
    pagamentos.forEach((pag, index) => {
        console.log(`\nPagamento ${index + 1}:`);
        pag.processar();
    });
}
// Testando
const pagamentos = [
    new PagamentoCartao("1234567812345678"),
    new PagamentoCartao("123"),
    new PagamentoBoleto(),
    new PagamentoBoleto(),
];
processarPagamentos(pagamentos);
