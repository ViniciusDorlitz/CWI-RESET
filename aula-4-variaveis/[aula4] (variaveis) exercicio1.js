/*Exercício:
Repare na variável apresentacao mostrada a seguir. Ela é uma string que representa 
um texto que pode mudar conforme o valor de outras variáveis.

Identifique e crie todas as variáveis necessárias para que o texto de apresentacao 
seja exibido sem erros. Depois, crie a variável apresentacao exatamente como mostrado 
a seguir e a imprima da seguinte forma: console.log(apresentacao).

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") 
e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + 
localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + 
(trabalhando ? "empregado" : "desempregado") + "."*/

nomeCompleto = "Vinicius Rocha Dorlitz"
apelido = "Vini"
idade = 27
dataNascimento = "20/02/1994"
localNascimento = "São Paulo - São Paulo "
altura = 1.83
trabalhando = true

apresentacao = "Meu nome é " + nomeCompleto +
 " (sou conhecido[a] como " + apelido + ") e tenho " + idade +
  " anos. Nasci no dia " + dataNascimento + ", na cidade de " +
   localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " +
    (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao)