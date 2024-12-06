//! for loops
//? Example (1)
for (let i = 0; i < 10; i++) {
  console.log(i); // OUTPUT: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

//? Example (2)
for (let i = 0; i <= 10; i++) {
  console.log(i); // OUTPUT: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

//? Example (3)
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("The best number is 5"); // OUTPUT: The best number is 5
  }
  console.log(element); // OUTPUT: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

//? Example (4)
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element % 2 === 0) {
    console.log(element); // OUTPUT: 0, 2, 4, 6, 8, 10
  }
}

//? Example (5)
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element % 2 === 1) {
    console.log(element); // OUTPUT: 1, 3, 5, 7, 9
  }
  console.log(element);
}

//? Example (6)
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element % 2 === 1) {
    console.log(element); // OUTPUT: 1, 3, 5, 7, 9
  }
  console.log(element); // OUTPUT: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

//? Example (7)
// Nested loops
for (let i = 1; i <= 10; i++) {
  console.log(`this is the number ${i}`); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  for (let j = 1; j <= 10; j++) {
    console.log(`enner loop ${j}`);
  }
}
// Output: this is the number 1 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 2 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 3 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 4 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 5 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 6 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 7 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 8 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 9 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10
// this is the number 10 enner loop 1 enner loop 2 enner loop 3 enner loop 4 enner loop 5 enner loop 6 enner loop 7 enner loop 8 enner loop 9 enner loop 10

//? Example (8)
for (let i = 1; i <= 10; i++) {
  console.log(`this is the number ${i}`); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}
// Output: this is the number 1 1*1=1 1*2=2 1*3=3 1*4=4 1*5=5 1*6=6 1*7=7 1*8=8 1*9=9 1*10=10
// this is the number 2 2*1=2 2*2=4 2*3=6 2*4=8 2*5=10 2*6=12 2*7=14 2*8=16 2*9=18 2*10=20
// this is the number 3 3*1=3 3*2=6 3*3=9 3*4=12 3*5=15 3*6=18 3*7=21 3*8=24 3*9=27 3*10=30
// this is the number 4 4*1=4 4*2=8 4*3=12 4*4=16 4*5=20 4*6=24 4*7=28 4*8=32 4*9=36 4*10=40
// this is the number 5 5*1=5 5*2=10 5*3=15 5*4=20 5*5=25 5*6=30 5*7=35 5*8=40 5*9=45 5*10=50
// this is the number 6 6*1=6 6*2=12 6*3=18 6*4=24 6*5=30 6*6=36 6*7=42 6*8=48 6*9=54 6*10=60
// this is the number 7 7*1=7 7*2=14 7*3=21 7*4=28 7*5=35 7*6=42 7*7=49 7*8=56 7*9=63 7*10=70
// this is the number 8 8*1=8 8*2=16 8*3=24 8*4=32 8*5=40 8*6=48 8*7=56 8*8=64 8*9=72 8*10=80
// this is the number 9 9*1=9 9*2=18 9*3=27 9*4=36 9*5=45 9*6=54 9*7=63 9*8=72 9*9=81 9*10=90
// this is the number 10 10*1=10 10*2=20 10*3=30 10*4=40 10*5=50 10*6=60 10*7=70 10*8=80 10*9=90 10*10=100

//? Example (9)
for (let i = 1; i <= 10; i++) {
  console.log(`this is the number ${i}`); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  for (let j = 1; j <= 10; j++) {
    console.log(i, "*", j, "=", i * j);
  }
}
// Output: this is the number 1 1*1=1 1*2=2 1*3=3 1*4=4 1*5=5 1*6=6 1*7=7 1*8=8 1*9=9 1*10=10
// this is the number 2 2*1=2 2*2=4 2*3=6 2*4=8 2*5=10 2*6=12 2*7=14 2*8=16 2*9=18 2*10=20
// this is the number 3 3*1=3 3*2=6 3*3=9 3*4=12 3*5=15 3*6=18 3*7=21 3*8=24 3*9=27 3*10=30
// this is the number 4 4*1=4 4*2=8 4*3=12 4*4=16 4*5=20 4*6=24 4*7=28 4*8=32 4*9=36 4*10=40
// this is the number 5 5*1=5 5*2=10 5*3=15 5*4=20 5*5=25 5*6=30 5*7=35 5*8=40 5*9=45 5*10=50
// this is the number 6 6*1=6 6*2=12 6*3=18 6*4=24 6*5=30 6*6=36 6*7=42 6*8=48 6*9=54 6*10=60
// this is the number 7 7*1=7 7*2=14 7*3=21 7*4=28 7*5=35 7*6=42 7*7=49 7*8=56 7*9=63 7*10=70
// this is the number 8 8*1=8 8*2=16 8*3=24 8*4=32 8*5=40 8*6=48 8*7=56 8*8=64 8*9=72 8*10=80
// this is the number 9 9*1=9 9*2=18 9*3=27 9*4=36 9*5=45 9*6=54 9*7=63 9*8=72 9*9=81 9*10=90
// this is the number 10 10*1=10 10*2=20 10*3=30 10*4=40 10*5=50 10*6=60 10*7=70 10*8=80 10*9=90 10*10=100

