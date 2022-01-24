//20) Write a JavaScript function to split a string and convert it into an array of words.(“RAJ SHAH”)->[“RAJ”,”SHAH”]

const covertStringToArray = (str) => {
  const splittedString = str.split(" ");
  return splittedString;
};

const str = "Adarsh Kumar Maheshwari";
const answer = ([], covertStringToArray(str));
console.log(answer);
