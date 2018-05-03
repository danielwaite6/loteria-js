class Loteria{
    constructor(numerosSorteadosPeloSistema){
        this.numerosSorteadosPeloSistema = numerosSorteadosPeloSistema
    }

    numerosSorteados() {
        while (this.numerosSorteadosPeloSistema.length < 6) {
            let aleatorio = Math.floor (Math.random() * 60)
            if (this.numerosSorteadosPeloSistema.indexOf(aleatorio) == -1)
            this.numerosSorteadosPeloSistema.push(aleatorio)
        }
        return this.numerosSorteadosPeloSistema
    }
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
     




}

let loteria = new Loteria( numerosSorteadosPeloSistema = [] )

console.log(loteria.numerosSorteados())
 