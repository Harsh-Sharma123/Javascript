// Important Array Methods

// ForEach Method

const numbers = [1, 2, 3, 4];

function myFunc(number, index){
    console.log(`Index is ${index} and number is ${number}`);
}

// numbers.forEach(myFunc);

numbers.forEach(function(number, index){
    console.log(`Index is ${index} and number is ${number}`);
})

const users = [
    {name: 'A', age: 20},
    {name: 'B', age: 21},
    {name: 'C', age: 22},
    {name: 'D', age:23}
];

users.forEach(function(user, index){
    console.log(`'Index is ${index} and Name : ${user.name} and Age : ${user.age}`);
})