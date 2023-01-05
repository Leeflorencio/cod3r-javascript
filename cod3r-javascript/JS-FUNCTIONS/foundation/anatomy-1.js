// Function declaration

// Function sem parâmetro e sem retorno
function sayHello(){
    console.log('Hello!')
}
sayHello();


// Function com parâmetro e sem retorno
function sayHelloTo(name){
    console.log('Hello ' + name)
    console.log(`Hello  ${name}!`)
}
sayHelloTo('Mike')


// Function sem parâmetro e com retorno
function returnHi(){
    return 'Hi!'
}
let greeting = returnHi()
console.log(greeting)
console.log(returnHi())


// Function com parâmetro e com retorno
function returnHiTo(name){
    return `Hi ${name} :)`
}
console.log(returnHiTo('John'))
