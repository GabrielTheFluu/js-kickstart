// Mini-Project: Dynamic Number Guesser
// Build upon the count-1-to-10 and sum-1-to-n exercises by creating an interactive game!

// 📖 IMPORTANT: Read the README.md file first for detailed instructions,
//    examples, and ideas on how to approach this project!

// This project builds on what you learned in the iteration exercises:
// - Using loops for repetition (like in count-1-to-10)
// - Using accumulation to build up a result (like in sum-1-to-n)
// - But instead of a for loop with known iterations, we use a while loop!

// Import prompt-sync (just like in previous exercises)
const prompt = require('prompt-sync')();

// TODO: Create your number guessing game here!

// Here's a simple example to get you started:
console.log("=== Number Guessing Game ===");
console.log("I'm thinking of a number between 1 and 100.");
console.log("Can you guess what it is?\n");

// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let userGuess = 0;

// Keep looping until they guess correctly (this is a while loop!)
while (userGuess !== secretNumber) {
    guessCount++; // Count each guess (accumulation, like in sum-1-to-n)
    
    // Get user's guess
    userGuess = Number(prompt("Guess #" + guessCount + ": "));
    
    // Give feedback using if/else (like from Chapter 6)
    if (userGuess > secretNumber) {
        console.log("Too high! Try a lower number.\n");
    } else if (userGuess < secretNumber) {
        console.log("Too low! Try a higher number.\n");
    } else {
        // They got it right! The loop will end now.
        console.log("Congratulations! You guessed it!");
        console.log("The number was " + secretNumber + " and it took you " + guessCount + " guesses.");
    }
}

console.log("\nThanks for playing!");

// YOUR TURN: 
// 1. Add input validation (what if they enter something that's not a number?)
// 2. Add a "play again" feature with another loop
// 3. Add difficulty levels (different number ranges)
// 4. Add a hint system that tells them how close they are
// 5. Test with different strategies to make sure it works!

// Remember: This combines while loops, accumulation, and conditional logic!