// 19) Write a JavaScript function to get nth largest element from an unsorted array

const findNthLargentElement = (list, n) => {
  const sortedArray = list.sort((a, b) => b - a);
  console.log(sortedArray);
  return sortedArray[n - 1];
};

const list = [4, 5, 7, 2, 3, 5, 0, 6, 9, 12, 34, 57, 43, 33];
const n = prompt("Which largest array value do you want?");

const answer = findNthLargentElement(list, Number(n));
console.log(answer);
