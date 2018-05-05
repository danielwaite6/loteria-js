export default class Loteria{
    constructor(numerosSorteadosPeloSistema){
        this.numerosSorteadosPeloSistema = numerosSorteadosPeloSistema
    }

    numerosSorteados() {
        while (this.numerosSorteadosPeloSistema.length < 6) {
            let aleatorio = Math.floor (Math.random() * 60)
            if (this.numerosSorteadosPeloSistema.indexOf(aleatorio) == -1)
            this.numerosSorteadosPeloSistema.push(aleatorio)
        }
        console.log(this.numerosSorteadosPeloSistema)
        imprimenaTela(this.numerosSorteadosPeloSistema)
        //return this.numerosSorteadosPeloSistema
    }

}



function imprimenaTela(nums){
    console.log('cheguei em imprimenaTela() da LoteriaClassl.js') 
    let MyLi_1 = document.getElementById("Myli-7");
    let MyLi_2 = document.getElementById("Myli-8");
    let MyLi_3 = document.getElementById("Myli-9");
    let MyLi_4 = document.getElementById("Myli-10");
    let MyLi_5 = document.getElementById("Myli-11");
    let MyLi_6 = document.getElementById("Myli-12");

    MyLi_1.innerHTML = nums[0];
    MyLi_2.innerHTML = nums[1];
    MyLi_3.innerHTML = nums[2];
    MyLi_4.innerHTML = nums[3];
    MyLi_5.innerHTML = nums[4];
    MyLi_6.innerHTML = nums[5];
}
 