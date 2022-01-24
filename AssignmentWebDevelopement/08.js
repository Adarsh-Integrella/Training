//8) Write a function that returns the largest element in a list.

const list = [45, 56, 3, 34, 109, 343, 234, 44, 789, 32, 89];
let maxNum = Number.NEGATIVE_INFINITY;
for (let x of list) {
  maxNum = Math.max(x, maxNum);
}
console.log(maxNum);
