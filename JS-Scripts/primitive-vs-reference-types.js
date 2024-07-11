let num1 = 6;
let num2 = num1;

console.log("Before Changing : ");
console.log("Num1 : ", num1);
console.log("Num2 : ", num2);

num1 = 7;
console.log("After Changing Num1 : ");
console.log("Num1 : ", num1);
console.log("Num2 : ", num2);

let arr1 = ["1", "2"];
let arr2 = arr1;
console.log("Arrays Before : ");
console.log("Arr1 : ", arr1);
console.log("Arr2 : ", arr2);

arr1.push("3");
console.log("After Updating Arr1 : ");
console.log("Arr1 : ", arr1);
console.log("Arr2 : ", arr2);