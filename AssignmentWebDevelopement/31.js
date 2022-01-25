//31) Print the distance between the first 100 prime numbers.

const checkPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
};
const getPrimeNumbers = () => {
  let flag = true;
  const ans = [];
  let count = 0;
  for (let i = 2; i <= 100 * 10; i++) {
    if (checkPrime(i)) {
      ans.push(i);
      count++;
    }
    if (count === 100) {
      break;
    }
  }
  return ans;
};

const getDiffPrimeNum = (list) => {
  const diffList = [];
  for (let i = 1; i < list.length; i++) {
    let diff = list[i] - list[i - 1];
    diffList.push(diff);
  }
  return diffList;
};
const ans = ([], getPrimeNumbers());
const diffList = ([], getDiffPrimeNum(ans));

console.log(`Distance between the first 100 prime numbers : ${diffList}`);
