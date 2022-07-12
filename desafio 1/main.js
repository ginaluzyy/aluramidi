const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');
//primeiro foi declarado os valores da lista de teclas
// o valor (lugar) do telefone na tela


for (indice = 0; indice < listaDeTeclas.length; indice++) {

  const tecla = listaDeTeclas[indice]; //encontrando o numero digitado

  tecla.onclick = function () { //ao clicar na tecla faz o valor (lugar) do telefone + a proxima da repetição
    inputTel.value = inputTel.value + tecla.value;
  }

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }

}