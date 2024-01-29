const rlSync = require('readline-sync');

let nome = rlSync.question('Qual é o seu nome? ');
let idade = rlSync.question('Qual é a sua idade? ');

console.log(`Olá, ${nome}! Você tem ${idade} anos de idade.`);