//10) Write a function that checks whether an element occurs in a list.

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 343, 54, 45, 23];

const checkElement = (element) => {
  for (let x of list) {
    if (element === x) {
      return true;
    }
  }
  return false;
};

if (checkElement(43)) {
  console.log("Element occur in a list.");
} else {
  console.log("Element doesn't occur in a list.");
}
