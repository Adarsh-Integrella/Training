//16) Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2]

const numToList = (num) => {
  const answer = [];
  while (num) {
    let temp = num % 10;
    num = Math.round(num / 10);
    answer.push(temp);
  }
  return answer;
};

let num = 2342;
const answer = ([], numToList(num));
answer.reverse();
console.log(answer);
