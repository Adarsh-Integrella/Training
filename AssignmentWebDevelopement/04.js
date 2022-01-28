// 4) Write a program that prints the next 20 leap years.
let count = 1;
const answer = [];
let year = 2022;
let yearsCount = 20;
while (yearsCount > 0) {
  if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)) {
    answer.push(year);
    yearsCount--;
  }
  year++;
}
for (let x of answer) {
  console.log(x);
}
