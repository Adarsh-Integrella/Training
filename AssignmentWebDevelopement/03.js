//3) Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.

let input = prompt("Please enter a number for sum from 1 to n.");
let temp = 0;
for (let i = 1; i <= input; i++) {
  temp += i;
}
console.log(temp);
