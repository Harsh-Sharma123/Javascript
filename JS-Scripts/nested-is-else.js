let winningNum = 19;
let userGuess = +prompt("Enter your number : ");

// console.log(typeof userGuess, userGuess);

if(userGuess === winningNum){
    console.log("Your Guess is Right!!");
}else{
    if(userGuess < winningNum){
        console.log("Too Low !!");
    }else{
        console.log("Too High !!");
    }
}