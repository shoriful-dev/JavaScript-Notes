//! Truthy & Falsy Values in JavaScript
//? Truthy Values => true, "shohel", "0", 1, -1, "false", " ", [], {}, function(){}, () => {}, Symbol(), BigInt(), 2344555657677887n, 
const user = true; // Truthy
const user2 = "shohel"; // Truthy
const user3 = "0"; // Truthy
const user4 = 1; // Truthy
const user5 = -1; // Truthy
const user6 = "false"; // Truthy
const user7 = " "; // Truthy
const user8 = []; // truthy
const user9 = {}; // truthy
const user10 = function () {}; // truthy
const user11 = () => {}; // truthy
const user12 = Symbol(); // truthy
const user13 = BigInt(); // truthy
const user14 = 2344555657677887n; // truthy

//? Falsy Values => "", 0, -0, false, null, undefined, NaN, BigInt 0n, Symbol()
const nam = ""; // Falsy
const nam2 = 0; // Falsy
const nam3 = -0; // Falsy
const nam4 = false; // Falsy
const nam5 = null; // Falsy
const nam6 = undefined; // Falsy
const nam7 = NaN; // Falsy
const nam8 = 0n; // Falsy
const nam9 = Symbol(); // Falsy

// Example (1)
const fullName = "Shohel";
if (fullName) {
  console.log("Got user Full name");
} else {
  console.log("Don't have user Full name");
} // OUTPUT: Got user Full name

//TODO Tricky Examples 
false === 0; // true
false === ""; // true
false === false; // true

true === 1; // false
true === "1"; // false
true === true; // true

