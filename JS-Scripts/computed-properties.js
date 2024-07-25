const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

const obj = {
    key1 : value1,
    key2 : value2
};

console.log(obj);

// Computed Properties
const newObj = {
    [key1] : value1,
    [key2] : value2
};

const newObj2 = {};

newObj2[key1] = value1;
newObj2[key2] = value2;

console.log(newObj);
console.log(newObj2);