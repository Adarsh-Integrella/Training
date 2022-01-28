//. 15) Write a function that combines two lists by alternatingly taking elements,
//e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]

const alternateConcatList = (list1, list2) => {
  const answer = [];
  let toggle = true;
  let i = 0,
    j = 0;
  while (i < list1.length && j < list2.length) {
    if (toggle) {
      answer.push(list1[i++]);
      toggle = !toggle;
    } else {
      answer.push(list2[j++]);
      toggle = !toggle;
    }
  }
  if (j < list2.length) {
    answer.push(list2[j]);
  } else if (i < list1.length) {
    answer.push(list1[i]);
  }
  return answer;
};

const list1 = [1, 2, 3, 4, 5, 6];
const list2 = ["ad", "ar", "sh", "ku", "ma", "r"];
const answer = ([] = alternateConcatList(list1, list2));
console.log(answer);
