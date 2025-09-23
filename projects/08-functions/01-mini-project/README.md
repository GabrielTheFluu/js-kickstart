# Mini-Project: Re-usable Pocket Calculator

## 🎯 Goal

Create a modular calculator program that separates the user interface from the calculation logic using functions. This project builds upon the function concepts from Chapter 8 and demonstrates how to organize code into reusable, logical pieces.

## 📖 Project Description

Build a calculator that:
- Uses separate functions for each mathematical operation (add, subtract, multiply, divide)
- Has a main program loop that presents a menu to the user
- Separates the "user interface" logic from the "business logic" (calculations)
- Demonstrates how functions make code more organized and reusable
- Allows the user to perform multiple calculations in one session

This shows the power of functions for code organization and reusability!

## 🎮 Example Interaction

```
=== Pocket Calculator ===

Choose an operation:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit

Enter your choice (1-5): 1

Enter first number: 15
Enter second number: 7
Result: 15 + 7 = 22

Choose an operation:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit

Enter your choice (1-5): 3

Enter first number: 6
Enter second number: 4
Result: 6 × 4 = 24

Choose an operation:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit

Enter your choice (1-5): 5

Thank you for using the calculator!
```

## 🧠 What You'll Practice

This project reinforces concepts from **Chapter 8: Functions**:
- [Defining functions](../../../book/chapters/08-functions.md#-defining-functions) with parameters and return values
- [Calling functions](../../../book/chapters/08-functions.md#-calling-functions) from other parts of your program
- [Multiple parameters](../../../book/chapters/08-functions.md#-parameters-and-arguments) for mathematical operations
- [Return values](../../../book/chapters/08-functions.md#-return-values) to get results back from functions

**Building on previous exercises:**
- Unlike [`hello-function`](../../exercises/08-functions/01-hello-function/) which has one simple function, this uses multiple related functions
- Unlike [`calculate-area`](../../exercises/08-functions/02-calculate-area/) which is just one calculation, this creates a complete application
- Unlike [`is-even`](../../exercises/08-functions/03-is-even/) which returns boolean, this demonstrates functions returning numbers

## 🚀 Getting Started

1. **Open `script.js` in this folder**

2. **Follow the step-by-step approach:**
   - Start by creating the four basic math functions
   - Test each function individually
   - Create the menu display function
   - Add the main program loop
   - Test the complete application

3. **Test your project:** `node script.js`

## 💡 Implementation Ideas

### Approach 1: Basic Function Structure
```javascript
const prompt = require('prompt-sync')();

// Define calculation functions (like calculate-area exercise)
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

// Test your functions
console.log(add(5, 3));      // Should output: 8
console.log(subtract(10, 4)); // Should output: 6
```

### Approach 2: Menu System with Functions
```javascript
// Function to display the menu
function showMenu() {
    console.log("\n=== Pocket Calculator ===");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");
}

// Functions to get numbers from user
function getFirstNumber() {
    return Number(prompt("Enter first number: "));
}

function getSecondNumber() {
    return Number(prompt("Enter second number: "));
}
```

### Approach 3: Complete Application Loop
```javascript
// Main program loop (like from Chapter 7)
let choice = "";
while (choice !== "5") {
    showMenu();
    choice = prompt("Enter your choice (1-5): ");
    
    if (choice === "1") {
        let num1 = getFirstNumber();
        let num2 = getSecondNumber();
        let result = add(num1, num2);
        console.log("Result: " + num1 + " + " + num2 + " = " + result);
    }
    // Add other operations...
}
```

## ✅ Success Criteria

Your project is successful when:
- [ ] You have separate functions for add, subtract, multiply, and divide
- [ ] Each function takes two parameters and returns the result
- [ ] You have a menu system that lets users choose operations
- [ ] You use a loop to allow multiple calculations
- [ ] You properly separate the UI logic from the calculation logic
- [ ] The program handles all four basic operations correctly

## 🎨 Creative Extensions (Optional)

Want to make your calculator even better? Try these ideas:
- Add more operations (power, square root, percentage)
- Add input validation (handle division by zero, invalid numbers)
- Add a history feature that remembers previous calculations
- Create a function to format results nicely
- Add scientific calculator functions
- Save/load calculator sessions

## 🔗 Concepts Applied

This project demonstrates mastery of:
- **Variables** (Chapter 3) → Storing user input and results
- **Operators** (Chapter 4) → Mathematical operations in functions
- **Input/Output** (Chapter 5) → Interactive menu system
- **Selections** (Chapter 6) → Menu choice handling
- **Iterations** (Chapter 7) → Main program loop
- **Functions** (Chapter 8) → Code organization and reusability

## 🎉 What You've Accomplished

By completing this project, you've shown you can:
- Organize code into logical, reusable functions
- Separate user interface logic from business logic
- Create a complete application using multiple programming concepts
- Design a program architecture that's easy to extend and maintain

This is a significant step up from the isolated functions in the exercises. You've created a real application that demonstrates proper code organization. You're now ready for the data collection concepts in Chapter 9!

## 🚀 Next Steps

Ready for more? The next project will introduce arrays, allowing your programs to work with collections of data and create even more powerful applications!