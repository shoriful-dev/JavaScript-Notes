//? Date Methods 
let date = new Date();
console.log(date); // OUTPUT: 2022-07-11T15:00:00.000Z

let date2 = new Date();
console.log(date2.getFullYear()); // OUTPUT: 2022
console.log(date2.getMonth()); // OUTPUT: 6
console.log(date2.getDate()); // OUTPUT: 11
console.log(date2.getDay()); // OUTPUT: 1
console.log(date2.getHours()); // OUTPUT: 15
console.log(date2.getMinutes()); // OUTPUT: 0
console.log(date2.getSeconds()); // OUTPUT: 0
console.log(date2.getMilliseconds()); // OUTPUT: 0

let days = new Date();
console.log(days.toDateString()); // OUTPUT: Mon Jul 11 2022

let days2 = new Date();
console.log(days2.toUTCString()); // OUTPUT: Mon, 11 Jul 2022 15:00:00 GMT

let days6 = new Date();
console.log(days6.toLocaleDateString()); // OUTPUT: 13/11/2024

let days5 = new Date();
console.log(days5.toLocaleString()); // OUTPUT: 13/11/2024, 12:00:00 AM

let days4 = new Date();
console.log(days4.toJSON()); // OUTPUT: 2022-07-11T15:00:00.000Z

let days3 = new Date();
console.log(days3.toISOString()); // OUTPUT: 2022-07-11T15:00:00.000Z

let days7 = new Date();
console.log(days7.getTime()); // OUTPUT: 1652635200000

let days8 = new Date();
console.log(days8.getTimezoneOffset()); // OUTPUT: -420
