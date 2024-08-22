var readlineSync = require('readline-sync');

var altura = readlineSync.questionFloat(`Digite sua altura: `)
while(altura <= 0 || altura > 2.85){
    console.log(`A altura que você digitou foi invalida`)
    var altura = readlineSync.questionFloat(`Digite sua altura: `)
}
var peso = readlineSync.questionFloat(`Agora digite seu peso: `)
while(peso <= 0 || peso > 500){
    console.log(`O peso que você digitou foi invalida`)
    var peso = readlineSync.questionFloat(`Digite seu peso: `)
}

var massaCorporal = peso / (altura * altura)

console.log(massaCorporal)

if(massaCorporal <= 18.5){
    console.log(`Sua massa corporal é ${massaCorporal} portanto considerado magreza`)
}else if(massaCorporal => 18.5 && massaCorporal <= 24.9){
    console.log(`Sua massa corporal é ${massaCorporal} portanto considerado normal`)
}else if(massaCorporal => 24.9){
    console.log(`Sua massa corporal é ${massaCorporal} portanto considerado sobrepeso`)
}else if(massaCorporal == 30 && massaCorporal <= 39.9){
    console.log(`Sua massa corporal é ${massaCorporal} portanto considerado obesidade`)
}else{
    console.log(`Sua massa corporal é ${massaCorporal} portanto considerado obesidade grave`)
}