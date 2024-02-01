const pessoas = {
	nome: "Walber",
	sobrenome: "Vaz"
};

console.log(pessoas["sobrenome"]);

const funcionario = new Object();
funcionario.nome = "Pedro";
funcionario.sobrenome = "Miguel";

console.log(funcionario.nome);

function criarPessoa(nome, sobrenome, i) {
	return {
		nome,
		sobrenome,
		idade: i,
		nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`
		}
	};
};

const p1 = criarPessoa("Walber", "Silva", 33);
const p2 = criarPessoa("Pedro", "Miguel", 8);

console.log(p1.nomeCompleto());
console.log(p2);