# Final Project: Personal Task Manager

## 🎯 Goal

Create a comprehensive personal task manager that brings together everything you've learned throughout the course. This is your final challenge - an open-ended project that lets you demonstrate mastery of all JavaScript fundamentals while building something genuinely useful.

## 🚀 The Journey So Far

You've completed an amazing progression of projects that have prepared you for this moment:

- **[Chapter 5: Mad Libs Story Generator](../../../05-io/01-mini-project/)** → Mastered input/output and string manipulation
- **[Chapter 6: Text Adventure Entryway](../../../06-selection/01-mini-project/)** → Learned decision-making with selections
- **[Chapter 7: Dynamic Number Guesser](../../../07-iteration/01-mini-project/)** → Conquered loops and iteration patterns
- **[Chapter 8: Re-usable Pocket Calculator](../../../08-functions/01-mini-project/)** → Organized code with functions
- **[Chapter 9: Interactive Quiz](../../01-mini-project/)** → Mastered arrays and parallel data structures

Now it's time to combine all these skills into one cohesive, real-world application!

## Project Description

Build a task manager that can:
- Add new tasks to your list
- Mark tasks as completed
- Display all your tasks
- Show how many tasks you have left

The beauty of this project is that **you decide how to implement it**! There are many valid approaches, and your solution might be completely different from your classmates' - and that's perfectly fine!

## Skills You'll Apply

This project lets you demonstrate mastery of **every concept** you've learned:

### From Chapter 5 (Input/Output):
- Getting user input with `prompt-sync`
- Displaying formatted output with `console.log`
- Creating interactive program flow

### From Chapter 6 (Selections):
- Using `if/else` statements for menu choices
- Checking task completion status
- Handling different user commands

### From Chapter 7 (Iterations):
- Looping through task lists
- Using `while` loops for menu systems
- Accumulating data (counting remaining tasks)

### From Chapter 8 (Functions):
- Organizing code into logical functions (`addTask`, `markComplete`, `showTasks`)
- Separating concerns and creating reusable code
- Building a clean program architecture

### From Chapter 9 (Arrays):
- Managing collections of tasks
- Using parallel arrays (like in the Interactive Quiz!)
- Processing array data efficiently

## 💡 Recommended Approaches

### Approach 1: Simple Array (Good Starting Point)
```javascript
let tasks = ["Buy milk", "Walk the dog", "Study JavaScript"];
// Add functions to manage this array
```

### Approach 2: Separate Arrays
```javascript
let todoTasks = ["Buy milk", "Study JavaScript"];
let completedTasks = ["Walk the dog"];
```

### Approach 3: Parallel Arrays (Recommended!)
```javascript
let tasks = ["Buy milk", "Walk the dog", "Study JavaScript"];
let completed = [false, true, false]; // Same index as tasks
```

**Why Parallel Arrays?** This is the same pattern you mastered in the Interactive Quiz project - it's perfect for managing related data!

## Example Features

**Core Features (Start Here):**
- Add a task: "Buy groceries"
- Mark task as done: ✓ "Buy groceries" 
- List all tasks with their status
- Count remaining tasks

**Optional Enhancements (For Extra Challenge):**
- Delete tasks from the list
- Edit existing tasks
- Add priority levels (high, medium, low)
- Add due dates
- Create different categories (work, personal, shopping)
- Save/load tasks (advanced)

## Getting Started

1. **Open `script.js`** in this folder
2. **Think about your approach** - How do you want to store tasks? 
3. **Start simple** - Maybe just add and list tasks first
4. **Apply what you've learned** - Use functions, loops, and arrays!
5. **Test as you go** - Run `node script.js` to see your progress
6. **Add features gradually** - Build one feature at a time

## Building on Previous Projects

**From Mad Libs (Chapter 5):**
- Use `prompt` to get task names from users
- Use `console.log` to display task lists nicely

**From Text Adventure (Chapter 6):**
- Create menu systems with `if/else` statements
- Handle different user choices and commands

**From Number Guesser (Chapter 7):**
- Use `while` loops for continuous menu operation
- Keep the program running until user chooses to exit

**From Pocket Calculator (Chapter 8):**
- Organize your code into functions like `addTask()`, `showTasks()`, `markComplete()`
- Separate the user interface from the task management logic

**From Interactive Quiz (Chapter 9):**
- Use parallel arrays to store tasks and their completion status
- Loop through arrays to display and process task data

## ✅ Success Criteria

Your project is successful when:
- [ ] You can add tasks to your system
- [ ] You can mark tasks as completed
- [ ] You can see your task list with status indicators
- [ ] You can count remaining tasks
- [ ] Your code is organized with functions
- [ ] You use arrays to manage task collections
- [ ] You're proud of what you built!
- [ ] Your code works without errors

**That's it!** No automated tests, no strict requirements - just demonstrate what you've learned!

## What This Demonstrates

By completing this project, you've shown you can:
- **Take a real-world problem and break it down**
- **Choose appropriate programming concepts for your solution**
- **Combine multiple programming concepts into a cohesive application**
- **Build something functional and useful**
- **Make independent technical decisions**
- **Think like a programmer**

## Reflection Questions

After building your task manager, think about:
- Which concepts from previous projects did you find most useful?
- What was the most challenging part of combining everything together?
- How did the progression of mini-projects prepare you for this challenge?
- What would you do differently if you started over?
- What feature would you add if you had more time?

## Next Steps

Congratulations! You've completed the JavaScript: Get Started course! You now have a solid foundation in:

- **Sequence** - Writing step-by-step instructions
- **Variables** - Storing and using data
- **Operators** - Performing calculations and comparisons
- **Input/Output** - Creating interactive programs
- **Selections** - Making decisions with conditional logic
- **Iterations** - Repeating actions with loops
- **Functions** - Organizing code into reusable blocks
- **Arrays** - Managing collections of data

**Want to keep growing?**
- Add a web interface with HTML and CSS
- Learn about databases to persist your tasks
- Explore modern JavaScript frameworks
- Build mobile apps
- Share your projects with the world!

The possibilities are endless when you know how to code! 

---

**Remember:** This project represents the culmination of your learning journey. Take your time, be creative, and most importantly - have fun building something that's uniquely yours!