// 26) Write a JavaScript function to check whether a given value is alpha numeric or not

const alphaNumericCheckUsingRegex = (str) => {
  let regx = /[a-zA-Z0-9]/;
  for (let i = 0; i < str.length; i++) {
    if (regx.test(str.charAt(i)) === false) {
      return false;
    }
  }
  return true;
};

const str = "a3Sd87";
if (alphaNumericCheckUsingRegex(str)) {
  console.log("Yes, it is alpha numeric string.");
} else {
  console.log("No, it is not alphanumeric string.");
}
