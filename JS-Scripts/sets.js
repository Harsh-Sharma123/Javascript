// Sets (it is iterable)
// store data
// sets also have its own methods
// Order is not guaranteed
// unique items only (no duplicates allowed)
// const items = ['item1', 'item2', 'item3'];

const numbers = new Set();
numbers.add(1);
numbers.add(2);

numbers.add(2);

numbers.add(['item1', 'item2']);
numbers.add(['item1', 'item2']);

console.log(numbers);

const nums = [1,2,2,3,4,4,5];

console.log(nums.length)
const newset = new Set(nums);

console.log(newset);
console.log(newset.size);