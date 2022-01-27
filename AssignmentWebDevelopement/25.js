// 25) Write a JavaScript function to extract unique characters from a string

const getUnqiueCharacters = (str) => {
  let hashTable = "";
  for (let i = 0; i < str.length; i++) {
    if (hashTable.indexOf(str.charAt(i)) == -1) {
      hashTable += str[i];
    }
  }
  return hashTable;
};

const str = "association";
const answer = ([], getUnqiueCharacters(str));
console.log(answer);
