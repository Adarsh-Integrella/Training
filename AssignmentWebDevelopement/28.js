//28) Write a function called displayObject() that takes an object as an argument and prints the person's first and last name.
//Use object destructuring in the function argument. And also, use template strings when printing the first and last name

const displayObject = ({ firstName: fn, LastName: ln }) => {
  console.log(`First name is ${fn}`);
  console.log(`Last name is ${ln}`);
};

const human = {
  firstName: "Adarsh Kumar",
  LastName: "Maheshwari",
};

displayObject(human);
