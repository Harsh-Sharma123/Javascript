const person = {
    name: "Harsh",
    age: 23,
    hobbies: ['playing', 'trekking']
};

console.log(person);

// access data from object
console.log(person.name);
console.log(person["name"]);

// add key-value pair to object
person.gender = "male";
console.log(person);
