//Assignment #4
// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".
function helloWorld (alerts) {
    return( "Hello World!" );
}
console.log(helloWorld(1));

// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.
let userName = "Lauren";

function greeting(message) {
    let greeting = "Hello, " + userName;
    return(greeting);
}

console.log(greeting(1));

// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.
function divisibleByThree (number) {
    if(number % 3 == 0) {
        return true
    }
    else
    {
    return false
    }
}

console.log(divisibleByThree(prompt("Enter a number divisible by 3!")));
  
// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.
function averageAge (num1, num2, num3,) {
   let avg = null
   if(num3 == undefined)
   { 
       avg = (num1 + num2) / 2
   }
   else
   {
       avg = (num1 + num2 + num3) / 3
   }
    return Math.round(avg)
};

console.log(averageAge(prompt("Enter Three Numbers")));

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.

function leetSpeak (word) {
    var word = word.replace(/a/g, "4");
    var word = word.replace(/e/g, "3");
    return word
};
console.log(leetSpeak("LeetSpeak"));



