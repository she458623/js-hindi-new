const score = 100

const balance = new Number(100)
// console.log(balance);// with type of object
// console.log(score); //only object
// console.log(balance.toString());//change the type of object num to string 
// console.log(typeof balance);// type of object
// console.log(balance.toString().length);// change object and find the length of object
// console.log(balance.toFixed(3));//to fixed give deciaml value in given object


const otherNumber = 23.1121//change according the precision value give approx value
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;//for count how many hundred in the given numbers 
//console.log(hundreds.toLocaleString('en-IN'));





//*****************************maths************************************* */

// console.log(Math);
// console.log(Math.abs(-8585));// abs use for change the value - into 4 only
// // console.log(Math.round(4365.33)); //round is use for roundof value
// console.log(Math.ceil(4365.33)); // ceil for use top of round value or object value
// console.log(Math.floor(4365.33));// floor for down side value 
// console.log(Math.min(3,2,1,4,5,6));//find the minimum value in array
// console.log(Math.max(3,2,1,4,5,6,25658));// find maximum value in array
// console.log(Math.random());//math.random give always value betweem 0 and 1
// console.log(Math.floor(Math.random()*10)+1); //if the give 0 value here be add + 1 

const min = 10
const max = 20
console.log(Math.floor(Math.random() *(max -min + 1)) + 1);// range between 10 and 20 and add min value 