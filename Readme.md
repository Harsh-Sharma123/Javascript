# JAVASCRIPT

##  # History of Javascript
* Javascript was invented by Brendan Eih in 1995.
* It was developed by Netscape Navigator.
* It became ECMA-262 standard in 1997.
* Javascript is backward compatible but not forward compatible.
    * Backward Compatibility means ability of a language to work wih older version of itself or other components. Meaning that once something is accepted as vaid JS, then there will be no future changes to language. Code written in 1995 should work still today.
    * Forward Compatibility means ability of a language to work with newer version of itself or other components, meaning that including a new addition to language in a program would not cause that program to break if it were run in an old JS engine.

## # Ways of importing Javascript in HTML
* Use Script tag in Body of HTML (Recommended)
* Use Script tag in Head of HTML with `defer` attribute

* NOTE : It is recommended to put script tag at the bottom of the body tag so that it won't stop the browser to parse the html. When a browser gets to a script tag, it stops everything and first loads the file in script and then evaluates it. Thus putting script tag in head or start of body will make user to wait for longer period of time staring at blank screen. But now this is also solved where we can make the browser download JS asynchronously by using defer or async attributes in the script tag.

## # Comments in Javascript
* `//` -> This is used to mark a line as comment in Javascript.

## # Varaibles in Javascript
* Varaibles are used to store some information, we can use that information later, also we can change that information later.
* `use strict` -> This can be used to activate strict mode in JS File.

## # Rules for Naming a Variable in Javascript
* You cannot start a vaiable name with number, ex. 1value (invalid) but value1 (valid)
* You can use only _ (unerscore) or $ (Dollar) symbol
ex, fist_name (valid), $firstname (valid)
* You cannot use Spaces
ex, first name (invalid)
    * use snake_case_writing ex, first_name
    * use camelCaseWriting ex, firstName
* Convention : start with small letter and use camelCase.

## # Let Keyword in Javascript
* Let keyword can be used to dclare variables.
* Let is preferred over var.
* Variable declared using LET once cannot be re-declared but can be modified.

## # Const Keyword in Javascript
* Const keyword is used to declare constant variables.  
* ex, const PI = 3.14;

## # Difference between LET, VAR and CONST 

|             |   Redeclare   |   Reassign    |     Scope     |  Temporal Dead Zone  
| :---:       |   :---        |   :---        |   :---        |   :---
|   **var**   |   Possible    |   Possible    |    Function   |   No
|   **let**   |  Not Possible |   Possible    |    Block      |   Yes
|  **const**  |  Not Possible |  Not Possible |    Block      |   Yes

## # Strings in Javascript
* In JS, we can use Strings inside double quotes (""), single quote ('') or inside string template literals (``)
* In JS, string indexing starts from 0.

## # String Methods in Javascript
* trim() -> returns new string after removing extra spaces from start and end of string.
* toUpperCase() -> returns new string after returning all characters to uppercase
* toLowerCase() -> returns a new string after returning all characters to lowercase
* substring() -> returns part of the string b/w start and end of indexes

## # Data Types in Javascript
* String 
* Number
* Booleans
* Undefined
* Null
* BigInt
* Symbol

- typeof variable  ->  return data type of variables
- Convert number to string : 
    let age = 22; <br>
    age = age + "";       or          age = String(age); <br>
    console.log(typeof(age)) ;  -> string 

## # String Concatenation
let firstName = "Harsh"; <br>
let lastName = "Sharma"; <br>
let fullName = firstName + " " + lastName; 

## # Template String
let age = 23; <br>
let name = "Harsh Sharma"; <br>
let aboutMe = `My name is ${name} and my age is ${age}.`;

## Undefined Type
* something that exists in memory but not assigned any value

let firstName; <br>
console.log(firstName);        -> undefined  <br>
var lastName; <br>
console.log(lastName);         -> undefined  <br>

## # Null Type
* something that is non-existent <br>
let firstName = null; <br>
console.log(typeof null);       -> Object 

## # BigInt in Javascript
* JS can safely store maximum value of integer upto : 9007199254748991

console.log(Number.Max_SAFE_INTEGER); <br>

let myNum = BigInt(11111111111111111111); <br>
console.log(typeof myNum);      -> bigint

let newNum = 111111111111111111n; <br>
console.log(typeof newNum);

* We can't mix BigInt with other data types.

## # Booleans & Comparision Operators
let num1 = 6; <br>
let num2 = 7; <br>
console.log(num1 >= num2); <br>

== this compares just values and not the data types
=== is used to compare values along with data types

let num1 = 7;    <br>
let num2 = '7';    <br>

console.log(typeof num1);    <br>
console.log(typeof num2);    <br>

console.log(num1 == num2);   ->   true      <br>
console.log(num1 === num2);  ->   false     <br>

Similarly, != and !== works.

console.log(num1 != num2);   -> false (because it will compare just values and not data types and since both are 7, so false) <br>
console.log(num1 !== num2);  -> true (because it will compare both values and types, since types are different hence true)    <br>

## IF-ELSE Conditionals 

let firstName = "Harsh"; <br>
if(firstName[0] === 'H'){  <br>
    console.log("Firstname starts with H");  <br>
}else{  <br>
    console.log("FirstName does not starts with H");  <br>
}

## # Truthy & Falsy Values
Falsy Values : '', 0, false, undefined, null
Truthy Values : "abc" (characters), 1,-1 (numbers other than 0)

let firstName = undefined; <br>
if(firstName){ <br>
    console.log("FirstName is not empty!"); <br>
}else{ <br>
    console.log("FirstName is empty!"); <br>
} <br>

let name = "Harsh"; <br>
if(name){ <br>
    console.log("FirstName is not empty!"); <br>
}else{ <br>
    console.log("FirstName is empty!"); <br>
} <br>

