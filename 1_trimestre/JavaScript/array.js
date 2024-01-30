const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(newArray.length);
console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[newArray.length - 1]);

for (let i = 0; i < newArray.length; i++) {
  console.log(`Posição ${i} do array: ${newArray[i]}\r`);
}

// metodos de array
// push - adiciona um item no final do array
newArray.push(10);
console.log(newArray);

// pop - remove o ultimo item do array
newArray.pop();
console.log(newArray);

// unshift - adiciona um item no inicio do array
newArray.unshift(0);
console.log(newArray);

// shift - remove o primeiro item do array
newArray.shift();
console.log(newArray);

// indexOf - retorna o indice do item no array
console.log(newArray.indexOf(5));

// lastIndexOf - retorna o ultimo indice do item no array
console.log(newArray.lastIndexOf(5));

// includes - retorna true ou false se o item existe no array
console.log(newArray.includes(5));

// join - transforma o array em uma string
console.log(newArray.join(' '));

// slice - retorna um novo array com os itens selecionados
console.log(newArray.slice(2, 5));

// splice - remove ou adiciona itens no array
console.log(newArray.splice(2, 2));
console.log(newArray);

// concat - concatena arrays
const newArray2 = [11, 12, 13, 14, 15];
console.log(newArray.concat(newArray2));

// reverse - inverte a ordem dos itens do array
console.log(newArray.reverse());

// sort - ordena os itens do array
console.log(newArray.sort());

// map - retorna um novo array com os itens modificados
console.log(newArray.map((item) => item * 2));

// filter - retorna um novo array com os itens filtrados
console.log(newArray.filter((item) => item > 5));

// reduce - retorna um novo array com os itens reduzidos
console.log(newArray.reduce((total, item) => total + item));

// forEach - executa uma função para cada item do array
newArray.forEach((item) => console.log(item));

// find - retorna o primeiro item que satisfaz a condição
console.log(newArray.find((item) => item > 5));

// findIndex - retorna o indice do primeiro item que satisfaz a condição
console.log(newArray.findIndex((item) => item > 5));

// some - retorna true ou false se algum item satisfaz a condição
console.log(newArray.some((item) => item > 5));

// every - retorna true ou false se todos os itens satisfazem a condição
console.log(newArray.every((item) => item > 5));

// flat - retorna um novo array com os itens achatados
const newArray3 = [1, 2, [3, 4, [5, 6]]];
console.log(newArray3.flat());

// flatMap - retorna um novo array com os itens achatados e modificados
console.log(newArray3.flatMap((item) => item * 2));

// keys - retorna um array com as chaves do array
console.log(newArray.keys());

// values - retorna um array com os valores do array
console.log(newArray.values());

// entries - retorna um array com as chaves e valores do array
console.log(newArray.entries());

// from - retorna um array a partir de um objeto
console.log(Array.from('123456'));

// of - retorna um array a partir de um objeto
console.log(Array.of('123456'));

// isArray - retorna true ou false se o objeto é um array
console.log(Array.isArray(newArray));

// toString - retorna uma string com os itens do array
console.log(newArray.toString());

// toLocaleString - retorna uma string com os itens do array
console.log(newArray.toLocaleString());

// copyWithin - copia os itens do array para outra posição
console.log(newArray.copyWithin(0, 3));

// fill - preenche os itens do array com um valor
console.log(newArray.fill(10));
