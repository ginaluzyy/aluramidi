function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido')
    } 

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador ++) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio)
    } 


    tecla.onkeydown = function (evento) {
        if(evento.code === "NumpadEnter" || evento.code === "Space") {
            tecla.classList.add('ativa');}
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
}

/* enquanto
let contador = 0
while (contador < listaDeTeclas.length) {

    //procurando as teclas individuais 
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    //que estao nos filhos das teclas

    //string a cada interação passando o audio
    const idAudio = `#som_${instrumento}`


    tecla.onclick = function() {
        tocaSom(idAudio)
    } 

    contador = contador + 1;
}
*/

