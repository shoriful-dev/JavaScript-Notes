//! All String Methods in Javascript.
// .length
// .toUpperCase()
// .toLowerCase()
// .slice()
// .substr()
// .replace()
// .split()
// .charAt()
// .concat()
// .trim()
// .includes()
// .indexOf()
// .repeat()
// .search()
// .charCodeAt()
// .fromCharCode()
// .escape()
// .unescape()
// .toFixed()
// .toLocaleString()
// .toString()
// .toPrecision()
// .valueOf()
// .codePointAt()
// .fromCodePoint()

//? Length Method 
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length); // OUTPUT: 26

//? toUpperCase Method
let text2 = "Bangladesh";
console.log(text2.toUpperCase()); // OUTPUT: BANGLADESH

//? toLowerCase Method
let text3 = "Bangladesh";
console.log(text3.toLowerCase()); // OUTPUT: bangladesh

//? slice Method
let text4 = "Bangladesh";
console.log(text4.slice(0, 5)); // OUTPUT: Bangl
console.log(text4.slice(-10, 5)); 

//? substr Method
let text5 = "Bangladesh";
console.log(text5.substr(0, 5)); // OUTPUT: Bang

//? replace Method
let text6 = "Bangladesh";
console.log(text6.replace("B", "P")); // OUTPUT: Pangladesh

//? split Method
let text7 = "Bangladesh";
console.log(text7.split("")); // OUTPUT: [ 'B', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h' ]
console.log(text7.split(" ")); // OUTPUT: [ 'Bangladesh' ]
console.log(text7.split("B")); // OUTPUT: [ '', 'angladesh' ] / B is a separator character 

//? charAt Method
let text8 = "Bangladesh";
console.log(text8.charAt(0)); // OUTPUT: B
console.log(text8.charAt(1)); // OUTPUT: a

//? concat Method
let text9 = "Bangladesh";
let text10 = "Shohel";
console.log(text9.concat(text10)); // OUTPUT: BangladeshShohel
console.log(text9.concat(" ", text10)); // OUTPUT: Bangladesh Shohel

//? trim Method
let text11 = "    Bangladesh    ";
console.log(text11.trim()); // OUTPUT: Bangladesh

//? includes Method / Returns true or false Values 
let text12 = "Bangladesh";
console.log(text12.includes("B")); // OUTPUT: true
console.log(text12.includes("b")); // OUTPUT: false

//? indexOf Method
let text13 = "Bangladesh";
console.log(text13.indexOf("B")); // OUTPUT: 0
console.log(text13.indexOf("a")); // OUTPUT: 1
console.log(text13.indexOf("h")); // OUTPUT: 9

//? repeat Method
let text15 = "Bangladesh";
console.log(text15.repeat(2)); // OUTPUT: BangladeshBangladesh

//? search Method
let text16 = "Bangladesh";
console.log(text16.search("B")); // OUTPUT: 0

//? charCodeAt Method
let text17 = "Bangladesh";
console.log(text17.charCodeAt(0)); // OUTPUT: 66

//? fromCharCode Method
let text18 = "Bangladesh";
console.log(String.fromCharCode(66)); // OUTPUT: B

//? escape Method
let text19 = "Bangladesh";  
console.log(text19.escape()); // OUTPUT: \u0020Bangladesh\u0020

//? unescape Method
let text20 = "Bangladesh";
console.log(text20.unescape()); // OUTPUT: Bangladesh

//? trumStart Method
let text22 = "    Bangladesh    ";
console.log(text12.trimStart()); // OUTPUT: Bangladesh

//? trimEnd Method
let text23 = "    Bangladesh    ";
console.log(text12.trimEnd()); // OUTPUT: Bangladesh

//? codePointAt Method
let text24 = "Bangladesh";
console.log(text24.codePointAt(0)); // OUTPUT: 66

//? toFixed Method
let text25 = 12345;
console.log(text25.toFixed(3)); // OUTPUT: 12345.000

//? toLocaleString Method
let text26 = 123454454;
console.log(text26.toLocaleString()); // OUTPUT: 123,454,454

//? toString Method
let text27 = 12345;
console.log(text27.toString()); // OUTPUT: 12345

//? toPrecision Method
let text28 = 12345;
console.log(text28.toPrecision(2)); // OUTPUT: 12.45

//! Example: (1)
let myName = "Prince Shoel";
let myAge = 21;

console.log(`My name is ${myName} and I am ${myAge} years old!`); // OUTPUT: My name is Prince Shoel and I am 21 years old!
console.log(`My name is ${myName.toUpperCase()} and I am ${myAge} years old!`); // OUTPUT: My name is PRINCE SHOEL and I am 21 years old!

//! Example: (2)
const name = "Shohel";
const gameName = new String("Shohel");

console.log(name); // OUTPUT: Shohel
console.log(gameName); // OUTPUT: Shohel
console.log(typeof name); // OUTPUT: string
console.log(typeof gameName); // OUTPUT: object 
