// Before Default Parameters
function addTwo(a, b){
    if(typeof b === "undefined")
        b = 1;
    return a + b;
}

console.log(addTwo(2, 3));
console.log(addTwo(2));

// Using Default Parameters
function addTwoNum(a, b=1){
    return a+b;
}

console.log(addTwoNum(2, 3));
console.log(addTwoNum(2));