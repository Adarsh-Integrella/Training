// 18) Write a JavaScript function to merge two arrays and removes all duplicates elements

const mergeAndRemove = (list1, list2) => {
  const newArray = list1.concat(list2);
  const duplicatesRemoved = new Set(newArray);
  return duplicatesRemoved;
};

const list1 = [2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9];
const list2 = [2, 3, 4, 5, 6, 7, 8];
const answer = ([], mergeAndRemove(list1, list2));
console.log(answer);
