export default class VerficaAcertos{

    constructor(numerosEscolhidosPeloUsuario, numerosSorteadosPeloSistema){
        this.numerosEscolhidosPeloUsuario = numerosEscolhidosPeloUsuario
        this.numerosSorteadosPeloSistema  = numerosSorteadosPeloSistema
    }

    verificaAcertos(){

            let arrayTemp = []

            for(let i=0; i<=5 ;i++){
                for(let j=0; j<=5;j++){
                    if( this.numerosEscolhidosPeloUsuario[i] ===  this.numerosSorteadosPeloSistema[j]){
                        console.log(this.numerosEscolhidosPeloUsuario[i] +' === '+this.numerosSorteadosPeloSistema[j] )
                        arrayTemp.push(this.numerosEscolhidosPeloUsuario[i])
                    }
                }
            }
            imprimenaTela(arrayTemp)
    }
    
}

function imprimenaTela(arrayTemp){
    //console.log('cheguei em imprimenaTela()'); 
    let MyLi_14 = document.getElementById("Myli-13");
    let MyLi_15 = document.getElementById("Myli-14");
    let MyLi_16 = document.getElementById("Myli-15");
    let MyLi_17 = document.getElementById("Myli-16");
    let MyLi_18 = document.getElementById("Myli-17");
    let MyLi_19 = document.getElementById("Myli-18");

    MyLi_14.innerHTML = arrayTemp[0];
    MyLi_15.innerHTML = arrayTemp[1];
    MyLi_16.innerHTML = arrayTemp[2];
    MyLi_17.innerHTML = arrayTemp[3];
    MyLi_18.innerHTML = arrayTemp[4];
    MyLi_19.innerHTML = arrayTemp[5];
 }