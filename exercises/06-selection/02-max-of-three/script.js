// Maximum of Three Exercise
// Goal: Ask for three numbers and find the largest one

const prompt = require('prompt-sync')();

// TODO: Ask the user for three numbers
const firstNumber = Number(prompt("Give a number "));
const secondNumber = Number(prompt("Give a second number "));
const thirdNumber = Number(prompt("Give a third number"));
// TODO: Use selection statements to determine which number is largest
let max = firstNumber;
if (secondNumber > max){
    max = secondNumber;
}
if (thirdNumber > max) {
    max = thirdNumber;
}
// TODO: Display the maximum number

console.log(max);