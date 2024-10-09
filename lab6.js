// Task 1:
var myNumber = 10; // Assign variable "myNumber" to 10
var myString = "Hello, JavaScript!"; // Assign variable "myString" to "Hello, JavaScript!"

console.log(myNumber); // Prints 10
console.log(myString); // Prints "Hello, JavaScript!"

// Task 2:

// Print numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Print first 5 multiples of 3
for (let i = 1; i <= 5; i++) {
    console.log(3 * i) // Prints 3 * 1-5
}

// Task 3:

// Create a function that takes in two parameters
function addNumbers(num1, num2) {
    let sum = num1 + num2; // Add the numbers together in a temporary variable
    
    return sum; // Return the sum
}

console.log(addNumbers(20, 15)); // Print sum

// Create another function that also takes in two parameters (wow)
function multiplyNumbers(num1, num2) {
    let product = num1 * num2; // Multiply the numbers together in a temporary variable

    return product; // Return the product
}

console.log(multiplyNumbers(9, 11)); // Print the product