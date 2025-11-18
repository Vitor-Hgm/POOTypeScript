"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamento {
    processar() {
        console.log("Processando pagamento. ");
    }
}
class pagamentoCartao extends Pagamento {
}
class pagamentoBoleto extends Pagamento {
}
