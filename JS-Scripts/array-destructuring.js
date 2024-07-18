let arr1 = ["1", "2", "3", "4", "5"];

const [a1, a2, ...a3] = arr1;
console.log("First : ", a1);
console.log("Second : ", a2);
console.log("Rest : ", a3);