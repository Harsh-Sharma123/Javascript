// Callback Functions

function myFunc2(){
    console.log("Inside Func 2");
}

function myFunc(a){
    console.log("Inside Func");
    // console.log(a);
    a();
}


myFunc(myFunc2);