console.log("Exercicio 2");

const primeiroNum = prompt("Diga um numero")
const segundoNum = prompt("Diga outro numero")

let restoUm = primeiroNum % segundoNum
let restoDois = segundoNum % primeiroNum

console.log("O primeiro numero é maior que segundo?", primeiroNum > segundoNum);
console.log("O primeiro numero é igual ao segundo?", primeiroNum === segundoNum);
console.log("O primeiro numero é divisível pelo segundo?", restoUm === 0);
console.log("O segundo numero é divisível pelo primeiro?", restoDois === 0);