//! Arrow Function
const add = (num1, num2) => {
  console.log(num1 + num2);
};
console.log(add(3, 5)); // OUTPUT: 8

//? Implicit return
const add2 = (num1, num2) => num1 + num2;
console.log(add2(3, 5)); // OUTPUT: 8

const add3 = (num1, num2) => num1 + num2;
console.log(add3(3, 5)); // OUTPUT: 8

const add4 = (num1, num2) => ({ names: "shohel", age: 21 });
console.log(add4(3, 5)); // OUTPUT: { names: "shohel", age: 21 }

//! Immedeactly Invoked Function Expression (IIFE) / ()()
(function chai() { // named IIFE function
  console.log("IIFE");
})(); // OUTPUT: IIFE

(() => { // unnamed IIFE function
  console.log("IIFE");
})(); // OUTPUT: IIFE

((name) => {
  console.log(`my name is ${name}`); 
})("shohel"); // OUTPUT: my name is shohel / variable hoisting


//! this Keyword
function chai() {
  // this not work in function / Only work in object
  console.log(this);
}
chai(); // OUTPUT: Window

const users = {
  names: "prince",
  price: 200,
  wellCome: function () {
    console.log(`Welcome ${this.names}`); // this means current object users
  },
};
users.wellCome(); // OUTPUT: Welcome prince
