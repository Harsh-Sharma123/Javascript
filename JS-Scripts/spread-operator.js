// spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = [...arr1, ...arr2];
console.log(newArr);

const newArr2 = [..."123456"];
console.log(newArr2);

// spread operator in objects

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 = {
    key3 : "value3",
    key4 : "value4"
};

const newObj = {...obj1, ...obj2};
console.log(newObj);

const newObj2 = {...obj1, ...obj2, key69: "value69"};
console.log(newObj2);

const newObj3 = {..."abc"};
console.log(newObj3);

const newObj4 = {...["item1", "item3"]};
console.log(newObj4);