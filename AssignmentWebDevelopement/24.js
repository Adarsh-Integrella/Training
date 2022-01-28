//24) Write a JavaScript function that accepts a string as a
//parameter and counts the number of vowels within the string.

const countVowelsInString = (str, count) => {
  for (let i = 0; i < str.length; i++) {
    let temp = str.charAt(i).toLowerCase();
    if (
      temp === "a" ||
      temp === "e" ||
      temp === "i" ||
      temp === "o" ||
      temp === "u"
    ) {
      count++;
    }
  }
  return count;
};
let str = "Adarsh Kumar Maheshwari";
console.log(countVowelsInString(str, 0));
