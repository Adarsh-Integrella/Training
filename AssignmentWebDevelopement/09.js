//9) Write function that reverses a list, preferably in place.

const reverseList = (list, start, end) => {
  console.log(`Before ${list}`);

  while (start <= end) {
    [list[start], list[end]] = [list[end], list[start]];
    start++;
    end--;
  }
  console.log(`After ${list}`);
};

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

reverseList(list, 0, list.length - 1);
