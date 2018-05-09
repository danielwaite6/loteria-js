import ImprimeNaTela from './LoteriaClassImprimeNaTela'

export default class TratamentoDeNumerosRepetidosPeloUsuario{
    
    constructor(numerosEscolhidosPeloUsuario){
       this.numerosEscolhidosPeloUsuario = numerosEscolhidosPeloUsuario
       this.encontrouDuplicata = false;

    }
    tratar(nums) {//Função encontra duplicatas e avisa se 'encontrou duplicata'
        for(let i=0; i<=4 ;i++){
            for(let j=i+1; j<=5;j++){
                if( this.numerosEscolhidosPeloUsuario[i] ===  this.numerosEscolhidosPeloUsuario[j]){
                    this.encontrouDuplicata = true;
                    encontrouDuplicata(); 
                }
            }
        }
        if(!this.encontrouDuplicata){
            console.log("this.encontrouDuplicata: " +this.encontrouDuplicata)
            new ImprimeNaTela(this.numerosEscolhidosPeloUsuario).imprimenaTela();
            return this.numerosEscolhidosPeloUsuario 
        }
    }
}
function encontrouDuplicata(){
        let MyLi_1 = document.getElementById("Myli-1");
        let MyLi_2 = document.getElementById("Myli-2");
        let MyLi_3 = document.getElementById("Myli-3");
        let MyLi_4 = document.getElementById("Myli-4");
        let MyLi_5 = document.getElementById("Myli-5");
        let MyLi_6 = document.getElementById("Myli-6");
 
        MyLi_1.innerHTML = "Encontrou Duplicata, aposte de novo"
        MyLi_2.innerHTML = "Encontrou Duplicata, aposte de novo"
        MyLi_3.innerHTML = "Encontrou Duplicata, aposte de novo"
        MyLi_4.innerHTML = "Encontrou Duplicata, aposte de novo"
        MyLi_5.innerHTML = "Encontrou Duplicata, aposte de novo"
        MyLi_6.innerHTML = "Encontrou Duplicata, aposte de novo"
}