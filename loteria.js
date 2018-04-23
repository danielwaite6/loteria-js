/*
 * O algoritmo é bem simples>
 * 1) Pegue os dados do usuario (Fazer validações: Números repetidos, números maiores que 60 e menos que 1 não entra)
 * 2) Sorteia o numero (O números não podem ser repetidos)
 * 3) compara os dois Arrays
 * 4) Verifica se ganhou com uma função que retorne boolean
 * 5) Se o cara ganhou ou não, adicione uma classe a div #ganhou de alert-danger < 3 - alert-warning >3 e < 6 - alert-success se for === 6
 * 6) Exiba os numeros do usuarios e também exiba os números escolhidos pela máquina
 *
*/

function apostar() {

    let numeros = [
        Number(document.getElementById('numero1').value),
        Number(document.getElementById('numero2').value),
        Number(document.getElementById('numero3').value),
        Number(document.getElementById('numero4').value),
        Number(document.getElementById('numero5').value),
        Number(document.getElementById('numero6').value)
    ]

    let numerosSorteados = document.getElementById('numerosSorteados')
    let numerosEscolhidos = document.getElementById('numerosEscolhidos')
    let ganhou = document.getElementById('ganhou')

    let sorteio = sorteio(numeros, numerosSorteados())
    console.log(`Números escolhidos: ${numeros}`)
    console.log(`Números Sorteados pelo sistema: ${numerosSorteados()}`)
    console.log('Resultado: ' + sorteio)

}

function numerosSorteados () {
    let numerosSorteadosPeloSistema = []
    while (numerosSorteadosPeloSistema.length < 6) {
        let aleatorio = Math.floor (Math.random() * 60)
        if (numerosSorteadosPeloSistema.indexOf(aleatorio) == -1)
            numerosSorteadosPeloSistema.push(aleatorio)
    }
    return numerosSorteadosPeloSistema
}

function sorteio(numeroJogador, numerosSorteado = []) {
    let coutAcertos = 0
    let numerosIguais = []
    for (let i = 0; i < numeroJogador.length; i++) {
        for (let j = 0; j < numeroSorteado.length; j++) {
            if (numeroJogador[i] === numeroSorteado[j]) {
                coutAcertos++
                numerosIguais.push(numeroJogador[i])
            }
        }
    }
    return {
        quantidadeDeAcertos: coutAcertos,
        numerosIguais: numerosIguais
    }
}
