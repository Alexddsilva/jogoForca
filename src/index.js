const readline = require("readline");

const JogoForca = require("./jogoForca");

let palavraSecreta = "resolucao problemas"; // Palavra padrão caso nenhum argumento seja fornecido
let maxTentativas = 15; // Valor padrão de tentativas

// Verifica se o argumento '--palavra' exsite
// console.log("argv", process.argv);
const args = process.argv.slice(2); // Remove os dois primeiros argumentos ('node' e 'nomeDoArquivo.js')
const palavraIndex = args.indexOf("--palavra");
const tentativasIndex = args.indexOf("--tentativas");

if (palavraIndex !== -1) {
  palavraSecreta = args[palavraIndex + 1]; // A próxima entrada após '--palavra' é a palavra secreta
}

if (tentativasIndex !== -1) {
  maxTentativas = parseInt(args[tentativasIndex + 1]); // A próxima entrada após '--tentativas' é o número de tentativas
}

const jogo = new JogoForca(palavraSecreta, maxTentativas);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jogar() {
  if (jogo.jogoVencido) {
    console.log("Parabéns! Você venceu!");
    rl.close();
    return;
  }

  if (jogo.jogoPerdido) {
    console.log("Você perdeu! A palavra secreta era: " + jogo.palavraSecreta);
    rl.close();
    return;
  }

  console.log("Palavra atual: " + jogo.estadoAtual);
  console.log("Tentativas restantes: " + jogo.tentativasRestantes);

  rl.question("Digite uma letra: ", (resposta) => {
    if (resposta.length !== 1 || !/^[a-zA-Z]+$/.test(resposta)) {
      console.log("Por favor, digite uma única letra válida.");
    } else {
      jogo.tentarPalpite(resposta);
    }
    jogar();
  });
}

jogar();
