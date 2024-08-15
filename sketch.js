let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = [" smt", " smt<3", " smt^^"];

  return random(palavras);
}

function inicializaCores() {
  background(255, 182, 193);
  fill("white");
  textFont("Fuzzy Bubbles");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();

  let texto = palavraParcial(0, width);

  text(texto, 200, 200);
}
