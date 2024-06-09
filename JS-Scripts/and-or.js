let firstName = "Harsh";
let age = 23;

if(firstName[0] === 'H' && age > 18){
    console.log("Firstname have first character H and also age is greater than 18!");
}else{
    console.log("Neither Firstname's first character is 'H' nor age is greater than 18!");
}

if(firstName[0]=='H' || age > 18){
    console.log("Either Firstname have first character H or else age if greater than 18 or both");
}else{
    console.log("Neither your firstname have first character H nor your age is greater than 18");
}