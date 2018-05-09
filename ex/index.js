import TratamentoDeNumerosRepetidosPeloUsuario from './LoteriaClassObtemNums.js'
import Loteria from './LoteriaClass'
import VerificaAcertos from './LoteriaClassVerificaAcertos'


function apostar(){
    let numerosSorteadosPeloSistema = [];
    let numeros = [
        Number(document.getElementById('numero1').value),
        Number(document.getElementById('numero2').value),
        Number(document.getElementById('numero3').value),
        Number(document.getElementById('numero4').value),
        Number(document.getElementById('numero5').value),
        Number(document.getElementById('numero6').value)
    ]
    

    const util1 = new TratamentoDeNumerosRepetidosPeloUsuario(numeros).tratar();
    const util2 = new Loteria(numerosSorteadosPeloSistema).numerosSorteados();

    new VerificaAcertos(util1, util2).verificaAcertos()
}   

var botao = document.getElementById("btn1");; 
botao.addEventListener("click", apostar, false); 






//window.apostar = apostar;


/**
 * function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  ready(() => {
    // faça oq precisa aqui
    apostar();
  })

 * 
 * 
 */

   
