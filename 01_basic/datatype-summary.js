// Primitive

// 7 Type 
//String, Numbers, Boolean, null[empty],undefined, symbol[unique], BigInt[bignumbers]

const score=100;
const scoreValue=100.3
const  isLoggedIn=false;
const outsideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId= Symbol("123")
console.log(id==anotherId);
console.log(anotherId);
const bigNumbers=123123123n;

// Non-Primitive
// Array , Object , Functions

const Myheros =["shaktiman", "naagraj", "doga"];
let myObj= {
    name: "shekhar",
    age: 22,
}
const myFunction= function(){
    console.log("Hello");
}
console.log(typeof bigNumbers);
console.log(typeof myFunction);
console.log(typeof Myheros);
console.log(typeof anotherId);