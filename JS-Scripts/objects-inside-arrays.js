const users = [
    {userId: 1, firstName: "A", lastName: "X"},
    {userId: 2, firstName: "B", lastName: "Y"},
    {userId: 3, firstName: "C", lastName: "Z"}
];

for(let user of users){
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.lastName);
}

const [{userId: firstUserId}, {firstName: secondUserFirstName} , {lastName: thirdUserLastName}] = users;

console.log("First User ID : ", firstUserId);
console.log("Second User First Name : ", secondUserFirstName);
console.group("Third User Last Name : ", thirdUserLastName);