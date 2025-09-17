// Sum 1 to N Exercise
// Goal: Ask for a number N, then calculate the sum of numbers from 1 to N

const prompt = require('prompt-sync')();

const N = Number(prompt("Give N a number value"))
// TODO: Create a variable to store the sum (start with 0)
var sum = 0
// TODO: Use a for loop to go from 1 to N
for(var i=1; i <= N; i++){
    sum += i;
   
}
// TODO: Inside the loop, add the current number to the sum
// TODO: Display the final result

 console.log(sum);