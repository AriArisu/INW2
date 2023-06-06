const leia = require("prompty-sync")()
let usuario = leia("Digite o nome do Uusario")
let Salario = parseFloat(leia("Diigite o valor do seu salário :"))


if(Salario < 2500){
    console.log("Voce será isento do imposto ")
    console.log(" Seu slaário é : " +Salario)
} else if (Salario > 2500 && Salario <= 5000){
    valorImposto = Salario * 0.15
    console.log("Oi sr"+usuario+"seu imposto será de"+valorImposto)
    console.log("Seu sálario liquido é " +(Salario-valorImposto))
}
else{
    valorImposto=Salario* 0.25
}