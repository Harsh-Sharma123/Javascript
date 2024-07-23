const person = {
    name: "Harsh",
    age: 23,
    "personal hobbies": ["playing", "paying"]
};

for(let key in person){
    console.log(person.key);  // undefined
    console.log(key, person[key]);
}

// to get all the keys
console.log(Object.keys(person));

const keys = Object.keys(person);
console.log("Keys : ", keys);

console.log(Array.isArray(keys));

for(let key of Object.keys(person)){
    console.log(key, person[key]);
}