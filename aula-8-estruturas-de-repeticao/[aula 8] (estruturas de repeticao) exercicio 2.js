/*Exercícios:
Lembre-se que, para obter o tamanho de um array, é usada a expressão
 nomeDoArray.length. Ex.:

timesDeFutebol = ["Grêmio", "Inter", "Corinthians", "Flamengo"]

quantidadeDeTimes = timesDeFutebol.length

console.log(quantidadeDeTimes)

2-) Crie um algoritmo capaz de calcular a média aritmética de um array 
com qualquer quantidade de elementos numéricos. Para fins de exemplo, 
o resultado do algoritmo com um array de valores 
1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura
 de repetição diferente da que você usou para fazer o exercício anterior;*/

 valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]

 soma = 0
 for (index = 0; index < valores.length; index++) {
     soma += valores[index]

 }
 
 media = soma / valores.length
 console.log(media)
