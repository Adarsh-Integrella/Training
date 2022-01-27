//29) Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

const newDistinctArray = (list) => {
  const distictElements = new Set(list);
  const elementsNew = [...distictElements];
  return elementsNew;
};

const list = [
  1, 3, 4, 5, 6, 7, 3, 4, 5, 6, 8, 9, 9, 8, 98, 234, 2, 23423, 234, 121, 2349,
];
console.log(`The non-distinct array is : ${list}`);

const distictElementArray = ([], newDistinctArray(list));
console.log(`The distinct array is : ${distictElementArray}`);
