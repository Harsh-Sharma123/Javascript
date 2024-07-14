let arr1 = [1, 2, 3];

// slice method
let arr2 = arr1.slice(0);
console.log(arr2);
console.log(arr1 === arr2);
arr2.push(4);
console.log(arr2);
console.log(arr1);

// concat method
let arr3 = [].concat(arr1);
console.log(arr1);
console.log(arr3);
console.log(arr1 === arr3);
arr3.push(4);
console.log(arr1);
console.log(arr3);

// spread operator
let arr4 = [...arr1];
console.log(arr1);
console.log(arr4);
console.log(arr1 === arr4);
arr4.push(4);
console.log(arr1);
console.log(arr4);