var readlineSync = require('readline-sync');

var temperatura = readlineSync.questionInt('Digite uma temperatura: ');

var temperaturaEscolhaUm = readlineSync.questionInt('1 - Kelvin\n2 - Celsius\n3 - Fahrenheit\nEscolha qual temperatura digitou: ');

var temperaturaEscolhaDois = readlineSync.questionInt('1 - Kelvin\n2 - Celsius\n3 - Fahrenheit\nEscolha qual temperatura deseja converter: ');

var resultado;

switch (temperaturaEscolhaDois) {
    case 1:
        switch (temperaturaEscolhaUm) {
            case 1:
                resultado = temperatura;
                break;
            case 2:
                resultado = temperatura + 273.15;
                break;
            case 3:
                resultado = (temperatura - 32) * 5/9 + 273.15;
                break;
        }
        break;

    case 2:
        switch (temperaturaEscolhaUm) {
            case 1:
                resultado = temperatura - 273.15;
                break;
            case 2:
                resultado = temperatura;
                break;
            case 3:
                resultado = (temperatura - 32) * 5/9;
                break;
        }
        break;

    case 3:
        switch (temperaturaEscolhaUm) {
            case 1:
                resultado = (temperatura - 273.15) * 9/5 + 32;
                break;
            case 2:
                resultado = (temperatura * 9/5) + 32;
                break;
            case 3:
                resultado = temperatura;
                break;
        }
        break;

    default:
        console.log('Opção inválida.');
        resultado = undefined;
}

console.log(`Resultado: ${resultado}`);