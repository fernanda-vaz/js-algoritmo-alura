// array com precos dos livros
const livros = require("./lista-livros");
// alterar o indice do produto atual - analizado - caso for o mais barato
function menorValor(arrProdutos, posicaiInicial) {
  let maisBarato = posicaiInicial;

  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

module.exports = menorValor;