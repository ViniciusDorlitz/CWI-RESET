
function imprimir(conteudo) {
    console.log(conteudo)
}

/* Verifica se os dois nomes informados são iguais.
 */

function mesmoNome(primeiroNome, segundoNome) {
    return primeiroNome == segundoNome
}

/* Verificação de maioridade.
 */
function maiorDeIdade(idade) {
    return idade >= 18
}

/* Realiza o cálculo do valor do boleto com juros.
 Atualmente, a taxa de juros é de 10%. */
function valorComJuros(valorBoleto) {
    return valorBoleto * 1.1
}

/* Cálculo da média aritmética de todos os itens presentes
 no array passado como argumento. */
function mediaAritmetica(itens) {
    soma = 0

    // somar todos os itens do array
    for (index = 0; index < itens.length; index++) {
        soma += itens[index]
    }

    // dividir o somatório pela quantidade de elementos
    return soma / itens.length
}

/* Cálculo da margem bruta da empresa com base na 
 receita líquida de vendas e no custo dos produtos vendidos.
 O resultado final é multiplicado por 100 para considerar o valor percentual. */
function margemBruta(receitaLiquidaVendas, custoProdutosVendidos) {
    lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
    return (lucroBruto / receitaLiquidaVendas) * 100
}

cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]