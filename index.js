class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return `Infantil`;
    } else if (this.idade >= 12 && this.idade <= 13) {
      return `Juvenil`;
    } else if (this.idade >= 14 && this.idade <= 15) {
      return `Intermediário`;
    } else if (this.idade >= 16 && this.idade <= 30) {
      return `Adulto`;
    }
    return `Sem categoria`;
  }

  calculaIMC() {
    let imc = this.peso / (this.altura * this.altura);
    return imc;
  }

  calculaMediaValida() {
    let listaDeNumerosOrdenados = this.notas.sort((a, b) => a - b).splice(2);
    let somaTotal = 0;
    listaDeNumerosOrdenados.forEach((somaNumerosOrdenados) => {
      somaTotal += somaNumerosOrdenados;
    });
    return somaTotal / listaDeNumerosOrdenados.length;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria(categoria) {
    let mostrarCategoria = this.calculaCategoria();
    return mostrarCategoria;
  }

  obtemIMC(mostrar) {
    let exibir = this.calculaIMC(mostrar);
    return exibir;
  }

  obtemMediaValida(media) {
    let exibir = this.calculaMediaValida(media);
    return exibir;
  }
}

const atleta = new Atleta("Daniel Lima", 30, 82, 1.77, [5.6, 8.5, 7, 9.6, 8]);

console.log(`
Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.altura}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC().toFixed(2)}
Média válida : ${atleta.obtemMediaValida().toFixed(1)}
`);

