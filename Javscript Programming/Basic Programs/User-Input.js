/*
User Input in Variables:

To get user input in a variable, we can use the prompt() function for browser-based applications or readline for Node.js applications.

For Browser prompt() is used:
*/

// For Browser
/* 
This will give error in node js
let userInput = prompt("Enter your name:");
console.log("Hello, " + userInput + "!");
*/

// For Node js

// This import the readline module
// This provides interface for reading user input
const readline = require('readline');

// Creating a readline interface
/*
We create a readline interface (rl) by calling the readline.createInterface() method.
 This interface is configured to read input from the standard input (process.stdin) and 
 write output to the standard output (process.stdout).
 In other words, it allows you to interact with the user via the command line.
*/
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
Here We use the rl.question() method to display a prompt to the user: "Enter your name: ". 
The code inside the callback function will be executed when the user provides input. 
In this case, it simply logs a greeting message that includes the user's input (their name)
 and then closes the readline interface using rl.close().
*/
rl.question("Enter your name: ", function (userInput) {
    console.log("Hello, " + userInput + "!");
    rl.close();
});
