// function expression
const increment1 = function(n){
    return n + 1
}

// Arrow function sempre será anônima
const increment2 = (n) => {
    return n + 1
}

// Se a função arrow tiver apenas um parâmetro, podemos retirar os parênteses ()
const increment3 = n => {
    return n + 1
}

// Função de apenas uma unica linha. Podemos retirar o par de chaves e não é necessário utilizar a palavra reservada Return
const increment4 = n => n + 1


console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(23))
console.log(increment4(199))

// Quando temos mais de um parâmetro é necessário utilizar o parenteses


const sum = (a, b) => a + b
console.log(sum(2, 8))

