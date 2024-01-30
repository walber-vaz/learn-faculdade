const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(newArray.length);
console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[newArray.length - 1]);

for (let i = 0; i < newArray.length; i++) {
  console.log(`Posição ${i} do array: ${newArray[i]}\r`);
}