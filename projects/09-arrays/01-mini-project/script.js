// Mini-Project: Interactive Quiz
// Build upon the print-list and max-in-array exercises by creating an interactive quiz!

//  IMPORTANT: Read the README.md file first for detailed instructions,
//    examples, and ideas on how to approach this project!

// This project builds on what you learned in the array exercises:
// - Creating arrays and looping through them (like in print-list)
// - Processing array data with functions (like in max-in-array)
// - But now we use PARALLEL ARRAYS - the same concept used in the final Task Manager!

// Import prompt-sync (just like in previous projects)
const prompt = require('prompt-sync')();

// TODO: Create your quiz here!

// Step 1: Create parallel arrays (same index = related data)
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

// Step 2: Test your parallel arrays (like accessing elements in print-list)
console.log("Testing parallel arrays:");
console.log("Question 0:", questions[0]);
console.log("Answer 0:", answers[0]);
console.log("Total questions:", questions.length);

// Step 3: Create the quiz loop (combines loops from Chapter 7 with arrays!)
console.log("\n=== JavaScript Quiz ===");
console.log("Let's test your programming knowledge!\n");

let score = 0; // Track score (accumulation pattern from Chapter 7)

// Loop through all questions (like in print-list exercise)
for (let i = 0; i < questions.length; i++) {
    console.log("Question " + (i + 1) + " of " + questions.length + ":");
    console.log(questions[i]);
    
    let userAnswer = prompt("Your answer: ");
    
    // Check if answer is correct (selection logic from Chapter 6)
    if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
        console.log("Correct! ✓\n");
        score++; // Increment score (accumulation)
    } else {
        console.log("Incorrect. ✗ The correct answer is: " + answers[i] + "\n");
    }
}

// Step 4: Calculate and display final results (functions from Chapter 8)
function calculatePercentage(score, total) {
    return Math.round((score / total) * 100);
}

function getFeedback(percentage) {
    if (percentage >= 90) return "Excellent! You're a JavaScript expert!";
    if (percentage >= 70) return "Great job! You have a solid understanding.";
    if (percentage >= 50) return "Good work! Keep practicing to improve.";
    return "Keep studying! You'll get better with practice.";
}

let percentage = calculatePercentage(score, questions.length);

console.log("=== Quiz Complete! ===");
console.log("Your final score: " + score + " out of " + questions.length + " (" + percentage + "%)");
console.log(getFeedback(percentage));

// YOUR TURN: 
// 1. Add more questions to your arrays
// 2. Create different quiz categories
// 3. Add multiple choice questions
// 4. Add a timer for each question
// 5. Save high scores across sessions

// Remember: This demonstrates PARALLEL ARRAYS - the same concept used in the Task Manager!
// - questions[0] relates to answers[0]
// - questions[1] relates to answers[1]
// - Same index = related data
// This is exactly how the Task Manager stores tasks and their completion status!