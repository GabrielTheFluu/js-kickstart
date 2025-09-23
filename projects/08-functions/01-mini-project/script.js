// Mini-Project: Re-usable Pocket Calculator
// Build upon the hello-function, calculate-area, and is-even exercises by creating a complete application!

// 📖 IMPORTANT: Read the README.md file first for detailed instructions,
//    examples, and ideas on how to approach this project!

// This project builds on what you learned in the function exercises:
// - Defining functions with parameters (like in hello-function)
// - Mathematical calculations in functions (like in calculate-area)
// - Returning values from functions (like in is-even)
// - But now we organize multiple functions into a complete application!

// Import prompt-sync (just like in previous projects)
const prompt = require('prompt-sync')();

// TODO: Create your calculator functions here!

// Step 1: Define your calculation functions (like calculate-area exercise)
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Step 2: Create helper functions for the user interface
function showMenu() {
    console.log("\n=== Pocket Calculator ===");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");
}

function getFirstNumber() {
    return Number(prompt("Enter first number: "));
}

function getSecondNumber() {
    return Number(prompt("Enter second number: "));
}

// Step 3: Test your functions first (like in the exercises)
console.log("Testing functions:");
console.log("add(5, 3) =", add(5, 3));           // Should be 8
console.log("subtract(10, 4) =", subtract(10, 4)); // Should be 6
console.log("multiply(6, 7) =", multiply(6, 7));   // Should be 42
console.log("divide(15, 3) =", divide(15, 3));     // Should be 5

// Step 4: Main program loop (combines loops from Chapter 7 with functions!)
let choice = "";
while (choice !== "5") {
    showMenu();
    choice = prompt("\nEnter your choice (1-5): ");
    
    if (choice === "1") {
        let num1 = getFirstNumber();
        let num2 = getSecondNumber();
        let result = add(num1, num2);
        console.log("Result: " + num1 + " + " + num2 + " = " + result);
        
    } else if (choice === "2") {
        let num1 = getFirstNumber();
        let num2 = getSecondNumber();
        let result = subtract(num1, num2);
        console.log("Result: " + num1 + " - " + num2 + " = " + result);
        
    } else if (choice === "3") {
        let num1 = getFirstNumber();
        let num2 = getSecondNumber();
        let result = multiply(num1, num2);
        console.log("Result: " + num1 + " × " + num2 + " = " + result);
        
    } else if (choice === "4") {
        let num1 = getFirstNumber();
        let num2 = getSecondNumber();
        let result = divide(num1, num2);
        console.log("Result: " + num1 + " ÷ " + num2 + " = " + result);
        
    } else if (choice === "5") {
        console.log("\nThank you for using the calculator!");
        
    } else {
        console.log("Invalid choice. Please try again.");
    }
}

// YOUR TURN: 
// 1. Add input validation (what if they enter invalid numbers?)
// 2. Handle division by zero
// 3. Add more operations (power, square root, etc.)
// 4. Create a function to format results nicely
// 5. Add a calculation history feature

// Remember: This demonstrates how functions help organize code!
// - The math functions handle the "business logic"
// - The menu functions handle the "user interface"
// - The main loop coordinates everything together