// Age Category Exercise
// Goal: Ask for user's age and categorize them appropriately

const prompt = require('prompt-sync')();

// TODO: Ask the user for their age
const age = prompt("What is your age?");
// TODO: Convert the input to a number
const ageNumber = Number(age)
// TODO: Use if/else if statements to categorize the age:
//       - 0-12: "You are a child."
//       - 13-19: "You are a teenager."
//       - 20-64: "You are an adult."
//       - 65+: "You are a senior."
// TODO: Display the appropriate message
if ( ageNumber < 13 && ageNumber > 0){
    console.log("You are a child.")
} else if( ageNumber > 12 && ageNumber < 20){
    console.log("You are a teenager.")
}else if( ageNumber > 19 && ageNumber < 65){
console.log("You are a adult.");}else{
    console.log("You are a senior.")
}