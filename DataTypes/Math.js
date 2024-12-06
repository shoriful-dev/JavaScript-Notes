console.log(Math.abs(4)); // OUTPUT: 4
console.log(Math.abs(-4)); // OUTPUT: 4

console.log(Math.ceil(4)); // OUTPUT: 4
console.log(Math.ceil(4.1)); // OUTPUT: 5
console.log(Math.ceil(4.9)); // OUTPUT: 5

console.log(Math.floor(4)); // OUTPUT: 4
console.log(Math.floor(4.1)); // OUTPUT: 4
console.log(Math.floor(4.9)); // OUTPUT: 4

console.log(Math.round(4.2)); // OUTPUT: 4
console.log(Math.round(4.9)); // OUTPUT: 5

console.log(Math.random()); // OUTPUT: 0.9999999999999999 / Random number from 0 to 1
console.log(Math.random() * 6); // OUTPUT: 5.949664918897227 / Height of the dice is 6 / Random number from 0 to 5
console.log((Math.random() * 6) + 1); // OUTPUT: 6.949664918897227  / Random number from 1 to 6 
console.log(Math.floor((Math.random() * 6) + 1)); // OUTPUT: 6 / Random number from 1 to 6
// Example:
let min = 10;
let max = 20;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
let random2 = Math.floor(Math.random() * (min - max + 1)) + max;
console.log(random); // OUTPUT: 15
console.log(random2); // OUTPUT: 19

console.log(Math.pow(2, 4)); // OUTPUT: 16
console.log(Math.sqrt(64)); // OUTPUT: 8
console.log(Math.max(2, 4, 6, 8, 10)); // OUTPUT: 10
console.log(Math.min(2, 4, 6, 8, 10)); // OUTPUT: 2

console.log(Math.E); // OUTPUT: 2.718281828459045 / Euler's number
console.log(Math.PI); // OUTPUT: 3.141592653589793  / Pi number   

for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
