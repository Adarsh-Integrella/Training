//14) Write a function that concatenates two lists. [z,c,a], [11,12,13] → [z,c,a,11,12,13]

const concatTwoLists = (list1, list2) => {
  const concatenatedList = list1.concat(list2);
  return concatenatedList;
};

const list1 = [1, 2, 3, 4, 5, 6];
const list2 = ["ad", "ar", "sh", "ku", "ma", "r"];
const answer = ([] = concatTwoLists(list1, list2));
console.log(answer);
