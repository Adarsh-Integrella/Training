// 23) Write a JavaScript function that returns a passed string with letters in alphabetical order.

const alphabeticalSort = (str) => {
  const splittedStr = str.split("");
  const sortedStr = splittedStr.sort();
  return sortedStr.join("");
};

let str = "qwertyuiopasdfghjklzxcvbnm";
console.log(alphabeticalSort(str));
