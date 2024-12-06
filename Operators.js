//! Arithmetic Operators
// Addition (+)	Adds two numeric operands.	x + y = 15
// Subtraction (-) Subtract right operand from left operand.	x - y = 5
// Multiplication (*)	Multiply two numeric operands.	x * y = 50
// Division (/)	Divide left operand by right operand.	x / y = 2
// Modulus (%)	Returns remainder of two operands.	x % y = 0
// Increment (++)	Decrease value by one.	y-- = 5
// Decrement (--)	Increase operand value by one.	++x = 11
// Exponentiation (**) Raise one operand to the power of the other operand.	x ** y = 100000

2 + 3   // ANSWER: 5. This adds the operands.

10 * 5 // ANSWER: 50. This multiplies the operands.

10 % 3 // ANSWER: 1. This returns the remainder of dividing the two operands.

10++   // ANSWER: 11. This increases the operands by 1.

100-- // ANSWER: 9. This decreases the operands by 1

10 ** 3 // ANSWER: 1000. This multiplies the operands by the power of 3 ( 10 * 10 * 10)

10 - 3 // ANSWER: 7. This substracts the operands

10 / 5 //ANSWER: 2. This divides 10 by 5

//! Assignment Operators
// Assignment (=)	Assigns right operand to left operand.	x = 5
// Addition Assignment (+=)	Adds right operand to left operand.	x += 5 = 10
// Subtraction Assignment (-=)	Subtracts right operand from left operand.	x -= 5 = 5
// Multiplication Assignment (*=)	Multiplies left operand by right operand.	x *= 5 = 25
// Division Assignment (/=)	Divides left operand by right operand.	x /= 5 = 5
// Modulus Assignment (%=)	Returns remainder of left operand divided by right operand.	x %= 5 = 0
// Exponentiation Assignment (**=)	Raises left operand to the power of right operand.	x **= 5 = 32768

const author = "Franklin"
const platform = "Freecodecamp"
const age = 78

let people = 20;
people += 20
console.log(people) // OUTPUT: 40

let cars = 30
cars -= 20
console.log(cars) //OUTPUT: 10

let result = 400;  //The Assignment operator was used to assign the value 400 to the variable result.

result += 20; 
consle.log(result)  //OUTPUT: 420. The value of the left operand was added to 20 and the value assigned to the left operand. (400 + 20)

result -= 20; 
consle.log(result)  //OUTPUT: 400. The value of the right operand was subtracted from the left operand the value assigned to the left operand. (420 - 20)

result *= 10 
consle.log(result)  //OUTPUT: 4000. The values of both operands are multiplied and the value from the operation is assigned to the left operand.

result /= 10; 
consle.log(result)  //OUTPUT: 400. The left operand is divided by 10 and the value from the operation is assigned to the left operand.

result %= 21;
consle.log(result)  //OUTPUT: 21. The left operand is divided by 21 and the remainder from the operation is assigned to the left operand.

result **= 2; 
consle.log(result)  //OUTPUT: 440. The left operand is raised by the power of 2 and the value is assigned to the left operand.

//! Comparison Operators
// Equals (==)	Checks if two operands are equal.	x == y = false
// Not Equal (!=)	Checks if two operands are not equal.	x != y = true
// Strict Equal (===)	Checks if two operands are equal in value and data type.	x === y = false
// Strict Not Equal (!==)	Checks if two operands are not equal in value or data type.	x !== y = true
// Greater than (>)	Checks if left operand is greater than right operand.	x > y = false
// Less than (<)	Checks if left operand is less than right operand.	x < y = true
// Greater than or equal (>=)	Checks if left operand is greater than or equal to right operand.	x >= y = false
// Less than or equal (<=)	Checks if left operand is less than or equal to right operand.	x <= y = true

10 == 10  // ANSWER: True. It returns true because 10 is equal to 10.

10 != 7 // ANSWER: True. It returns a Truthy value because 10 is not equal to 7.

10 == "10" //ANSWER: True. It returns true because 10 equals 10.

10 === "10" //ANSWER: False. This returns false because 10, which is of type number, is not equal to "10" which is of type string. It compares them strictly by their values and by their type.

10 !== "10" // ANSWER: True. It returns a Truthy value because 10, which is of type number, is not equal to "10", which of type string.

10 > 30  //ANSWER: False. It returns false because 10 is not greater than 30.

10 < 50 //ANSWER: True. This returns a truthy value because 10 is less than 50.

