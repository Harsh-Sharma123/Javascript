// Let and Const are Block Scope
// Var is function Scope

{
    let firstName = "Harsh";
    var lastName = 'Sharma';
}

// console.log(firstName); // error
console.log(lastName); // no error

const age = 10;

function app(){
    if(true){
        // let firstName = "Harsh";
        var firstName = "Harsh";
        console.log(firstName);
    }
    console.log(firstName); // error in case of let firstName, no error in case of var firstName
}

app();