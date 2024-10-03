const numbers = [1, 2, 3, 4];

const square = function (number){
    return number*number;
}

const squareNumbers = numbers.map(square);

console.log(squareNumbers);

const users  = [
    {firstName : 'A', age: 20},
    {firstName : 'B', age: 21},
    {firstName : 'C', age: 22},
    {firstName : 'D', age: 23}
];

const firstNames = users.map((user)=>{
    return user.firstName;
});

console.log(firstNames);