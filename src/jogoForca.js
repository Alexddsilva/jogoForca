class JogoForca {
  constructor(palavraSecreta, maxTentativas) {
    this.palavraSecreta = palavraSecreta.toLowerCase();
    this.maxTentativas = maxTentativas;
    this.tentativasRestantes = maxTentativas;
    this.letrasAdivinhadas = new Set();
  }

  tentarPalpite(letra) {
    if (letra.length !== 1 || !/^[a-zA-Z]+$/.test(letra)) return;
    letra = letra.toLowerCase();

    if (!this.palavraSecreta.includes(letra)) {
      this.tentativasRestantes--;
    } else {
      this.letrasAdivinhadas.add(letra);
    }
  }

  get estadoAtual() {
    let estado = "";

    for (const letra of this.palavraSecreta) {
      if (this.letrasAdivinhadas.has(letra)) {
        estado += letra;
      } else {
        estado += "_";
      }
    }

    return estado;
  }

  get jogoVencido() {
    return this.estadoAtual.replace("_", " ") === this.palavraSecreta;
  }

  get jogoPerdido() {
    return this.tentativasRestantes === 0;
  }
}

module.exports = JogoForca;
