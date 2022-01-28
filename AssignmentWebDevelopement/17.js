// 17) Write a JavaScript program to find duplicate values in a JavaScript array

const findDuplicate = (list) => {
  const answer = [];
  const set = new Set(list);
  list.forEach((x) => {
    if (set.has(x)) {
      set.delete(x);
    } else {
      answer.push(x);
    }
  });
  return answer;
};

const list = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 11, 12, 12];

const answer = ([], findDuplicate(list));
console.log(`Duplicate number are : ${answer}`);
