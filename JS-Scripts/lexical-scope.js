// let myvar = 'global';

function myApp () {
    var myvar = 'Function';

    const myApp2 = ()=>{
        // var myvar = 'Inside Function';
        console.log(myvar);
    }

    console.log(myvar);
    myApp2();
}

myApp();
console.log(myvar);