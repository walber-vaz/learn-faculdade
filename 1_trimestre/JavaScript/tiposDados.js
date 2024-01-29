// Tipos de dados em JavaScript
let nome1 = 'João'; // String
let idade = 25; // Number
let altura = 1.75; // Number
let temFaculdade = true; // Boolean
let ehNulo = null; // Null
let pessoa = { // Object
  nome: 'João',
  idade: 25,
  altura: 1.75,
  temFaculdade: true
};
let simbolo = Symbol(); // Symbol
let novoTipo = function () { }; // Function
let array = [1, 2, 3]; // Array

// typeof retorna o tipo de dado
console.log(typeof nome1); // String
console.log(typeof idade); // Number
console.log(typeof altura); // Number
console.log(typeof temFaculdade); // Boolean
console.log(typeof ehNulo); // Object
console.log(typeof pessoa); // Object
console.log(typeof simbolo); // Symbol
console.log(typeof novoTipo); // Function
console.log(typeof array); // Object

// Strings
// É possível somar uma string e assim concatenar as palavras.
let nome2 = 'João';
let sobrenome = 'Ribeiro';
let nomeCompleto = nome2 + ' ' + sobrenome;
console.log(nomeCompleto); // João Ribeiro

// É possível somar números com strings, o resultado final é sempre uma string.
let gols = 1000;
let frase = 'Romário fez ' + gols + ' gols';
console.log(typeof frase); // String

// Aspas duplas, simples e template strings
// Você pode utilizar aspas duplas ou simples para declarar uma string.
let gols2 = 1000;
let frase2 = "Romário fez " + gols2 + " gols";
let frase3 = 'Romário fez ' + gols2 + ' gols';
console.log(frase2); // Romário fez 1000 gols
console.log(frase3); // Romário fez 1000 gols

// Template literal
// Você pode utilizar aspas duplas ou simples para declarar uma string.
let gols3 = 1000;
let frase4 = `Romário fez ${gols3} gols`; // Utilizando template literal
console.log(frase4); // Romário fez 1000 gols
