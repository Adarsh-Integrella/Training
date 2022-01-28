// 30) Calculate the sum of first 100 prime numbers and return them in an array . //expected : 24,133
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

const calcSumPrime = (ans) => {
  let sum = 0;
  for (let i = 0; i < ans.length; i++) {
    sum += ans[i];
  }
  return sum;
};
const ans = ([], getPrimeNumbers());
const sum = calcSumPrime(ans);
console.log(
  `Array of first 100 prime numbers is : ${ans}. Sum of first 100 prime numbers is ${sum}`
);
