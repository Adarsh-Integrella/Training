//13) Write a function that tests whether a string is a palindrome.

const checkPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

let str = "aaoloaa";
if (checkPalindrome(str)) {
  console.log("It is a palindromic string!");
} else {
  console.log("Not a palindromic string!");
}
