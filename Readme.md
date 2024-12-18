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

## # Arrow Functions in JS : 
* Arrow functions were introduced in ES6.

const isEven = number => number %  2 === 0;

## # Function Expressions : 
* A function expression is very similar to, and has almost the same syntax as, a function declaration. <br>
* The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. <br>
* A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. <br>

## # Hoisting in Javascript : 
* Hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. 
* In turn, this allows us to use functions, variables, and classes before they are declared.

## # Lexical Scope
* Lexical scope is the ability for a function scope to access variables from the parent scope.
* We call the child function to be lexically bound by that of the parent function.

## # Block Scope vs Function Scope
* Let & Const are Block-Scope
* Var is Function-Scope

## # Default Parameters in JS : 
* Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

## # Rest Paraneters in JS :
* The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

## # Params Destructuring in JS :
JavaScript allows you to extract values from an object or array passed as a parameter to a function.

## # Callback Functions in JS : 
A callback is a function passed as an argument to another function.
There are two ways in which the callback may be called: synchronous and asynchronous. Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.

## # Arrays Methods :

* MAP() Function : 
* map() creates a new array from calling a function for every array element.
* map() does not execute the function for empty elements.
* map() does not change the original array.

* Filter() Function :
* The filter() method creates a new array filled with elements that pass a test provided by a function.
* The filter() method does not execute the function for empty elements.
* The filter() method does not change the original array.

* The reduce() method executes a reducer function for array element.
* The reduce() method returns a single value: the function's accumulated result.
* The reduce() method does not execute the function for empty array elements.
* The reduce() method does not change the original array.

* The sort() method sorts the elements of an array.
* The sort() method sorts the elements as strings in alphabetical and ascending order.
* The sort() method overwrites the original array.

* The find() method returns the value of the first element that passes a test.
* The find() method executes a function for each array element.
* The find() method returns undefined if no elements are found.
* The find() method does not execute the function for empty elements.
* The find() method does not change the original array.

* The every() method executes a function for each array element.
* The every() method returns true if the function returns true for all elements.
* The every() method returns false if the function returns false for one element.
* The every() method does not execute the function for empty elements.
* The every() method does not change the original array.

* The some() method checks if any array elements pass a test (provided as a callback function).
* The some() method executes the callback function once for each array element.
* The some() method returns true (and stops) if the function returns true for one of the array elements.
* The some() method returns false if the function returns false for all of the array elements.
* The some() method does not execute the function for empty array elements.
* The some() method does not change the original array.

* The splice() method adds and/or removes array elements.
* The splice() method overwrites the original array.

## Iterators in JS : 

* The iterator protocol defines how to produce a sequence of values from an object.
* An object becomes an iterator when it implements a next() method.
* The next() method must return an object with two properties:
* value (the next value)
* done (true or false)

## Sets in JS : 

* A JavaScript Set is a collection of unique values.
* Each value can only occur once in a Set.
* The values can be of any type, primitive values or objects.

## # Maps in JS : 

* A Map holds key-value pairs where the keys can be any datatype.
* A Map remembers the original insertion order of the keys.

### # This Keyword in JS : 

* In JavaScript, the this keyword refers to an object.
* The this keyword refers to different objects depending on how it is used.

## # Optional Chaining in JS : 

The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

## # Arrow Functions in JS : 

* Arrow functions were introduced in ES6.
* Arrow functions allow us to write shorter function syntax:
* let myFunction = (a, b) => a * b;

## # This Keyword in JS : 

* In JavaScript, the this keyword refers to an object.

## # Prototype in JS : 

* All JavaScript objects inherit properties and methods from a prototype:
    * Date objects inherit from Date.prototype
    * Array objects inherit from Array.prototype
    * Person objects inherit from Person.prototype
    * The Object.prototype is on the top of the prototype inheritance chain:
        * Date objects, Array objects, and Person objects inherit from Object.prototype.

## # New Keyword in JS : 

* JavaScript new keyword is used to create an instance of an object that has a constructor function.

On calling the constructor function with the ‘new’ operator, the following actions are taken:
   * A new empty object is created.
   * The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
   * The ‘this’ variable is made to point to the newly created object. It binds the property that is declared with the ‘this’ keyword to the new object.

## # Super Keyword in JS :

* The super keyword is used to call the parent class’s constructor to access its properties and methods.

* The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals. The super(...args) expression is valid in class constructors.
* super is an ECMAScript6 (ES6) feature.