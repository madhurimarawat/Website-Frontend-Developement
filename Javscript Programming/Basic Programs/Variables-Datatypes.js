// Variables and Data types
// Variables are used to store data. JavaScript has several data types, including numbers, strings, and booleans.

// Declaring variables
// let is used to declare variables in javascript
// Variables have datatypes as follows
let num = 42;        // Number
let name = "John";   // String
let isTrue = true;   // Boolean
let fruits = ["apple", "banana", "cherry"]; // Array
let person = {          // Object
    firstName: "John",
    lastName: "Doe"
};

// Printing Variables
// It by defaults prints a new line
console.log("Variable Num is: ",num)
console.log("Variable Name is: ",name)
console.log("Variable Istrue is: ",isTrue)
console.log("Variable Fruits is: ",fruits)
console.log("Variable Person is: ",person)

// Reassigning a variable
num = 50;

console.log("After Reassigning Variable Num is: ",num)

// Finding the Type (Class) of a Variable:
// To find the type of a variable, the typeof operator is used.

console.log("Type of Variable Num is: ",typeof num);   // "number"
console.log("Type of Variable Name is: ",typeof name);   // "string"
console.log("Type of Variable Istrue is: ",typeof isTrue); // "boolean"
console.log("Type of Variable Fruits is: ",typeof fruits); // "object"
console.log("Type of Variable Person is: ",typeof person); // "object"
