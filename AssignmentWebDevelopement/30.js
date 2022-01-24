// 30) Calculate the sum of first 100 prime numbers and return them in an array . //expected : 24,133

const checkPrimeNumber = () => {
  let count = 2;
  let sum = 5;
  let i = 4;
  while (count !== 100) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      sum += i;
      count++;
    }
    i++;
  }
  return sum;
};

console.log(checkPrimeNumber());
