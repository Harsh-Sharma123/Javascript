// Filter Function 

const numbers = [1, 2, 3, 4];

const isEven = (number)=>{
    return number%2 == 0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

