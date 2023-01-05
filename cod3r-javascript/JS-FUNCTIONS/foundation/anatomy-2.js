// Anonymous function - função que não tem nome
(function (a, b, c){
    return a + b + c
})

// Function expression -- atrubuir o valor de uma função a uma variável
const sum = function (a, b){
    return a + b
}

const result = sum(7, 59)
console.log(result)

//essa constante aponta para a mesma função
const anotherSum = sum 
console.log(anotherSum(5, 40))