//? Object Declaration Types in JavaScript
// Object Literal
// Object Constructor
// Singleton Pattern

//? Object Literal
const symbol = Symbol("idNumber");
let person = {
  name: "Shohel",
  "full name": "Prince Shoel",
  symbol: "idNumber",
  [symbol]: "id",
  age: 21,
  isApproved: true,
  email: "shohel@com",
  address: "Dhaka",
  hobbies: ["cricket", "football"],
};
console.log(person); // OUTPUT: { name: 'Shohel', age: 21, isApproved: true, email: 'shohel@com', address: 'Dhaka', hobbies: [ 'cricket', 'football' ] }
console.log(person.email); // OUTPUT: shohel@com
console.log(person["email"]); // OUTPUT: shohel@com
console.log(person["full name"]); // OUTPUT: Prince Shoel
console.log(person.hobbies); // OUTPUT: [ 'cricket', 'football' ]
console.log(person["hobbies"]); // OUTPUT: [ 'cricket', 'football' ]
console.log(person.symbol); // OUTPUT: Symbol(idNumber)
console.log(person[symbol]); // OUTPUT: id


console.log(typeof person.name); // OUTPUT: string
console.log(typeof person.email); // OUTPUT: string
console.log(typeof person.hobbies); // OUTPUT: object

//? Freeze Method in Object
let person1 = {
  name: "Shohel",
  age: 21,
};
person1.name = "Prince Shoel";
console.log(person1.name); // OUTPUT: Prince Shoel
console.log(Object.freeze()); // Freeze the object / Object value cannot be changed beacause use is freeze.
person1.age = 22;
console.log(person1.age); // OUTPUT: 21

//? Function in Object
let person2 = {
  name: "Shohel",
  ["full name"]: "Prince Shoel",
  age: 21,
  isApproved: true,
  email: "shohel@com",
  address: "Dhaka",
  hobbies: ["cricket", "football"],
};
person2.greet = function () {
  console.log(`Hello This is ${this.name}!`); // this means current object person
};
console.log(person2.greet()); // OUTPUT: Hello This is Shohel!

//? Singleton Pattern
const tender = new Object(); // This is Singleton Object
const tender1 = {}; // This is None Singleton Object 

//? Nested Object
let script = {
  name: "Shohel",
  score : 100,
  emailname: {
    name: "Shohel Rana",
    score : {
      name: "Shohel Rana islam",
    }
  }
}
console.log(script); // OUTPUT: { name: 'Shohel', score: 100, emailname: { name: 'Shohel Rana', score: { name: 'Shohel Rana islam' } } }
console.log(script.emailname.score); // OUTPUT: { name: 'Shohel Rana islam' }
console.log(Object.entries(script)); // OUTPUT: [ [ 'name', 'Shohel' ], [ 'score', 100 ], [ 'emailname', { name: 'Shohel Rana', score: { name: 'Shohel Rana islam' } } ] ]

//? Object Destructuring 
const course = {
  courseName: "JavaScript",
  courseTeacher: "hitesh",
  courseFee: "1000",
  courseDuration: "2 months",
}
const {courseName,courseTeacher,courseFee,courseDuration} = course 
console.log(courseName); // OUTPUT: JavaScript
console.log(courseTeacher); // OUTPUT: hitesh
console.log(courseFee); // OUTPUT: 1000
console.log(courseDuration); // OUTPUT: 2 months

//? Object Assign
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = Object.assign({}, obj1, obj2);
console.log(...obj1, ...obj2); // OUTPUT: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3); // OUTPUT: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
