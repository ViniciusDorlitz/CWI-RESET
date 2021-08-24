/*Exercício:
O IMC significa Índice de Massa Corpórea e é um indicador utilizado pela OMS 
(Organização Mundial da Saúde) como referência para saber a saúde de uma 
pessoa com base no seu peso e altura.

O cálculo do IMC é feito pela divisão do peso de alguém pela sua altura ao 
quadrado. Os valores de referência do índice são:

IMC	Classificação	Grau de Obesidade
Menor do que 18,50	Magreza	0
Entre 18,50 e 24,99	Normal	0
Entre 25,00 e 29,99	Sobrepeso	1
Entre 30,00 e 39,99	Obesidade	2
Maior ou igual a 40,00	Obesidade grave	3

Faça um algoritmo que efetue o cálculo do IMC, com base nas variáveis peso e 
altura.

Exiba o valor do IMC e a classificação obtida. Se houver algum grau de 
obesidade, exiba também a mensagem: Cuidado! Você está acima do peso 
recomendado pela OMS.

Se o grau de obesidade for 3, adicione também a seguinte mensagem: É importante
 procurar um médico para avaliar sua saúde.*/

peso = 71
altura = 1.83

 imc = peso / (altura * altura) 

 classificacao = ""

 if (imc < 18.50 ){
     classificacao = "Magreza";
 }

 else if (imc < 25.00 ){
     classificacao = "Normal";
 }

 else if (imc < 30){
     classificacao = "Sobrepeso";
 }

 else if (imc < 40){
     classificacao = "Obesidade";
 }

 else 
 {
     classificacao = "Obesidade Grave";
 }

 console.log("O seu IMC é: ", imc)
 console.log(" A sua classificação é: ", classificacao )


 switch (classificacao){
    case "Sobrepeso":
        console.log("Cuidado! Você está acima do peso recomendado pela OMS")
         break;

    case "Obesidade":
        console.log("Cuidado! Você está acima do peso recomendado pela OMS")
        break;

    case "Obesidade Grave":
        console.log("Cuidado! Você está acima do peso recomendado pela OMS. É importante procurar um médico para avaliar sua saúde.!")
        break;
 }
 