// 27) Write a JavaScript function to check whether a given value is hexadecimal value or not

const checkHexadecimal = () => {
  const hexCheck = /[0-9a-f]/gi;
  const hexDecimalNum = "AABBCC";
  if (hexCheck.test(hexDecimalNum)) {
    console.log(`${hexDecimalNum} is a hexa decimal number.`);
  } else {
    console.log("It is not hexa decimal number");
  }
};

const checkHexadecimal2 = () => {
  const hexNumber = "AABBCC";
  for (let i = 0; i < hexNumber.length; i++) {
    let ch = hexNumber.charAt(i);
    if (
      (ch > "9" && ch < "1") ||
      (ch > "f" && ch <= "z") ||
      (ch > "F" && ch <= "Z")
    ) {
      return false;
    }
  }
  return true;
};
console.log(checkHexadecimal2());
checkHexadecimal();
