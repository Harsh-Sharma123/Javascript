hello(); // possible

function hello(){
    console.log("Hello");
}

sample(); // error

const sample = () => {
    console.log("Sample");
}

console.log(s); // error
let s = 3;
console.log(s);

console.log(h); // undefined
var h = 2; 
console.log(h);

console.log(l); // error
const l = 1;
console.log(l);