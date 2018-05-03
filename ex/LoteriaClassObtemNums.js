export default class TratamentoDeNumerosRepetidosPeloUsuario{
     
    constructor(numerosEscolhidosPeloUsuario){
       this.numerosEscolhidosPeloUsuario = numerosEscolhidosPeloUsuario
     }

    tratar(){//Função encontra duplicatas e avisa se 'encontrou duplicata'

        for(let i=0; i<=4 ;i++){
            //console.log('i: '+ i)
            for(let j=i+1; j<=5;j++){
            
                if( this.numerosEscolhidosPeloUsuario[i] ===  this.numerosEscolhidosPeloUsuario[j]){
                    console.log('encontrou duplicata')
                    alert('encontrou duplicata')
                }
            }
        }

        
        let input = document.getElementById("Myli");
        input.value = this.numerosEscolhidosPeloUsuario[0] ;
        console.log(this.numerosEscolhidosPeloUsuario[0])
        console.log(this.numerosEscolhidosPeloUsuario[1])
        console.log(this.numerosEscolhidosPeloUsuario[2])
    }
   
}

