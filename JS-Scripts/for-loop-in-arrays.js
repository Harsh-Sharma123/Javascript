let fruits = ["apple", "mango", "banana", "grapes"];

// for(let i = 0; i< 4; i++){
//     console.log(fruits[i]);
// }

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for (let fruit of fruits){
    console.log(fruit);
}

for(let index in fruits){
    console.log(index);
    console.log(fruits[index]);
}