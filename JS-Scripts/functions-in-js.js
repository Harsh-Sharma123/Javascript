function happyBirthday(){
    console.log("Happy Bithday !!!!");
}

happyBirthday();

happyBirthday();

function sumThreeNumber(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(sumThreeNumber(1, 2,3 ));

function isEven(num){
    return num%2===0?"Even Number" : "Odd Number";
}

console.log(isEven(10));

function firstChar(str){
    return str[0];
}

console.log("First Character of Hello : ", firstChar("Hello"));

function findTarget(arr, target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target) return "Found";
    }
    return "Not Found";
}

console.log(findTarget([1, 2, 3, 4, 5], 5));