10 >= 70  //ANSWER: False. This will return a falsly value because 10 is not greater than 70, nor is it equal to 70.

10 <= 34 //ANSWER: True. This is true because 10 is less than 34 (even though it's not equal to 34 - it's "less than or equal to").

//! Logical Operators 
// Logical AND (&&)	Checks if both operands are true.	x && y = false
// Logical OR (||)	Checks if either operand is true.	x || y = true
// Logical NOT (!)	Checks if operand is false.	!x = true

//? USING THE AND(&&) OPERATOR
// true && false = false;
// false && false = false;
// true && true = true
// false && false = false

let canDrive = true;
let hasLicense = true;

const readyToDrive = canDrive && hasLicense;
console.log(readyToDrive) // OUTPUT: true

//? USING THE OR(||) OPERATOR
// true || false = true;
// false || true = true
// true || true = true
// false || false = false;

let canDrive2 = true;
let hasLicense2 = false;

const readyToDrive2 = canDrive || hasLicense;
console.log(readyToDrive) // OUTPUT: true

//? USING THE NOT(!) OPERATOR
/* !true = false;    */
/* !false = true     */

let canDrive3 = true;
let hasLicense3 = false;

const readyToDrive3 = !canDrive3;
const readyToDrive4 = !hasLicense3;
console.log(readyToDrive3) // OUTPUT: false
console.log(readyToDrive4) // OUTPUT: true

//! Bitwise Operators
// Bitwise AND (&)	Checks if both operands are true.	x & y = 0
// Bitwise OR (|)	Checks if either operand is true.	x | y = 1
// Bitwise XOR (^)	Checks if either operand is true.	x ^ y = 1
// Bitwise NOT (!)	Checks if operand is false.	!x = 1

//? USING THE BITWISE AND(&) OPERATOR
// 0 & 0 = 0;
// 0 & 1 = 0;
// 1 & 0 = 0;
// 1 & 1 = 1;

//? USING THE BITWISE OR(|) OPERATOR
// 0 | 0 = 0;
// 0 | 1 = 1;
// 1 | 0 = 1;
// 1 | 1 = 1;

//? USING THE BITWISE XOR(^) OPERATOR
// 0 ^ 0 = 0;
// 0 ^ 1 = 1;
// 1 ^ 0 = 1;
// 1 ^ 1 = 0;

//? USING THE BITWISE NOT(~) OPERATOR
// ~0 = -1;
// ~1 = -2; 

//! Ternary Operator 
let results = 10 > 5 ? "I am true" : "I am false";
console.log(result); // OUTPUT: I am true

let results2 = 10 < 5 ? "I am true" : "I am false";
console.log(result); // OUTPUT: I am false

//! Type Coercion 
console.log(1 + 1); // 2
console.log("1" + "1"); // 11
console.log(1 + "1"); // 11
console.log("1" + 1); // 11
console.log(1 + 1 + "1"); // 21
console.log(1 + "1" + 1); // 111
console.log("1" + 1 + 1); // 111
console.log(1 + "1" + "1"); // 111
console.log("1" + 1 + "1"); // 111
console.log("1" + "1" + 1); // 111

//! Nullish Coalescing Operator (??)
let userName;
userName = 3 ?? 5;
console.log(userName); // OUTPUT: 3

userName = null ?? 5;
console.log(userName); // OUTPUT: 5

userName = undefined ?? 5;
console.log(userName); // OUTPUT: 5

userName = "" ?? 5;
console.log(userName); // OUTPUT: 5

userName = "Shohel" ?? 5;
console.log(userName); // OUTPUT: Shohel

userName = 0 ?? 5;
console.log(userName); // OUTPUT: 0

userName = false ?? 5;
console.log(userName); // OUTPUT: false

userName = true ?? 5;
console.log(userName); // OUTPUT: true

userName = NaN ?? 5;
console.log(userName); // OUTPUT: 5

userName = 0n ?? 5;
console.log(userName); // OUTPUT: 0n

userName = Symbol() ?? 5;
console.log(userName); // OUTPUT: Symbol()

userName = BigInt() ?? 5;
console.log(userName); // OUTPUT: 0n

userName = {} ?? 5;
console.log(userName); // OUTPUT: {}

userName = [] ?? 5;
console.log(userName); // OUTPUT: []

userName = function () {} ?? 5;
console.log(userName); // OUTPUT: [Function: anonymous]
