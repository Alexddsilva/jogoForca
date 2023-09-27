const JogoForca = require("./jogoForca");

test("inicia um jogo com uma palavra secreta", () => {
  const jogo = new JogoForca("javascript", 6);
  expect(jogo.palavraSecreta).toBe("javascript");
});

test("aceita um palpite e atualiza o estado do jogo", () => {
  const jogo = new JogoForca("javascript", 6);
  jogo.tentarPalpite("a");
  jogo.tentarPalpite("t");
  expect(jogo.estadoAtual).toBe("_a_a_____t");
});

test("verifica se o jogo é vencido", () => {
  const jogo = new JogoForca("javascript", 6);
  jogo.tentarPalpite("j");
  jogo.tentarPalpite("a");
  jogo.tentarPalpite("v");
  jogo.tentarPalpite("s");
  jogo.tentarPalpite("c");
  jogo.tentarPalpite("r");
  jogo.tentarPalpite("i");
  jogo.tentarPalpite("p");
  jogo.tentarPalpite("t");
  expect(jogo.jogoVencido).toBe(true);
});
test("verifica se o jogo é perdido após um número máximo de tentativas", () => {
  const jogo = new JogoForca("javascript", 3);
  jogo.tentarPalpite("x");
  jogo.tentarPalpite("y");
  jogo.tentarPalpite("z");
  expect(jogo.jogoPerdido).toBe(true);
});

test("aceita letras maiúsculas como palpite", () => {
  const jogo = new JogoForca("javascript", 6);
  jogo.tentarPalpite("J");
  jogo.tentarPalpite("A");
  expect(jogo.estadoAtual).toBe("ja_a______");
});

test("ignora palavras repetidas", () => {
  const jogo = new JogoForca("javascript", 6);
  jogo.tentarPalpite("a");
  jogo.tentarPalpite("a");
  expect(jogo.estadoAtual).toBe("_a_a______");
});

test("verifica se todas as letras da palavra são aceitas", () => {
  const jogo = new JogoForca("javascript", 6);
  jogo.tentarPalpite("j");
  jogo.tentarPalpite("a");
  jogo.tentarPalpite("v");
  jogo.tentarPalpite("s");
  jogo.tentarPalpite("c");
  jogo.tentarPalpite("r");
  expect(jogo.jogoVencido).toBe(false);
});

test("verifica se o jogo é vencido quando todas as letras são adivinhadas", () => {
  const jogo = new JogoForca("javascript", 6);
  jogo.tentarPalpite("j");
  jogo.tentarPalpite("a");
  jogo.tentarPalpite("v");
  jogo.tentarPalpite("s");
  jogo.tentarPalpite("c");
  jogo.tentarPalpite("r");
  jogo.tentarPalpite("i");
  jogo.tentarPalpite("p");
  jogo.tentarPalpite("t");
  expect(jogo.jogoVencido).toBe(true);
});
