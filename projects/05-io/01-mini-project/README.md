# Mini-Project: Mad Libs Story Generator

## 🎯 Goal

Create an interactive story generator that asks users for various words and creates a funny story by filling in the blanks. This project builds upon the input/output skills from Chapter 5 and the [`greet-user`](../../exercises/05-io/01-greet-user/) exercise.

## 📖 Project Description

Build a program that:
- Prompts the user for several different types of words (nouns, verbs, adjectives, etc.)
- Takes those words and inserts them into a pre-written story template
- Displays the completed, personalized story to the user

This is like the classic "Mad Libs" word game where you fill in blanks to create silly stories!

## 🎮 Example Interaction

```
=== Mad Libs Story Generator ===
I need some words to create your story!

Enter a noun: elephant
Enter a verb: dancing
Enter an adjective: purple
Enter a place: kitchen
Enter another noun: sandwich
Enter a number: 42

=== Your Story ===
Once upon a time, there was a purple elephant who loved dancing in the kitchen.
Every day, the elephant would eat exactly 42 sandwich and dream of becoming famous.
The end!

Thanks for playing Mad Libs!
```

## 🧠 What You'll Practice

This project reinforces concepts from **Chapter 5: Input & Output**:
- Using [`prompt-sync`](../../../book/chapters/05-io.md#-input-with-prompt-sync) to get multiple user inputs
- Using [`console.log()`](../../../book/chapters/05-io.md#-output-with-consolelog) for formatted output
- [String concatenation](../../../book/chapters/05-io.md#dynamic-output-with-variables) to build complex messages
- Creating an [interactive program flow](../../../book/chapters/05-io.md#-common-io-patterns)

**Building on the [`greet-user`](../../exercises/05-io/01-greet-user/) exercise:**
- Instead of asking for just one input (name), you'll ask for multiple inputs
- Instead of a simple greeting, you'll create a more complex, formatted story
- You'll practice organizing multiple prompts and outputs

## 🚀 Getting Started

1. **Make sure prompt-sync is installed:**
   ```bash
   npm run setup:prompt
   ```

2. **Open `script.js` in this folder**

3. **Follow the step-by-step approach:**
   - Start by asking for one word and displaying it
   - Gradually add more prompts
   - Build your story template piece by piece
   - Test frequently with `node script.js`

4. **Test your project:** `node script.js`

## 💡 Implementation Ideas

### Approach 1: Simple Story Template
```javascript
const prompt = require('prompt-sync')();

console.log("=== Mad Libs Story Generator ===");

let noun = prompt("Enter a noun: ");
let verb = prompt("Enter a verb: ");
let adjective = prompt("Enter an adjective: ");

console.log("\n=== Your Story ===");
console.log("The " + adjective + " " + noun + " likes to " + verb + ".");
```

### Approach 2: More Complex Story
```javascript
// Ask for more words and create a longer story
let place = prompt("Enter a place: ");
let number = prompt("Enter a number: ");
let food = prompt("Enter a food: ");

// Build a multi-sentence story
console.log("Once upon a time in " + place + "...");
console.log("There lived a " + adjective + " " + noun + "...");
// Continue building your story!
```

### Approach 3: Formatted Output
```javascript
// Use formatting to make your story look nice
console.log("\n====================");
console.log("    YOUR STORY");
console.log("====================");
// Your story here
console.log("====================\n");
```

## ✅ Success Criteria

Your project is successful when:
- [ ] You ask the user for at least 5 different words
- [ ] You create a story that uses all the words the user provided
- [ ] Your story makes sense (even if it's silly!)
- [ ] Your output is well-formatted and easy to read
- [ ] You can run the program multiple times with different inputs

## 🎨 Creative Extensions (Optional)

Want to make your Mad Libs even better? Try these ideas:
- Create multiple story templates and let the user choose
- Add more word types (colors, animals, emotions, etc.)
- Create themed stories (adventure, romance, sci-fi)
- Add input validation to make sure words aren't empty
- Create a longer, multi-paragraph story

## 🔗 Concepts Applied

This project demonstrates mastery of:
- **Variables** (Chapter 3) → Storing user input
- **Operators** (Chapter 4) → String concatenation with `+`
- **Input/Output** (Chapter 5) → Multiple prompts and formatted output

## 🎉 What You've Accomplished

By completing this project, you've shown you can:
- Handle multiple user inputs in sequence
- Build complex strings from user data
- Create an engaging, interactive program
- Structure a program with clear input and output phases

This is a significant step up from the simple greeting in the [`greet-user`](../../exercises/05-io/01-greet-user/) exercise. You're now ready for the decision-making concepts in Chapter 6!

## 🚀 Next Steps

Ready for more? The next project will introduce decision-making with `if` statements, allowing your programs to respond differently based on user choices!