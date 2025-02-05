
//sortear(): Essa função é responsável por sortear uma quantidade específica de números aleatórios dentro de um intervalo definido pelo usuário.
function sortear() { 
let quantidadeDeNumeros = parseInt (document.getElementById('quantidade').value); // parseInt() garante que os valores capturados sejam convertidos para números inteiros
let numeroInicial = parseInt (document.getElementById('de').value);
let numeroFinal = parseInt (document.getElementById('ate').value);

let sorteados =[]; // É um array onde os números sorteados serão armazenados.
let numero;        // Será utilizado para armazenar temporariamente os valores gerados.

//FOR: Loop para gerar números aleatórios
//O loop "for" executa um número de vezes igual ao valor inserido pelo usuário (quantidade de números a sortear).

for (let i = 0; i < quantidadeDeNumeros; i++){
  numero = gerarNumeroAleatorio(numeroInicial,numeroFinal);
  //sorteados.push(numero);

  while (sorteados.includes(numero) ){
    numero = gerarNumeroAleatorio(numeroInicial,numeroFinal);
    
  }
  sorteados.push(numero);
}

let resultado = document.getElementById('resultado');
 resultado.innerHTML = (`<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`);
alterarStatusBotao();
}

//Chama a função auxiliar para gerar um número aleatório dentro do intervalo definido.
function gerarNumeroAleatorio (min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
          botao.classList.remove('container__botao-desabilitado');
          botao.classList.add('container__botao');
  } else {
          botao.classList.remove('container__botao');
          botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar () {
  document.getElementById('quantidade').value ='';
  document.getElementById('de').value ='';
  document.getElementById('ate').value ='';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  alterarStatusBotao();
}
