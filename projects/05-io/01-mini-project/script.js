// Mini-Project: Mad Libs Story Generator
// Build upon the greet-user exercise by creating an interactive story!

// 📖 IMPORTANT: Read the README.md file first for detailed instructions,
//    examples, and ideas on how to approach this project!

// This project builds on what you learned in the greet-user exercise:
// - Getting user input with prompt-sync
// - Using console.log for output
// - String concatenation with +

// Import prompt-sync (just like in the greet-user exercise)
const prompt = require('prompt-sync')();

// TODO: Create your Mad Libs story generator here!

// Here's a simple example to get you started:
console.log("=== Mad Libs Story Generator ===");
console.log("I need some words to create your story!\n");

// Get words from the user (add more prompts!)
let occupation = prompt("Enter a occupation: ");
let verb = prompt("Enter a verb: ");
let adjective1 = prompt("Enter an adjective for the worker: ");
let adjective2 = prompt("Enter an adjective for the client: ");
let place = prompt("Enter a location/place: ");
let number = prompt("Enter a number: ");
let help = prompt("Enter what the client needs help with: ")

// Create and display your story
console.log("\n=== Your Story ===");
console.log(`The ${adjective1} ${occupation} likes to ${verb} at his favorite ${place} at ${number} `);
console.log(`The ${adjective1} ${occupation}s client is very ${adjective2} and needs help with his ${help} `)
console.log("\nThanks for playing Mad Libs!"); 

// YOUR TURN: 
// 1. Add more word prompts (place, number, food, animal, etc.)

// 2. Create a longer, more interesting story
// 3. Make your output formatting look nice
// 4. Test with different inputs to make sure it works!
// Remember: This is YOUR project - make it creative and fun!