//? JavaScript is a synchronous and Single threaded language
//? JavaScript is a dynamically typed language
//? JavaScript is a case-sensitive language 
//? JavaScript is a single-threaded language 
//? JavaScript is a prototype-based language
//? JavaScript is a compiled language
//? JavaScript is a interpreted language

// Array is mutable data type 
// String is immutable data type

//! (1)
//? Immedeactly Invoked Function Expression (IIFE) / ()()
(function chai() { // named IIFE function
  console.log("IIFE");
})(); // OUTPUT: IIFE

(() => { // unnamed IIFE function
  console.log("IIFE");
})(); // OUTPUT: IIFE

((name) => {
  console.log(`my name is ${name}`); 
})("shohel"); // OUTPUT: my name is shohel / variable hoisting

