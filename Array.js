let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);

const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(arr2[0]);

//! All Array Methods in Javascript
let myArray = [1, 2, 3, 4, 5];

myArray.push(6); // OUTPUT: [ 1, 2, 3, 4, 5, 6 ]
myArray.pop(); // OUTPUT: [ 1, 2, 3, 4, 5 ] / Remove the last element of the array
myArray.unshift(0); // OUTPUT: [ 0, 1, 2, 3, 4, 5 ] / add the first element of the array
myArray.shift(); // OUTPUT: [ 2, 3, 4, 5 ] / Remove the first element of the array
myArray.toString(); // OUTPUT: 1,2,3,4,5
myArray.join("-"); // OUTPUT: 1-2-3-4-5
myArray.reverse(); // OUTPUT: [ 5, 4, 3, 2, 1 ]
myArray.sort(); // OUTPUT: [ 1, 2, 3, 4, 5 ]
myArray.concat([6, 7, 8]); // OUTPUT: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
myArray.slice(0, 2); // OUTPUT: [ 1, 2 ]
myArray.splice(0, 2); // OUTPUT: [ 3, 4, 5 ]
myArray.includes(3); // OUTPUT: true
myArray.indexOf(3); // OUTPUT: 2
myArray.find((item) => item > 3); // OUTPUT: 4
myArray.filter((item) => item > 3); // OUTPUT: [ 4, 5 ]
myArray.map((item) => item * 2); // OUTPUT: [ 2, 4, 6, 8, 10 ]
myArray.forEach((item) => console.log(item)); // OUTPUT: 1,2,3,4,5


//? Practice with Array
console.log(Array.isArray("shohel")); // OUTPUT: false
console.log(Array.isArray([1, 2, 3])); // OUTPUT: true

console.log(Array.from("shohel")); // OUTPUT: [ 's', 'h', 'o', 'h', 'e', 'l' ]
console.log(Array.from([1, 2, 3])); // OUTPUT: [ 1, 2, 3 ]
console.log(Array.from({name: "shohel"})); // []  / Object is not iterable 

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // OUTPUT: [ 100, 200, 300 ] / Convert a set of values into an array

//? Example (1)
let heros = ["captain", "thor", "ironman", "hulk"];
let dcHero = ["superman", "flash", "batman"];

let allHeros = heros.concat(dcHero);
console.log(allHeros); // OUTPUT: [ 'captain', 'thor', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]

let allHeros2 = [...heros, ...dcHero]; // Spread Operator
console.log(allHeros2); // OUTPUT: [ 'captain', 'thor', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]

//? Example (2)
let another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]];
let real_another_array = another_array.flat(1); // 1 means only one level flat
console.log(another_array); // OUTPUT: [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, 10, [ 11, 12, 13 ] ] ]
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [ 11, 12, 13 ] ] 

let another_array2 = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]];
let real_another_array2 = another_array.flat(2); // 2 means 2 level flat
console.log(another_array2); // OUTPUT: [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, 10, [ 11, 12, 13 ] ] ]
console.log(real_another_array2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

let another_array3 = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]];
let real_another_array3 = another_array.flat(Infinity); // all flat
console.log(another_array3); // OUTPUT: [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, 10, [ 11, 12, 13 ] ] ]
console.log(real_another_array3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

