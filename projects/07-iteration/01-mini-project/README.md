# Mini-Project: Dynamic Number Guesser

## 🎯 Goal

Create an interactive number guessing game that uses loops to continue until the player wins. This project builds upon the iteration concepts from Chapter 7 and combines them with selection logic from Chapter 6.

## 📖 Project Description

Build a guessing game where:
- The program generates a random secret number between 1 and 100
- The player keeps guessing until they find the correct number
- After each guess, the program tells them if their guess is "too high" or "too low"
- A `while` loop continues the game until the correct number is guessed
- The program counts and displays how many guesses it took

This is like a classic guessing game, but powered by programming logic!

## 🎮 Example Interaction

```
=== Number Guessing Game ===
I'm thinking of a number between 1 and 100.
Can you guess what it is?

Guess #1: 50
Too high! Try a lower number.

Guess #2: 25
Too low! Try a higher number.

Guess #3: 37
Too high! Try a lower number.

Guess #4: 31
Too low! Try a higher number.

Guess #5: 34
Congratulations! You guessed it!
The number was 34 and it took you 5 guesses.

Thanks for playing!
```

## 🧠 What You'll Practice

This project reinforces concepts from **Chapter 7: Iterations**:
- Using [`while` loops](../../../book/chapters/07-iterations.md#-the-while-loop) for unknown number of iterations
- [Loop patterns](../../../book/chapters/07-iterations.md#-common-loop-patterns) for user input processing
- [Accumulation](../../../book/chapters/07-iterations.md#pattern-1-accumulation-building-up-a-result) to count guesses
- [Validation loops](../../../book/chapters/07-iterations.md#pattern-3-validation-loops) for game continuation

**Building on previous exercises:**
- Unlike [`count-1-to-10`](../../exercises/07-iteration/01-count-1-to-10/) which uses a `for` loop with known iterations, this uses a `while` loop
- Unlike [`sum-1-to-n`](../../exercises/07-iteration/02-sum-1-to-n/) which accumulates numbers, this accumulates guess attempts
- Combines loops with selection logic from Chapter 6 for "higher/lower" feedback

## 🚀 Getting Started

1. **Open `script.js` in this folder**

2. **Follow the step-by-step approach:**
   - Start by generating a random number
   - Create a simple loop that asks for one guess
   - Add the logic to compare guesses and give feedback
   - Add a counter to track the number of guesses
   - Test thoroughly with different numbers

3. **Test your project:** `node script.js`

## 💡 Implementation Ideas

### Approach 1: Basic While Loop Structure
```javascript
const prompt = require('prompt-sync')();

// Generate random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let userGuess = 0;

console.log("=== Number Guessing Game ===");
console.log("I'm thinking of a number between 1 and 100.");

// Keep looping until they guess correctly
while (userGuess !== secretNumber) {
    guessCount++;
    userGuess = Number(prompt("Guess #" + guessCount + ": "));
    
    // Give feedback
    if (userGuess > secretNumber) {
        console.log("Too high! Try a lower number.");
    } else if (userGuess < secretNumber) {
        console.log("Too low! Try a higher number.");
    }
}

console.log("Congratulations! You guessed it!");
```

### Approach 2: Input Validation
```javascript
// Add validation to handle invalid input
while (userGuess !== secretNumber) {
    let input = prompt("Guess #" + guessCount + ": ");
    userGuess = Number(input);
    
    // Check if input is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        console.log("Please enter a number between 1 and 100.");
        continue; // Skip the rest and ask again
    }
    
    guessCount++;
    // Rest of game logic...
}
```

### Approach 3: Enhanced Features
```javascript
// Add features like:
// - Difficulty levels (different number ranges)
// - Hint system (show how close they are)
// - Play again option
// - Best score tracking
```

## ✅ Success Criteria

Your project is successful when:
- [ ] The program generates a random number between 1 and 100
- [ ] You use a `while` loop to continue until the correct guess
- [ ] You provide "too high" or "too low" feedback after each guess
- [ ] You count and display the number of guesses taken
- [ ] The program handles the winning condition correctly
- [ ] The game runs without infinite loops or errors

## 🎨 Creative Extensions (Optional)

Want to make your guessing game even better? Try these ideas:
- Add difficulty levels (1-10, 1-1000, etc.)
- Implement a hint system that shows how close the guess is
- Add a "play again" feature with a loop
- Track and display the best score across games
- Add a maximum number of guesses (hard mode)
- Include ASCII art for wins/losses

## 🔗 Concepts Applied

This project demonstrates mastery of:
- **Variables** (Chapter 3) → Storing the secret number and guess count
- **Operators** (Chapter 4) → Comparison operators and random number generation
- **Input/Output** (Chapter 5) → Interactive prompts and feedback
- **Selections** (Chapter 6) → Conditional feedback based on guesses
- **Iterations** (Chapter 7) → While loops and accumulation patterns

## 🎉 What You've Accomplished

By completing this project, you've shown you can:
- Use `while` loops for unknown iteration counts
- Combine loops with conditional logic for complex behavior
- Handle user input within loop structures
- Create engaging, interactive programs that respond dynamically

This is a significant step up from the predictable counting in [`count-1-to-10`](../../exercises/07-iteration/01-count-1-to-10/) and simple accumulation in [`sum-1-to-n`](../../exercises/07-iteration/02-sum-1-to-n/). You're now ready for the code organization concepts in Chapter 8!

## 🚀 Next Steps

Ready for more? The next project will introduce functions, allowing you to organize your code into reusable, logical pieces!