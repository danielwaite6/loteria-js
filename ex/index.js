import TratamentoDeNumerosRepetidosPeloUsuario from './LoteriaClassObtemNums.js'

function apostar(){

    //console.log("cheguei aqui na função apostar()")
    
    let numeros = [
        Number(document.getElementById('numero1').value),
        Number(document.getElementById('numero2').value),
        Number(document.getElementById('numero3').value),
        Number(document.getElementById('numero4').value),
        Number(document.getElementById('numero5').value),
        Number(document.getElementById('numero6').value)
    ]
    
    new TratamentoDeNumerosRepetidosPeloUsuario(numeros).tratar()
    
}   


var botao = document.getElementById("btn1"); 
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

   
