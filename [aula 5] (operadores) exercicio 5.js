/*5) O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o 
custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do 
lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta,
 multiplicando o resultado final por 100 para obter o valor percentual;
*/

receitaLiquidaDeVendas = 100
custoDosProdutosVendidos = 50

lucroBruto = receitaLiquidaDeVendas - custoDosProdutosVendidos

margemBruta = lucroBruto / receitaLiquidaDeVendas

valorPercentual = margemBruta * 100

console.log(lucroBruto)
console.log(margemBruta)
console.log(valorPercentual)
