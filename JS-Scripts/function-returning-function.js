// Function Returning Function

function hello(){
    return function (){
        return "Hello World!";
    }
}

let ans = hello();
console.log(ans());