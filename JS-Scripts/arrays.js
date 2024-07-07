let fruits = ["apple", "mango", "grapes"]
let numbers = [1, 2, 3, 4]
let mixed = [1, 2, 3, "mango", null, undefined]

console.log(mixed);
console.log(numbers)
console.log(fruits[2])

console.log(fruits);
fruits[1] = "banana";
console.log(fruits);

let obj = {};

console.log(typeof obj);
console.log(typeof fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));