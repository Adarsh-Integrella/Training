// 12) Write a function that computes the running total of a list.

const runningTotal = (list, answer) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    let current = list[i];
    sum += current;
    answer.push(sum);
  }
};
const list = [2, 3, 4, 5, 6, 7, 8, 9, 23, 34, 45, 57];
const answer = [];
console.log(`Original list : ${list}`);
runningTotal(list, answer);
console.log(`computes running total list : ${answer}`);
