//! Switch Statement
//? Example (1)
let color = "red";
switch (color) {
  case "red":
    console.log("I am red");
    break;
  case "blue":
    console.log("I am blue");
    break;
  case "green":
    console.log("I am green");
    break;
  default:
    console.log("I am not red, blue, or green");
    break;
} // OUTPUT: I am red

//? Example (2)
let month = 10;
switch (month) {
  case 1:
    console.log("I am january");
    break;
  case 2:
    console.log("I am february");
    break;
  case 3:
    console.log("I am march");
    break;
    case 4:
    console.log("I am april");
    break;
    case 5:
    console.log("I am may");
    break;
    case 6:
    console.log("I am june");
    break;
    case 7:
    console.log("I am july");
    break;
    case 8:
    console.log("I am august");
    break;
    case 9:
    console.log("I am september");
    break;
    case 10:
    console.log("I am october");
    break;
    case 11:
    console.log("I am november");
    break;
    case 12:
    console.log("I am december");
    break;
  default:
    console.log("I am not january, february, or march");
    break;
} // OUTPUT: I am october

//? Example (3)
let day = "friday";
switch (day) {
  case "monday":
    console.log("I am monday");
    break;
  case "tuesday":
    console.log("I am tuesday");
    break;
  case "wednesday":
    console.log("I am wednesday");
    break;
  case "thursday":
    console.log("I am thursday");
    break;
  case "friday":
    console.log("I am friday");
    break;
  case "saturday":
    console.log("I am saturday");
    break;
  case "sunday":  
    console.log("I am sunday");
    break;
  default:
    console.log("I am not monday, tuesday, wednesday, thursday, friday, saturday, or sunday");
    break;
} // OUTPUT: I am friday

