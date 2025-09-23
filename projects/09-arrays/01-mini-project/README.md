# Mini-Project: Interactive Quiz

## 🎯 Goal

Create an interactive quiz game that uses arrays to store questions and answers, demonstrating how to work with collections of related data. This project builds upon the array concepts from Chapter 9 and serves as the perfect stepping stone to the final capstone project.

## 📖 Project Description

Build a quiz game that:
- Uses parallel arrays to store questions and their corresponding answers
- Loops through all questions and asks them to the user
- Keeps track of the user's score throughout the quiz
- Provides feedback after each question and a final score summary
- Demonstrates the power of arrays for managing collections of related data

This project introduces the concept of parallel arrays - a key technique used in the final Task Manager project!

## 🎮 Example Interaction

```
=== JavaScript Quiz ===
Let's test your programming knowledge!

Question 1 of 5:
What does 'console.log()' do?
Your answer: prints to the console

Correct! ✓

Question 2 of 5:
What symbol is used for assignment in JavaScript?
Your answer: =

Correct! ✓

Question 3 of 5:
What does 'if' statements help you do?
Your answer: make choices

Correct! ✓

Question 4 of 5:
What type of loop is best when you know how many times to repeat?
Your answer: while

Incorrect. ✗ The correct answer is: for

Question 5 of 5:
What do arrays help you store?
Your answer: multiple values

Correct! ✓

=== Quiz Complete! ===
Your final score: 4 out of 5 (80%)
Great job! You have a solid understanding of JavaScript basics.
```

## 🧠 What You'll Practice

This project reinforces concepts from **Chapter 9: Arrays**:
- [Creating arrays](../../../book/chapters/09-arrays.md#-creating-arrays) to store collections of data
- [Accessing array elements](../../../book/chapters/09-arrays.md#-accessing-array-elements) by index
- [Arrays and loops](../../../book/chapters/09-arrays.md#-arrays-and-loops) for processing collections
- [Functions and arrays](../../../book/chapters/09-arrays.md#-functions-and-arrays) for organized code

**Building on previous exercises:**
- Unlike [`print-list`](../../exercises/09-arrays/01-print-list/) which just displays array contents, this creates interactive functionality
- Unlike [`max-in-array`](../../exercises/09-arrays/02-max-in-array/) which processes numbers, this works with strings and user input
- Introduces **parallel arrays** - a crucial concept for the final Task Manager project

## 🚀 Getting Started

1. **Open `script.js` in this folder**

2. **Follow the step-by-step approach:**
   - Start by creating arrays for questions and answers
   - Test accessing elements by index
   - Add a simple loop to display questions
   - Add user input and answer checking
   - Add score tracking and final summary

3. **Test your project:** `node script.js`

## 💡 Implementation Ideas

### Approach 1: Basic Parallel Arrays
```javascript
const prompt = require('prompt-sync')();

// Create parallel arrays (same index = related data)
let questions = [
    "What does 'console.log()' do?",
    "What symbol is used for assignment in JavaScript?",
    "What does 'if' statements help you do?",
    "What type of loop is best when you know how many times to repeat?",
    "What do arrays help you store?"
];

let answers = [
    "prints to the console",
    "=",
    "make choices", 
    "for",
    "multiple values"
];

// Test accessing parallel data
console.log("Question 0:", questions[0]);
console.log("Answer 0:", answers[0]);
```

### Approach 2: Quiz Loop Structure
```javascript
let score = 0;

// Loop through all questions (like print-list exercise)
for (let i = 0; i < questions.length; i++) {
    console.log("\nQuestion " + (i + 1) + " of " + questions.length + ":");
    console.log(questions[i]);
    
    let userAnswer = prompt("Your answer: ");
    
    // Check if answer is correct
    if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
        console.log("Correct! ✓");
        score++; // Increment score (accumulation pattern)
    } else {
        console.log("Incorrect. ✗ The correct answer is: " + answers[i]);
    }
}
```

### Approach 3: Enhanced Features
```javascript
// Function to calculate percentage
function calculatePercentage(score, total) {
    return Math.round((score / total) * 100);
}

// Function to give feedback based on score
function getFeedback(percentage) {
    if (percentage >= 90) return "Excellent! You're a JavaScript expert!";
    if (percentage >= 70) return "Great job! You have a solid understanding.";
    if (percentage >= 50) return "Good work! Keep practicing to improve.";
    return "Keep studying! You'll get better with practice.";
}
```

## ✅ Success Criteria

Your project is successful when:
- [ ] You have parallel arrays for questions and answers (at least 5 questions)
- [ ] You use a loop to go through all questions
- [ ] You get user input for each question
- [ ] You check answers and provide immediate feedback
- [ ] You keep track of the score throughout the quiz
- [ ] You display a final score summary with percentage

## 🎨 Creative Extensions (Optional)

Want to make your quiz even better? Try these ideas:
- Create different quiz categories (math, science, history)
- Save high scores across quiz sessions
- Add difficulty levels with different question sets
- Create a question bank and randomly select questions

### Cue for Multiple Choice: Nested Arrays

How can you store multiple options for each question? You can put arrays inside another array! This is called a **nested array**.

```javascript
// The outer array holds all your choice sets.
let choices = [
    ["prints to the console", "makes text bold", "adds numbers"], // Choices for Question 0
    ["=", "==", "==="],                                          // Choices for Question 1
    ["make choices", "stop the program", "repeat code"]          // Choices for Question 2
    // ...and so on
];

// You would also need a parallel array for the correct answer's INDEX.
let correctChoiceIndexes = [0, 0, 0]; // The first option is correct for the first 3 questions.
```

Inside your loop, you can access the choices for the current question `i` with `choices[i]` and then loop through *that* array to display them. This is a powerful concept used for all kinds of complex data!

### Cue for a Timer: `setTimeout`

How can you add a time limit? JavaScript has a special built-in function called `setTimeout` that runs code after a certain number of milliseconds.

```javascript
console.log("The 10-second timer starts... now!");

setTimeout(function() {
    // This code will run after 10,000 milliseconds (10 seconds)
    console.log("Time's up!");
    // You could put logic here to check if the user has answered yet.
}, 10000);
```

This is a more advanced concept (called asynchronous programming), but you can use this snippet as a "magic" tool to add a time limit to your quiz questions!

## 🔗 Concepts Applied

This project demonstrates mastery of:
- **Variables** (Chapter 3) → Storing quiz data and scores
- **Operators** (Chapter 4) → String comparison and score calculation
- **Input/Output** (Chapter 5) → Interactive question and answer flow
- **Selections** (Chapter 6) → Checking answers and providing feedback
- **Iterations** (Chapter 7) → Looping through all questions
- **Functions** (Chapter 8) → Organizing quiz logic into reusable pieces
- **Arrays** (Chapter 9) → Managing collections of questions and answers

## 🎉 What You've Accomplished

By completing this project, you've shown you can:
- Work with parallel arrays to manage related data
- Combine arrays with loops for interactive applications
- Create engaging user experiences with immediate feedback
- Organize complex data and logic into a cohesive program

This project introduces **parallel arrays** - the exact same concept used in the final Task Manager project where tasks and their completion status are stored in separate but related arrays. You're now fully prepared for the capstone challenge!

## 🚀 Next Steps

Congratulations! You've completed all the foundational projects. You're now ready for the **Task Manager Capstone Project** - where you'll combine everything you've learned to build a complete, open-ended application!

The parallel arrays concept you just mastered is exactly what you'll need for managing tasks and their completion status in the final project.