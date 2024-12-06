//? Primitive Data Types
// String, Number, Boolean, Undefined, Null, BigInt, Symbol

let name = "Shohel"; // String
let age = 21; // Number
let isApproved = true; // Boolean, true-1, false-0
let firstName; // Undefined
let selectedColor = null; // Null, And Null is Object
let score = 2344555657677887n; // BigInt
let id = Symbol("id"); // Symbol

//? NON-Primitive Data Types / Reference Data Types
// Object (Arrays, Functions, Dates, etc.)

let person = {name: "Shohel",age: 21}; // Object
let colors = ["red", "green", "blue"]; // Array
let myFunction = function () {}; // Function
let date = new Date(); // Date

//? Practices 
console.log(typeof "shohel"); // string
console.log(typeof 1); // number
console.log(typeof NaN); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol); // function
console.log(typeof BigInt); // function
console.log(typeof Symbol("id")); // symbol
console.log(typeof 2344555657677887n); // bigint
console.log(typeof String); // function
console.log(typeof Array); // function
console.log(typeof Object); // function
console.log(typeof Function); // function
console.log(typeof {name: "shohel", age: 21}); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof function () {}); // function

//? Stack Memory (Primitive Data Types) / Value (Shallow Copy) 
let username = "shohel";
let anotherUsername = username;
anotherUsername = "Prince Shoel";
console.log(username); // OUTPUT: shohel
console.log(anotherUsername); // OUTPUT: Prince Shoel


//? Heap Memory (Non-Primitive Data Types) / Reference (Deep Copy) 
let userOne = {
  name: "Shohel",
  age: 21
}
let userTwo = userOne;
userTwo.name = "Prince Shoel";
userTwo.age = 22;
console.log(userOne.name); // OUTPUT: Prince Shoel
console.log(userTwo.name); // OUTPUT: Prince Shoel
console.log(userOne.age); // OUTPUT: 22
console.log(userTwo.age); // OUTPUT: 22

if (age > 0, age < 1, age <= 0, age => true, age => true) {
  console.log("You are not a valid age.");
}
