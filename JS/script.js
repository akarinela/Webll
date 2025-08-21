// var = nome;
// nome = "Ana Karine";

// console.log(nome);
// console.log("Olá " + nome);
// console.log(`Olá ${nome}`)

// console.log("-----------");

let precolivro = 24.95;
let desconto = 40/100;

let valordesconto = precolivro * desconto;
let precolivrocomdesconto = precolivro - valordesconto;

console.log("Desconto = " + valordesconto);
console.log("Livro com desconto = " + precolivrocomdesconto);

let numerocopias = 60;

let preco60copias = numerocopias + precolivrocomdesconto;

console.log(`Preço para as ${numerocopias} copias = R$${preco60copias}`);

let precotransporte = 3.00 + 0.75*(numero)