## # Ternary Operator
let age = 23; <br>

let drink = age > 12 ? 'Coffee' : 'Milk'; <br>

console.log(drink); <br>

## 'AND' and 'OR' Operators 
let firstName = "Harsh"; <br>
let age = 23; <br>

if(firstName[0]=='H' && age > 18){ <br>
    console.log("Name starts with H and age is above 18"); <br>
}else{ <br>
    console.log("Inside Else!"); <br>
} <br>

if(firstName[0]=='H' || age > 18){ <br>
    console.log("Either Firstname have first character H or else age if greater than 18 or both"); <br>
}else{ <br>
    console.log("Neither your firstname have first character H nor your age is greater than 18"); <br>
} <br>

## # Nested IF-ELSE Conditions
if(userGuess === winningNum){ <br>
    console.log("Your Guess is Right!!"); <br>
}else{ <br>
    if(userGuess < winningNum){ <br>
        console.log("Too Low !!"); <br>
    }else{ <br>
        console.log("Too High !!"); <br>
    } <br>
} <br>

## # If-ELSE IF-ELSE Conditions
let temp = 15; <br>

if(temp < 0){ <br>
    console.log("Temp is in minus!"); <br>
}else if(temp < 16){ <br>
    console.log("it is cold outside!"); <br>
}else if(temp < 25){ <br>
    console.log("Weather is Good!"); <br>
}else if(temp < 40){ <br>
    console.log("Turn on the AC!"); <br>
}else{ <br>
    console.log("Its Too Hot!"); <br>
} <br>

## # While Loop in JS
let i = 0; <br>
while(i<=10){ <br> 
    console.log(i); <br>
    i++; <br>
} <br>

## # For Loop in JS
for(let i = 0; i <= 10 ; i++){ <br>
    console.log(i); <br>
} <br>

## # Break & Continue Keywords
console.log("Example of Break : "); <br>
for (let i=0;i<=10;i++){ <br>
    if(i == 4) break; <br>
    console.log(i); <br>
} <br>

console.log("Example of Continue : "); <br>
for (let i=0;i<=10;i++){ <br>
    if(i == 4) continue; <br>
    console.log(i); <br>
} <br>

## # Do-While Loop
let i = 0; <br>

do{ <br>
    console.log(i); <br>
    i++; <br>
}while(i<=9); <br>

## # Arrays in JS
Arrays are Reference Type. <br>
Arrays are ordered collection of items. <br>

let fruits = ["apple", "mango", "grapes"] <br>
let numbers = [1, 2, 3, 4] <br>
let mixed = [1, 2, 3, "mango", null, undefined] <br>

console.log(mixed); <br>
console.log(numbers); <br>
console.log(fruits[2]); <br>

console.log(fruits); <br>
fruits[1] = "banana"; <br>
console.log(fruits); <br>

let obj = {}; <br>

console.log(typeof obj); <br>
console.log(typeof fruits); <br>
console.log(Array.isArray(fruits)); <br>
console.log(Array.isArray(obj)); <br>

// Push Method <br>
console.log("Before Push : ", fruits); <br>
fruits.push("orange"); <br>
console.log("After Push : ", fruits); <br>

// Pop Method <br>
let poppedFruit = fruits.pop(); <br>
console.log("Popped Fruit : ", poppedFruit); <br>
console.log("After Popping : ", fruits); <br>

// Unshift Method <br>
console.log("Before Unshift : ", fruits); <br>
fruits.unshift("Myfruit"); <br>
console.log("After Unshift : ", fruits); <br>

// Shift Method <br>
console.log("Before Shift : ", fruits); <br>
fruits.shift(); <br>
console.log("After Shift : ", fruits); <br>

## # Primitive vs Reference Types

# Primitive Types
They are stored in memory in Stack.

let num1 = 6;
let num2 = num1;

console.log("Before Changing : ");
console.log("Num1 : ", num1);
console.log("Num2 : ", num2);

num1 = 7;
console.log("After Changing Num1 : ");
console.log("Num1 : ", num1);
console.log("Num2 : ", num2);

let arr1 = ["1", "2"];
let arr2 = arr1;
console.log("Arrays Before : ");
console.log("Arr1 : ", arr1);
console.log("Arr2 : ", arr2);

arr1.push("3");
console.log("After Updating Arr1 : ");
console.log("Arr1 : ", arr1);
console.log("Arr2 : ", arr2);

Reference Types are stored in Heap Memory.
With the address of their heap memory location in Stack.

## # Cloning an Array : 
1. Use Slice Method : let arr2 = arr1.slice(0);
2. Use Concat Method : let arr2 = [].concat(arr1);
3. Use Spread Operator : let arr2 = [...arr1];

## # Destructuring Arrays in JS : 
const [a1, a2, ...a3] = arr1;

In this way, a1 will be assigned arr1[0], a2 will be assigned arr1[1] and a3 will be assigned rest of array items. <br>
In case, arr1 = [0]; <br>
then a1 will be assigned arr1[0], a2 will be assigned 'undefined' and a3 will be assigned an empty array.

## # Objects in JS : 
* Arrays are good but not sufficient to store real world data.
* Objects stores data in key-valye pairs.
* Objects don't have indexes.
* Objects are also reference type like arrays.

## # Computed Properties : 
const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

// Computed Properties -> A way to use variables in keys and values in Objects
const newObj = {
    [key1] : value1,
    [key2] : value2
};

console.log(newObj);

## # Functions in JS : 
* A JavaScript function is a block of code designed to perform a particular task.
* A JavaScript function is executed when "something" invokes it (calls it).


## # Function Expressions : 
* A function expression is very similar to, and has almost the same syntax as, a function declaration. <br>
* The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. <br>
* A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. <br>