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
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaImc() {
        const imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    calculaMediaValida() {
    if (this.notas.length <= 2) {
    const soma = this.notas.reduce(function(acumulador, nota) {
      return acumulador + nota;
    }, 0);
    return soma / this.notas.length;
  }

    const maiorNota = Math.max(...this.notas);
    const menorNota = Math.min(...this.notas);

    const notasFiltradas = [...this.notas];
    
    const indexMaior = notasFiltradas.indexOf(maiorNota);
  if (indexMaior > -1) {
    notasFiltradas.splice(indexMaior, 1);
  }

    const indexMenor = notasFiltradas.indexOf(menorNota);
    if (indexMenor > -1) {
      notasFiltradas.splice(indexMenor, 1);
    }

    const soma = notasFiltradas.reduce(function(acumulador, nota) {
    return acumulador + nota;
  }, 0);

    const media = soma / notasFiltradas.length;
        return media;
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
    
        obtemCategoria() {
        return this.calculaCategoria();
    }
    
        obtemImc() {
        return this.calculaImc();
    }
    
        obtemMediaValida() {
        return this.calculaMediaValida();
    }

    imprimirAtleta() {
      const imcExato = this.calculaImc();
      const mediaValida = this.calculaMediaValida();
      const mediaFormatada = mediaValida.toFixed(8).toString().replace(".", ",");

      console.log(`Nome: ${this.nome} Idade: ${this.idade} Peso: ${this.peso} Altura: ${this.altura} Notas: ${this.notas.join(',')} Categoria: ${this.calculaCategoria()} IMC: ${imcExato} Média válida: ${mediaFormatada}`);
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

atleta.imprimirAtleta();