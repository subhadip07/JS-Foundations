// checking is a number is greater than another number
num1 = 5;
num2 = 8;

console.log("I am regular upper code");

if(num1 > num2)
{
    console.log("num 1 is greater than num2");
}
else
{
    console.log("Nope, num1 is not greater");
}

console.log("I am regular bottom code");

// Checking if a string is equal to another string:
let username = "subh";
let anotherUsername = "subh";

if (username != anotherUsername)
{
    console.log("Pick another username");   
}
else
{
    console.log("You can pick this username");
}

// Checking if a varible is a number ot not:
let score = 44;

if (typeof score === 'number')
{
    console.log("Yep, this is a number!");
}
else
{
    console.log("No that is not a number");   
}

// Checking if a boolean value is true or false:
let isTeaReady = false
if (isTeaReady)
{
    console.log("Tea is Ready");
}
else
{
    console.log("Tea is not ready");
}

// Checking if an array is empty or not:
let items = [];
console.log(items.length);

if (items.length === 0)
{
    console.log("Array is empty");
}
else
{
    console.log("Array is not empty");
}
