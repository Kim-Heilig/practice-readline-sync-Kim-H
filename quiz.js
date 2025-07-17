/** @format */

const readline = require("readline-sync");

// Greet the user and get their name
let userName = readline.question("Hello classmate, Please tell me your name");

console.log(
  "Hello, " +
    userName +
    " . Here is my quiz on data types, I hope you enjoy it."
);

// Question 1:  Test on the the default datatype that is returned from userinput.
let answer1 = readline.question(
  "What datatype is the default for data from userinput?"
);

// Question 2:  Test on can that datatype that is usually defaulted by converted explicitly.
let answer2 = readline.question(
  "What method do you use to explicitly convert a reply from the default of a string into a number?"
);

// Question 3:  Test on what happens if you don't explicitly convert two user entries that were numbers and you try to add them together?
let answer3 = readline.question(
  "If you do not explicitly convert numbers from userinput and you try to add them together, what will be the result?"
);

// Question 4:  Test on are statements inside conditions understood as a boolean
let answer4 = readline.question(
  "How are conditional statements interpreted as, what datatype?"
);

// Question 5:  Test on give an example of a string being truthy
let answer5 = readline.question(
  "Give an example of a string that is not a truthy"
);

// Give answers back
console.log(userName + ", here are your answers:");
console.log("1. Data type that is defaulted with user input: " + answer1);
console.log(
  "2. What method is used to explicitly convert data to a number: " + answer2
);
console.log(
  "3. What happens when answers are added together that were not converted from input to number data type: " +
    answer3
);
console.log(
  "4. What data type is a conditional statement treated as: " + answer4
);
console.log(
  "5. Give an example of when a string is not considered truthy: " + answer5
);
