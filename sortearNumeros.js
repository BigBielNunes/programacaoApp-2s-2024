var readlineSync = require('readline-sync');

var escolhaNumero = readlineSync.questionInt(`1 - Mega Sena\n2 - Quina\n3 - Lotofacil\nEscolha em qual desse jogos deseja jogar: `)

while(escolhaNumero <= 0 || escolhaNumero > 3 ){
    console.log(`Opção invalida`)
    var escolhaNumero = readlineSync.questionInt(`1 - Mega Sena\n2 - Quina\n3 - Lotofacil\nEscolha em qual desse jogos deseja jogar: `)
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(`Você escolheu opção ${escolhaNumero}\nAgora vou sortear os numeros`)

switch(escolhaNumero){
    case 1:
        var minUm = 1
        var maxUm = 60
        var qtdNumerosUm = 6
        function sortearNumeros(qtdNumerosUm, minUm, maxUm) {
            let numerosSorteados = [];
            
            for (let i = 0; i < qtdNumerosUm; i++) {
                let numero = gerarNumeroAleatorio(minUm, maxUm);
                numerosSorteados.push(numero);
            }
            console.log(numerosSorteados)

            return numerosSorteados;
        }
    case 2:
        var minDois = 1
        var maxDois = 80
        var qtdNumerosDois = 5
        function sortearNumeros(qtdNumerosDois, minDois, maxDois) {
            let numerosSorteados = [];
            
            for (let i = 0; i < qtdNumerosDois; i++) {
                let numero = gerarNumeroAleatorio(minDois, maxDois);
                numerosSorteados.push(numero);
            }
            console.log(numerosSorteados)

            return numerosSorteados;
        }
    case 3:
        var minTres = 1
        var maxTres = 25
        var qtdNumerosTres = 15
        function sortearNumeros(qtdNumerosTres, minTres, maxTres) {
            let numerosSorteados = [];
            
            for (let i = 0; i < qtdNumerosTres; i++) {
                let numero = gerarNumeroAleatorio(minTres, maxTres);
                numerosSorteados.push(numero);
            }
            console.log(numerosSorteados)

            return numerosSorteados;
        }
    default:
        break;
}

if(escolhaNumero == 1){
    var resultado = sortearNumeros(qtdNumerosUm,minUm,maxUm)
}else if (escolhaNumero == 2){
    var resultado = sortearNumeros(qtdNumerosDois,minDois,maxDois)
}else{
    var resultado = sortearNumeros(qtdNumerosTres,minTres,maxTres)
}

