//11) Write a function that returns the elements on odd positions in a list

const returnOddPositions = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 !== 0) {
      console.log(i + 1);
    }
  }
};
const list = [31, 34, 56, 64, 343, 231, 2327, 232123];
returnOddPositions(list);
