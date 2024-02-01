const rls = require("readline-sync");

class ContaClient {
  constructor(numeroConta, saldo, debito, credito) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.debito = debito;
    this.credito = credito;
  }

  caclularSaldo() {
    return this.saldo - this.debito + this.credito;
  }

  imprimirSaldo() {
    const saldoAtual = this.caclularSaldo();
    if (saldoAtual >= 0) {
      console.log(`Saldo positivo: ${saldoAtual}`);
    } else {
      console.log(`Saldo negativo: ${saldoAtual}`);
    }
  }
}

const digiteNumeroDaConta = rls.questionInt("Digite o número da conta: ");
const digiteSaldo = rls.questionFloat("Digite o saldo: ");
const digiteDebito = rls.questionFloat("Digite o débito: ");
const digiteCredito = rls.questionFloat("Digite o crédito: ");

const conta = new ContaClient(digiteNumeroDaConta, digiteSaldo, digiteDebito, digiteCredito);

conta.imprimirSaldo();
