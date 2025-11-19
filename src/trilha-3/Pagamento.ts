// Classe base
abstract class Pagamento {
  abstract processar(): void;
}

// Subclasse para pagamento com cartão
class PagamentoCartao extends Pagamento {
  private numeroCartao: string;

  constructor(numeroCartao: string) {
    super();
    this.numeroCartao = numeroCartao;
  }

  private validarCartao(): boolean {
    // Validação simples: cartão precisa ter 16 dígitos numéricos
    const regex = /^[0-9]{16}$/;
    return regex.test(this.numeroCartao);
  }

  processar(): void {
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
  private gerarCodigoBoleto(): string {
    const codigo = Math.floor(Math.random() * 999999999999).toString();
    return codigo.padStart(12, "0");
  }

  processar(): void {
    console.log("\nProcessando pagamento via boleto...");
    const codigo = this.gerarCodigoBoleto();
    console.log(`✔️ Boleto gerado! Código: ${codigo}`);
  }
}

// Função que usa polimorfismo
function processarPagamentos(pagamentos: Pagamento[]): void {
  pagamentos.forEach((pag, index) => {
    console.log(`\nPagamento ${index + 1}:`);
    pag.processar(); 
  });
}

// Testando
const pagamentos: Pagamento[] = [
  new PagamentoCartao("1234567812345678"),
  new PagamentoCartao("123"), 
  new PagamentoBoleto(),
  new PagamentoBoleto(),
];

processarPagamentos(pagamentos);
