let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreateDate = new Date(2023, 0, 23, 5, 3); NORMAL DATES AND TIMES 
// let myCreateDate = new Date("2023-01-21"); DATES
let myCreateDate = new Date("01-15-2023"); // FOR CELENDER TYPE
//console.log(myCreateDate.toDateString());
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // use for poll and timimg projects 
// console.log(myCreateDate.getTime()); // compare with other dates in milesecond 
// console.log(Date.now()/1000);// change into second but here give float value 
// console.log(Math.floor(Date.now()/1000)); //formula to change float to noraml value

let  newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // for caluclating months here more option for searching date,year,day,minutes and more 