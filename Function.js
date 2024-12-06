function names() {
  console.log("John");
  console.log("Shohel");
  console.log("Sakib");
  console.log("Rakib");
  console.log("Shakib");
}
names(); // OUTPUT: John, Shohel, Sakib, Rakib, Shakib

function add(num1, num2) {
  // (num1, num2) inside Parameter
  console.log(num1 + num2);
}
add(10, 20); // OUTPUT: 30 / Pass arguments to the function

function add(num1, num2) {
  console.log(num1 + num2);
}
add(10, "20"); // OUTPUT: 1020

function add(num1, num2) {
  console.log(num1 + num2);
}
add(10, "abc"); // OUTPUT: 10abc

function add(num1, num2) {
  console.log(num1 + num2);
}
add(10, null); // OUTPUT: 10

function add(num1, num2) {
  console.log(num1 + num2);
}
const result = add(3, 5);
console.log(result); // undefined

function add(num1, num2) {
  let results = num1 + num2;
  return results;
}
const results = add(3, 5);
console.log(results); // OUTPUT: 8

function add(num1, num2) {
  return num1 + num2;
}
const results2 = add(3, 5);
console.log(results2); // OUTPUT: 8
function loginMassage(user = "Guest") {
  return `Welcome ${user}`;
}
console.log(loginMassage("Shohel")); // OUTPUT: Welcome Shohel 
console.log(loginMassage("")); // OUTPUT: Welcome
console.log(loginMassage()); // Undefined
console.log(loginMassage()); // OUTPUT: Welcome Guest / by default value is Guest
console.log(loginMassage("Shohel")); // OUTPUT: Welcome Shohel / by inline value is important

function calculetPrice(price) {
  return price
}
console.log(calculetPrice(100)); // OUTPUT: 100
function calculetPrice(price) {
  return price
}
console.log(calculetPrice(100, 200, 300)); //` OUTPUT: 100

function calculetPrice(...price) {    // Rest Parameter 
  return price
}
console.log(calculetPrice(100, 200, 300)); // OUTPUT: [ 100, 200, 300 ]

function calculetPrice(val1, val2, ...price) {    // Rest Parameter 
  return price
}
console.log(calculetPrice(100, 200, 300 , 400, 500)); // OUTPUT: [ 300, 400, 500 ]

const course = {
  name: "JavaScript",
  price: 200,
  teacher: "Shohel",
  student: "Shakib",
}
function handleCourse(anyObject) {
  console.log(`Name: ${anyObject.name}, Price: ${anyObject.price}, Teacher: ${anyObject.teacher}, Student: ${anyObject.student}`);
}
handleCourse(course); // OUTPUT: Name: JavaScript, Price: 200, Teacher: Shohel, Student: Shakib 

const myArray = [1, 2, 3, 4, 5];
function handleArray(getArray) {
  return getArray[1]
}
console.log(handleArray(myArray)); // OUTPUT: 2
