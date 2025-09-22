// Number

let balance = 500;

console.log(balance);
console.log(typeof(balance));

let anotherBalance = new Number(120);
console.log(anotherBalance.valueOf());
console.log(typeof(anotherBalance));

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// Undefined
let firstname;
console.log(firstname);

// String
let myString = "hello";
let username = "subh"
let oldGreet = myString + " " + "subh";
console.log(oldGreet);

let greet = `Hello ${username} !`;
console.log(greet);

// Symbol
let s1 = Symbol("subh");
let s2 = Symbol("subh");

console.log(s1);

console.log(s1 == s2);


