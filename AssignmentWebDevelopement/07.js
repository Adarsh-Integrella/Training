/*
7) Write a JavaScript program to create a new string 
//from a given string changing the position of first and last characters. 
The string length must be greater than or equal to 1.
*/

let str = "BabuBhaiyaMast"; //expected return : tabuBhaiyaMasB
if (str.length > 1) {
  let allCharExceptFirstLast = str.substring(1, str.length - 1);
  let strAnswer =
    str.charAt(str.length - 1) + allCharExceptFirstLast + str.charAt(0);
  console.log(strAnswer);
} else if (str.length === 1) {
  console.log(str);
} else {
  console.log("String must be greater than or equal to 1.");
}
