export default class ImprimeNaTela{

    constructor(nums){
        this.numerosEscolhidosPeloUsuario = nums;
    }



    imprimenaTela(){
        //console.log('cheguei em imprimenaTela()'); 
        let MyLi_1 = document.getElementById("Myli-1");
        let MyLi_2 = document.getElementById("Myli-2");
        let MyLi_3 = document.getElementById("Myli-3");
        let MyLi_4 = document.getElementById("Myli-4");
        let MyLi_5 = document.getElementById("Myli-5");
        let MyLi_6 = document.getElementById("Myli-6");
 
        MyLi_1.innerHTML = this.numerosEscolhidosPeloUsuario[0];
        MyLi_2.innerHTML = this.numerosEscolhidosPeloUsuario[1];
        MyLi_3.innerHTML = this.numerosEscolhidosPeloUsuario[2];
        MyLi_4.innerHTML = this.numerosEscolhidosPeloUsuario[3];
        MyLi_5.innerHTML = this.numerosEscolhidosPeloUsuario[4];
        MyLi_6.innerHTML = this.numerosEscolhidosPeloUsuario[5];
     }


}
