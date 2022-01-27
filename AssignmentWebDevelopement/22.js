//22) Write a JavaScript conditional statement to find the largest of five numbers.
//Display an alert box to show the result

const largestOfFiveNumbers = () => {
  let a = 120,
    b = 90,
    c = 322,
    d = 50,
    e = 402;
  let largest = Number.NEGATIVE_INFINITY;
  if (a > b && a > c && a > d && a > e) {
    largest = a;
  } else if (b > a && b > c && b > d && b > e) {
    largest = b;
  } else if (c > a && c > b && c > d && c > e) {
    largest = c;
  } else if (d > a && d > b && d > c && c > e) {
    largest = d;
  } else {
    largest = e;
  }
  return largest;
};
alert(`Largest number among five numbers is : ${largestOfFiveNumbers()}`);