//? Example (10)
let myArray = ["hero", "villane", "heroine"];
console.log(myArray.length); // OUTPUT: 3
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
} // Output: 3 hero, villane, heroine

//! While loop
//? Example (1)
let index = 0;
while (index <= 10) {
  console.log(index);
  index++;
} // OUTPUT: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

//? Example (2)
let myarr = [1, 2, 3, 4, 5];
let i = 0;
while (i < myarr.length) {
  console.log(myarr[i]);
  i++;
} // OUTPUT: 1, 2, 3, 4, 5

//? Example (3)
let j = 0;
while (j <= 10) {
  console.log(j);
  j = j + 2;
} // OUTPUT: 0, 2, 4, 6, 8, 10

//? Example (4)
let myArr = ["bad", "good", "best"];
let a = 0;
while (a < myArr.length) {
  console.log(myArr[a]);
  a++;
} // OUTPUT: bad, good, best

//? Example (5)
let course = ["javaScript"];
let c = 0;
while (c < course.length) {
  console.log(`i love ${course[c]}`);
  c++;
} // i love javaScript

//? Example (6)
let d = 1;
while (d <= 10) {
  donsole.log(`i love javaSdript`);
  d++;
} // i love javaScript i love javaScript i love javaScript i love javaScript i love javaScript i love javaScript i love javaScript i love javaScript i love javaScript

//!! do while loop
//? Example (1)
let f = 11;
do {
  console.log(`score is ${f}`);
  f++;
} while (f <= 10); // score is 11

//? Example (2)
let e = 1;
do {
  console.log(`score is ${e}`);
  e++;
} while (e <= 10); // score is 1 score is 2 score is 3 score is 4 score is 5 score is 6 score is 7 score is 8 score is 9 score is 10

//! for of loop works with array and string
//? Example (1)
let myA = [1, 2, 3, 4, 5];
for (let index of myA) {
  console.log(index);
} // OUTPUT: 1, 2, 3, 4, 5

//? Example (2)
let myArrays = ["bad", "good", "best"];
for (let index of myArrays) {
  console.log(index);
} // OUTPUT: bad, good, best

//? Example (3)
let greeting = "Hello world";
for (let greet of greeting) {
  console.log(greet);
} // OUTPUT: H, e, l, l, o,  , w, o, r, l, d

//? Example (4)
let greetes = "Hello world";
for (let greet of greetes) {
  if (greet === " ") {
    continue;
  }
  console.log(greet); // OUTPUT: H, e, l, l, o, w, o, r, l, d
}

//? Example (5)
let rejults = ["english bangla hindi"];
for (let result of rejults) {
  if (result === " ") {
    continue;
  }
  console.log(result); // english bangla hindi
}

//! for in loop works with object
//? Example (1)
let person = {
  name: "Shohel",
  age: 21,
  isApproved: true,
  email: "shohel@com",
  address: "Dhaka",
  hobbies: ["cricket", "football"],
};
for (const key in person) {
  console.log(`${key} -> ${person[key]}`);
} // OUTPUT: name -> Shohel age -> 21 isApproved -> true email -> shohel@com address -> Dhaka hobbies -> [ 'cricket', 'football' ]

//? Example (2)
let person2 = {
  name: "Shohel",
  ["full name"]: "Prince Shoel",
  age: 21,
  isApproved: true,
  email: "shohel@com",
  address: "Dhaka",
  hobbies: ["cricket", "football"],
};
for (const sos in person2) {
  console.log(`${sos} -> ${person2[sos]}`);
} // OUTPUT: name -> Shohel full name -> Prince Shoel age -> 21 isApproved -> true email -> shohel@com address -> Dhaka hobbies -> [ 'cricket', 'football' ]

//? Example (3)
let arr = ["paython", "javaScript", "java"];
for (const key in arr) {
  console.log(key);
} // OUTPUT: 0 1 2

//? Example (4)
let arrt = ["paython", "javaScript", "java"];
for (const key in arrt) {
  console.log(arrt[key]);
} // OUTPUT: paython javaScript java

//! for each loop
//? Example (1)
let myArrr = [1, 2, 3, 4, 5];
myArrr.forEach((index) => {
  console.log(index);
}); // OUTPUT: 1, 2, 3, 4, 5

//? Example (2)
let myArrrr = ["paython", "javaScript", "java"];
myArrrr.forEach((index) => {
  console.log(index);
}); // OUTPUT: paython javaScript java

//? Example (3)
function printMe(index) {
  console.log(index);
}
let myArrrrr = ["paython", "javaScript", "java"];
myArrrrr.forEach(printMe); // OUTPUT: paython javaScript java

