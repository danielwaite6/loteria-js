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

    let mensagem = document.getElementById('mensagem')

    if (numerosRepetidos(numeros)) {
        mensagem.innerText = 'Você optou a escolher número iguais. Escolha números diferentes'.toString()
        mensagem.className = 'alert alert-warning'
        return
    }
    console.log(numerosRepetidos(numeros))

    let foraDaMargem = estaForaDaMargemDeValores(numeros)
    console.log('Fora de margem: ' + foraDaMargem)
    if (foraDaMargem) {
        console.log('Número fora da margem')
        mensagem.innerText = 'Valor do número inválido. Você precisa digitar números entre 0 e 60'.toString()
        mensagem.className = 'alert alert-warning'
        return
    }

    let numerosSorteadosPelaMaquina = numerosSorteados()
    console.log(`Numeros sorteados: ${numerosSorteadosPelaMaquina}`)
    let numerosComparados = comparaNumeros(numeros, numerosSorteadosPelaMaquina)
    console.log(`Numeros comparados: ${numerosComparados}`)
    let resultado = seraQueGanhou(numerosComparados)
    console.log(`Resultados: ${resultado}`)

    mensagem.innerText = resultado[mensagem]
    mensagem.className = resultado[alert]

}

function seraQueGanhou(resultado) {
    if ( resultado.length === 6 ) {
        return {
            quantidadeDeAcertos: resultado.length,
            mensagem: 'Parabéns, você ganhou!',
            alert: 'alert alert-success'
        }
    } else if (resultado.length > 2 && resultado.length < 6) {
        return {
            quantidadeDeAcertos: resultado.length,
            mensagem: `Quase lá! Você acertou ${resultado.length} números`,
            alert: 'alert alert-warning'
        }
    } else if (resultado.length > 1 && resultado.length < 3) {
        return {
            quantidadeDeAcertos: resultado.length,
            mensagem: `Que pena. Você acertou ${resultado.length} números`,
            alert: 'alert alert-default'
        }
    } else {
        return {
            quantidadeDeAcertos: resultado.length,
            mensagem: `Que pena. Você não acertou nenhum número.`,
            alert: 'alert alert-danger'
        }
    }
}

function estaForaDaMargemDeValores(numeros) {
    console.log (numeros)
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 1 && numeros[i] > 60) {
            return true
        }
    }
    return false
}

function numerosRepetidos(numeros) {
    return false
}

 

function comparaNumeros(numeroJogador, numerosSorteado = []) {
    let numerosIguais = []
    for (let i = 0; i < numeroJogador.length; i++) {
        for (let j = 0; j < numerosSorteado.length; j++) {
            if (numeroJogador[i] === numerosSorteado[j]) {
                numerosIguais.push(numeroJogador[i])
            }
        }
    }
    return numerosIguais

}
