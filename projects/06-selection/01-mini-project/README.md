# Mini-Project: Text Adventure Entryway

## 🎯 Goal

Create an interactive text-based adventure that uses decision-making to create different story outcomes. This project builds upon the selection concepts from Chapter 6 and combines them with the input/output skills from Chapter 5.

## 📖 Project Description

Build a mini text adventure where:
- The program presents the user with a scenario and choices
- Based on the user's input, different story paths unfold
- Multiple `if/else` statements create branching narratives
- The story has several possible endings depending on the choices made

This is like a "Choose Your Own Adventure" book, but in code!

## 🎮 Example Interaction

```
=== The Mysterious Door ===

You find yourself standing in front of an ancient castle.
Two massive doors stand before you:
- A RED door with strange symbols
- A BLUE door that glows softly

Which door do you choose? (red/blue): red

You push open the red door and step inside...
The room is filled with treasure chests!

You see three chests:
- A GOLDEN chest that sparkles
- A SILVER chest with intricate carvings  
- A WOODEN chest that looks very old

Which chest do you open? (golden/silver/wooden): golden

You open the golden chest and find... a magical sword!
The sword glows with power and you feel stronger.

Congratulations! You have found the legendary Sword of Light!
Your adventure ends in victory!
```

## 🧠 What You'll Practice

This project reinforces concepts from **Chapter 6: Selections**:
- Using [`if/else if/else`](../../../book/chapters/06-selections.md#-the-else-if-statement) statements for multiple story paths
- [String comparison](../../../book/chapters/06-selections.md#-the-if-statement) with user input
- [Complex conditions](../../../book/chapters/06-selections.md#-complex-conditions) and logical flow
- Creating [menu systems](../../../book/chapters/06-selections.md#pattern-2-menu-systems) for user choices

**Building on previous exercises:**
- Unlike [`age-category`](../../exercises/06-selection/01-age-category/) which uses number ranges, this uses string comparisons
- Unlike [`max-of-three`](../../exercises/06-selection/02-max-of-three/) which finds a single answer, this creates branching narratives
- Combines I/O from Chapter 5 with decision-making from Chapter 6

## 🚀 Getting Started

1. **Open `script.js` in this folder**

2. **Follow the step-by-step approach:**
   - Start with one simple choice (like choosing a door)
   - Add the logic to handle different responses
   - Gradually add more choices and story branches
   - Test each choice to make sure it works

3. **Test your project:** `node script.js`

## 💡 Implementation Ideas

### Approach 1: Simple Two-Choice Adventure
```javascript
const prompt = require('prompt-sync')();

console.log("=== The Forest Path ===");
console.log("You come to a fork in the road.");
console.log("Do you go LEFT or RIGHT?");

let choice = prompt("Enter your choice (left/right): ");

if (choice === "left") {
    console.log("You find a treasure chest!");
} else if (choice === "right") {
    console.log("You meet a friendly wizard!");
} else {
    console.log("You stand there confused...");
}
```

### Approach 2: Nested Choices
```javascript
// First choice
if (choice1 === "forest") {
    console.log("You enter the dark forest...");
    
    let choice2 = prompt("Do you follow the path or explore? (path/explore): ");
    
    if (choice2 === "path") {
        console.log("You safely reach the village!");
    } else if (choice2 === "explore") {
        console.log("You discover a hidden cave!");
    }
} else if (choice1 === "mountain") {
    // Different story branch
}
```

### Approach 3: Multiple Story Branches
```javascript
// Create different functions for different story paths
// Use multiple if/else statements to create complex narratives
// Give the user meaningful choices that affect the outcome
```

## ✅ Success Criteria

Your project is successful when:
- [ ] You present the user with at least 2 different choices
- [ ] Each choice leads to a different story outcome
- [ ] You use `if/else if/else` statements to handle the choices
- [ ] Your story is engaging and makes sense
- [ ] You handle invalid input gracefully (with an `else` case)
- [ ] The program runs without errors

## 🎨 Creative Extensions (Optional)

Want to make your adventure even better? Try these ideas:
- Add more choice points to create longer adventures
- Create multiple possible endings
- Add character stats (health, strength, etc.) that affect choices
- Include random elements (like dice rolls)
- Create themed adventures (space, medieval, modern, etc.)
- Add ASCII art to make it more visual

## 🔗 Concepts Applied

This project demonstrates mastery of:
- **Variables** (Chapter 3) → Storing user choices
- **Operators** (Chapter 4) → String comparison with `===`
- **Input/Output** (Chapter 5) → Interactive prompts and story display
- **Selections** (Chapter 6) → Branching logic and decision trees

## 🎉 What You've Accomplished

By completing this project, you've shown you can:
- Create complex decision trees with multiple outcomes
- Handle string-based user input and comparisons
- Build engaging, interactive narratives
- Structure a program with clear logical flow

This is a significant step up from the simple categorization in [`age-category`](../../exercises/06-selection/01-age-category/) and comparison logic in [`max-of-three`](../../exercises/06-selection/02-max-of-three/). You're now ready for the repetition concepts in Chapter 7!

## 🚀 Next Steps

Ready for more? The next project will introduce loops, allowing your programs to repeat actions and handle ongoing user interaction!