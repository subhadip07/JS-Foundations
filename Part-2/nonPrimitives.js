const username = {
    firstname: "subh",
    isLoggedin: true,
};

username.firstname = "Mr. S"; // we can change the value irrespective of constant type
username.lastname = "will";

console.log(username["firstname"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

// Date
let today = new Date();
console.log(today.getDate());

// Array
let heros = ["a", "b", "c", true]
console.log(heros[0]);

// Type conversion
let isValue = "2abc";
// console.log(Number(isValue) + 1);
console.log(typeof Number(isValue));
console.log(Number(null));
console.log(Number(undefined));