//? Example (4)
let myArrrrrr = ["paython", "javaScript", "java"];
myArrrrrr.forEach((index, key) => {
  console.log(index, key);
}); // OUTPUT: paython 0 javaScript 1 java 2

//? Example (5)
let system = [
  {
    name: "shohel",
    age: 21,
  },
  {
    name: "rana",
    age: 31,
  },
  {
    name: "prince",
    age: 21,
  },
];
system.forEach((item) => {
  console.log(item);
}); // OUTPUT: { name: 'shohel', age: 21 } { name: 'rana', age: 31 } { name: 'prince', age: 21 }

//? Example (6)
let system2 = [
  {
    name: "shohel",
    age: 21,
  },
  {
    name: "rana",
    age: 31,
  },
  {
    name: "prince",
    age: 21,
  },
];
system2.forEach((item) => {
  console.log(item.name);
}); // OUTPUT: shohel rana prince

//! filter method
//? Example (1)
const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = newNum.filter((index) => {
  return index > 5;
});
console.log(result); // OUTPUT: [ 6, 7, 8, 9, 10 ]

//? Example (2)
const newNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = newNum2.forEach((index) => {
  if (index > 5) {
    console.log(index); // OUTPUT: 6, 7, 8, 9, 10
  }
});

//? Example (3)
const Books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];
const bookRejults = Books.filter((bk) => {
  return bk.author === "Harper Lee";
});
console.log(bookRejults); // [{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }]

//? Example (4)
const book = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];
const rejult = book.filter((item) => {
  return item.year >= 1900;
});
console.log(rejult);
/* [{title: 'The Great Gatsby',author: 'F. Scott Fitzgerald', year: 1925},{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },{title: 'The Catcher in the Rye',author: 'J.D. Salinger',year: 1951},{title: 'The Lord of the Rings',author: 'J.R.R. Tolkien',year: 1954},{ title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },{title: 'The Great Gatsby',author: 'F. Scott Fitzgerald',year: 1925},{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }][Done] exited with code=0 in 0.065 seconds
[Running] node "e:\PROGRAMING NOTES\JavaScript-Notes\Practice.js"[{title: 'The Great Gatsby',author: 'F. Scott Fitzgerald',year: 1925},{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },{title: 'The Catcher in the Rye', author: 'J.D. Salinger',year: 1951},{title: 'The Lord of the Rings',
author: 'J.R.R. Tolkien',year: 1954},{ title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },{title: 'The Great Gatsby',author: 'F. Scott Fitzgerald',year: 1925},{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },{ title: 'To Kill a Mockingbird', author: 'Harper Lee',year: 1960 }] */

//! Map Method
//? Example (1)
const map = new Map();
map.set("name", "shohel");
map.set("age", 21);
console.log(map.get("name")); // OUTPUT: shohel
console.log(map.get("age")); // OUTPUT: 21
console.log(map.has("name")); // OUTPUT: true
console.log(map.has("address")); // OUTPUT: false
console.log(map); // OUTPUT: Map { 'name' => 'shohel', 'age' => 21 }

//? Example (2)
const map2 = new Map([
  ["name", "shohel"],
  ["age", 21],
]);
console.log(map2); // OUTPUT: Map { 'name' => 'shohel', 'age' => 21 }

//? Example (3)
const map3 = new Map();
map3.set("name", "shohel");
map3.set("age", 21);
for (const [key, value] of map3) {
  console.log(key, value); // name shohel age 21
}

//? Example (4)
const post = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const postRejult = post.map((num) => {
  return num + 10;
})
console.log(postRejult); // OUTPUT: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//? Example (5) Chaining Methods
const post2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const postRejult2 = post2.map((num) => num * 10).map((num) => num + 2).filter((num) => num >= 10);
console.log(postRejult2); // OUTPUT: [22, 32, 42, 52, 62, 72, 82, 92, 102]

//! Reduce Method
//? Example (1)
const post3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const postRejult3 = post3.reduce((acc, curr) => acc + curr, 0);
console.log(postRejult3); // OUTPUT: 55

//? Example (2)
const post4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const postRejult4 = post4.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(postRejult4); // OUTPUT: 55

//! Break and Continue Method
//? Break statement
// Example (1)
let myArrs = 20;
for (let h = 1; h <= 20; h++) {
  if (h == 5) {
    // if the value of h is equal to 5 then break the loop
    console.log(`Detected ${h}`);
    break;
  }
  console.log(`Detected value ${h}`);
} // Detected value 1 Detected value 2 Detected value 3 Detected value 4 Detected 5

//? Continue statement
// Example (1)
for (let h = 1; h <= 10; h++) {
  if (h == 5) {
    console.log(`Stop value ${h}`); // 5 is skipped in the loop
    continue;
  }
  console.log(`Detected value ${h}`);
} // Detected value 1 Detected value 2 Detected value 3 Detected value 4 Detected value 6 Detected value 7 Detected value 8 Detected value 9 Detected value 10
