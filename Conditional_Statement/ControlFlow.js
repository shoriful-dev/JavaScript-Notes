//! if else Statement
let a = 10;
if (a == 10) {
  // loose equal (==) Data type doesn't matter
  console.log("I am true");
} else {
  console.log("I am false");
} // OUTPUT: I am true

if (a === "10") {
  // strict equal (===) Data type must be same
  console.log("I am true");
} else {
  console.log("I am false");
} // output: I am false

if (a !== "10") {
  // strict not equal (!==) Data type must be same
  console.log("I am true");
} else {
  console.log("I am false");
} // output: I am true

//! if, else if Statement
let age = 10;
if (age < 10) {
  console.log("I am young");
} else if (age >= 10 && age <= 5) { // && (and) All conditions must be true then it will be true
  console.log("I am teenager");
} else {
  console.log("I am old");
} // OUTPUT: I am old 
