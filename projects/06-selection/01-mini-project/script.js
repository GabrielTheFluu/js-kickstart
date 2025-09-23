// Mini-Project: Text Adventure Entryway
// Build upon the age-category and max-of-three exercises by creating an interactive story!

// 📖 IMPORTANT: Read the README.md file first for detailed instructions,
//    examples, and ideas on how to approach this project!

// This project builds on what you learned in the selection exercises:
// - Using if/else if/else statements (like in age-category)
// - Making comparisons and decisions (like in max-of-three)
// - But instead of numbers, we're comparing strings for story choices!

// Import prompt-sync (just like in previous exercises)
const prompt = require('prompt-sync')();

// TODO: Create your text adventure here!

// Here's a simple example to get you started:
console.log("=== The Mysterious Door ===");
console.log("\nYou find yourself standing in front of an ancient castle.");
console.log("Two massive doors stand before you:");
console.log("- A RED door with strange symbols");
console.log("- A BLUE door that glows softly");

// Get the user's choice
let doorChoice = prompt("\nWhich door do you choose? (red/blue): ");

// Use if/else statements to create different story paths
if (doorChoice === "red") {
    console.log("\nYou push open the red door and step inside...");
    console.log("The room is filled with ancient books and scrolls!");
    console.log("You have discovered the Library of Secrets!");
    
} else if (doorChoice === "blue") {
    console.log("\nYou push open the blue door and step inside...");
    console.log("The room sparkles with magical crystals!");
    console.log("You have found the Crystal Chamber!");
    
} else {
    console.log("\nYou stand there confused, unable to decide...");
    console.log("The doors slowly fade away. Your adventure ends here.");
}

console.log("\nThanks for playing!");

// YOUR TURN: 
// 1. Add more choices after the first door selection
// 2. Create nested if statements for deeper story branches
// 3. Add more possible endings
// 4. Make your story more detailed and engaging
// 5. Test with different inputs to make sure all paths work!

// Remember: This is YOUR adventure - make it creative and fun!