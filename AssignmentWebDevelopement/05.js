//5) Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

let startYear = 2014;
let endYear = 2050;
let answer = [];
for (let x = startYear; x <= endYear; x++) {
  let date = new Date(x, 0, 1);
  if (date.getDay() === 0) {
    // answer.push(x);
  }
}
for (let x of answer) {
  console.log(x);
}
