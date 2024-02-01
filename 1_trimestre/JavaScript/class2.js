class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
  }
}

class Smartphone extends Dispositivo {
  constructor(nome, core, modelo) {
    super(nome);
    this.core = core;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone("Samsung", "Snapdragon", "Galaxy S10");
console.log(s1);
s1.ligar();
s1.ligar();