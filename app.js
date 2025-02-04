
function sortear() {

let quatidadeDeNumeros = parseInt (document.getElementById('quantidade').value); // parseInt = garante que a informação passada pelo usuário sejá um número.
let numeroInicial = parseInt (document.getElementById('de').value);
let numeroFinal = parseInt (document.getElementById('ate').value);

let sorteados =[]; // Array ("Lista")= onde será armazenado os numeros gerados pelo FOR
let numero;

for (let i = 0; i < quatidadeDeNumeros; i++){
  numero = gerarNumeroAleatorio(numeroInicial,numeroFinal);
  sorteados.push(numero);

  while (sorteados.includes(numero) ){
    numero = gerarNumeroAleatorio(numeroInicial,numeroFinal);
  }
  sorteados.push(numero);

}

let resultado = document.getElementById('resultado');
 resultado.innerHTML = (`<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`);

}

//função para gerar numero aleatorio com base nos numeros passado pelo usuário.
function gerarNumeroAleatorio (min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;

}