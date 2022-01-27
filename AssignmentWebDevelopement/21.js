// 21) Write a JavaScript function to capitalize the first letter of a string

const capitalizeFirstCharOfString = (str) => {
  let firstChar = str.charAt(0).toUpperCase();
  let otherString = str.substr(1);
  const finalString = firstChar + otherString;
  return finalString;
};

const str = "alphabet";
console.log(capitalizeFirstCharOfString(str));
