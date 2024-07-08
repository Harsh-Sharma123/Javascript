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

// Push Method
console.log("Before Push : ", fruits);
fruits.push("orange");
console.log("After Push : ", fruits);

// Pop Method
let poppedFruit = fruits.pop();
console.log("Popped Fruit : ", poppedFruit);
console.log("After Popping : ", fruits);

// Unshift Method
console.log("Before Unshift : ", fruits);
fruits.unshift("Myfruit");
console.log("After Unshift : ", fruits);

// Shift Method
console.log("Before Shift : ", fruits);
fruits.shift();
console.log("After Shift : ", fruits);