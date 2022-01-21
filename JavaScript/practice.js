// console.log("hello world!");

//"use strict";
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable

// var firstName = "Harshit";

// // use a variable
// console.log(firstName);

// // change value

// firstName = "Mohit";

// console.log(firstName);
//---------------------------------------------
// String indexing

// let firstName = "adarshsdfsdfskj";

// //  h    a   r   s   h   i   t
// //  0    1   2   3   4   5   6

// // console.log(firstName[0]);
// // length of string
// // firstName.length

// console.log(firstName.length);

// console.log(firstName[firstName.length-2]);

// last Index : length - 1
//---------------------------------------------------

// trim()
// toUpperCase()
// toLowerCase()
// slice()

// let firstName = "harshit";

// // console.log(firstName.length);
// // firstName = firstName.trim(); // "harshit"
// // console.log(firstName)
// // console.log(firstName.length);
// // firstName = firstName.toUpperCase();
// // firstName = firstName.toLowerCase();
// // console.log(firstName);

// // start index
// // end index

// let newString = firstName.slice(1); // hars
// console.log(newString);
//----------------------------------------------

// string concatenation

// let string1 = "17";
// let string2 = "10";

// let newString = +string1 + +string2;
// console.log(typeof newString);

//------------------------------------------------

// template string
// let age = 22;
// let firstName = "harshit"

// // "my name is harshit and my age is 22 "
// // let aboutMe = "my name is " + firstName + " and my age is " + age;

// let aboutMe = `my name is ${firstName} and my age is ${age}`

// console.log(aboutMe);

//--------------------------------------------

// undefined
// null

// let firstName;
// console.log(typeof firstName);
// firstName = "Harshit";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);
// bug , error

// BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// // console.log(myNumber);
// // console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);

//--------------------------------------------

// booleans & comparison operator

// booleans
// true, false

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs ===
// console.log(num1 === num2);

// != vs !==

// console.log(num1 !== num2);

//-----------------------------------------------

// if else condition

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values

// false
// ""
// null
// undefined
// 0

// truthy
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }

// ------------------------------------------------

// ternary operator

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// -----------------------------------------------

// and  or operator

// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
// let firstName = "arshit";
// let age = 16;

// if(firstName[0] === "H" || age>18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }

// -----------------------------------------------

// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }

///-------------------------------------------------

// if
// else if
// else if
// else if
// else

// let tempInDegree = 50;

// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello");

// let tempInDegree = 50;

// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello there");

// let tempInDegree = 4;

// if(tempInDegree > 40){
//     console.log("too hot");
// }else if(tempInDegree > 30){
//     console.log("lets go for swim");
// }else if(tempInDegree > 20){
//     console.log("weather is cool");
// }else if(tempInDegree > 10){
//     console.log("it is very cold outside");
// }else{
//     console.log("extremely cold");
// }

// console.log("hello");

//------------------------------------------------------

// switch statement

// let day = 7;

// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }

// let day = 9;

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

///--------------------------------------------------

// intro to arrays
// reference type
// how to create arrays

// ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
// let fruits = ["apple", "mango", "grapes"];
// let obj = {}; // object literal
// // console.log(fruits);
// // fruits[1] = "banana";
// // console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

// array indexing

///-------------------------------------------------

// array push pop

// array shift unshift

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// push
// fruits.push("banana");
// console.log(fruits);
// pop
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

// unshift
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);

// ------------------------------------------

// primitve vs reference data types
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);

// reference types
// array
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1", array1);
// console.log("array2", array2);

// ----------------------------------------

// how to clone array

// how to concatenate two arrays

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way
// spread operator
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];

// array1.push("item3");

// console.log(array1===array2);
// console.log(array1)
// console.log(array2)

// ----------------------------------------------
// for loop in array

// let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
// let fruits2 = [];
// for(let i=0; i < fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);

//----------------------------------------------------

// // array destructuring
// const myArray = ["value1", "value2", "value3","value4"];
// // let myvar1 = myArray[0];
// // let myvar2 = myArray[1];
// // console.log("value of myvar1", myvar1);
// // console.log("value of myvar2", myvar2);
// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);

// -----------------------------------------------------

//Object

// const person ={
//     name:"Adarsh",
//     age:24,
//     hobbies:["guitar", "sleeping"]
// }
// console.log(person.hobbies[0]);

// --------------------------------------------------

// //computed properties
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "objValue1";
// const value2 = "objValue2";

// const obj = {

// }
// obj[key1]=value1;
// obj[key2]=value2;

// console.log(obj);

// --------------------------------------------------

//////////////////////////// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//   };
//   const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4",
//   };

// const newObject = { ...obj2, ...obj1, key69: "value69" };
//   const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
//   console.log(newObject);

// ----------------------------------------------------------------

/////////////////////////// object destructuring
// const band={
//     bandName: "nhi batauga",
//     famousSong: "nhi pata",
//     year:2009,
// }

// const {bandName, famousSong, ...restProps}=band;
// console.log(bandName);
// console.log(restProps);

// -----------------------------------------------------------
// Object inside array

// const user = [
//     {userId: 1, firstName: 'raj', gender:'male'},
//     {userId: 2, firstName: 'saaj', gender:'male'},
//     {userId: 3, firstName: 'fraaj', gender:'male'},
// ]
// for(let x of user)
// {
//     console.log(x.userId);
// }
// const [user1, {gender}, user3]=user;
// console.log(user1);

// -----------------------------------------------------------

//Function
////function decleration
// function myFirstfunction() {
//   console.log("function one called");
// }
// ///function expression
// const mySecondfunction = function () {
//   console.log("Second function called");
// };

// //Arrow function
// const myThirdFunction = () => {
//   console.log("Third function called");
// };

// const isEven = function (number) {
//   return number % 2 === 0;
// };

// //now in arrow function
// const isEvenArrow = (number) => number % 2 === 0;

// console.log(isEvenArrow(2));
// myFirstfunction();
// mySecondfunction();
// myThirdFunction();

//-----------------------------------------------------------

//// Hoisting

/// -----------------------------------------------------------

///////Functions inside functions

// const app = () => {
//   const myFunction = () => {
//     console.log("second function");
//   };
//   const myFunction2 = () => {
//     console.log("third function");
//   };
//   console.log("inside");
//   myFunction();
//   myFunction2();
// }
// app();

//-----------------------------------------------------------

//Rest parameter

// function myFunc (a,b, ...c)
// {
//     console.log(a,b,c);
// }
// myFunc(1,2,3,4,5,6,7,);

//-----------------------------------------------------------
//Parameter destructuring

//object

// const person ={
//     firstName: "adarsh",
//     gender: "Male",
// }

// function printDetails(obj)
// {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person);

// ////////now destructured version
// function printDetails({firstName,gender})
// {
//     console.log(firstName);
//     console.log(gender);
// }

//-----------------------------------------------------------

//////Function returning function

// function myfunc() {
//   return myfunc2();
// }
// function myfunc2() {
//     console.log("myfunc2");
// }
// myfunc();

//-----------------------------------------------------------
/////.   ASYNC ************************************

//settime

// setTimeout(()=>{
//     console.log("output aaya hai");
// }, 5000)

//-----------------------------------------------------------
/// Callback function

// function myFunc()
// {
//     console.log("my func called");
// }
// function myfunc2(callback)
// {
//     callback();
// }
// myfunc2(myFunc);

// callback builds the relationship like parent, child, grand child

//-----------------------------------------------------------
//////////////////// Search Methods
// String indexOf()
// String lastIndexOf()
// String startsWith()
// String endsWith()

// let str = "Please locate where 'locate' occurs!";
// console.log(str.indexOf("locate"));
// console.log(str.lastIndexOf("locate"));
// console.log(str.indexOf("locaate"));
// console.log(str.search("locate"));
// console.log(str.match(/please/i));
// console.log(str.includes("occurs"));
// console.log(str.startsWith("Please"));

//-----------------------------------------------------------

// const points = [40, 100, 1, 5, 25, 10];
// pointsGet = (()=> {
//     let maxi=0;
//     for(let x of points){
//         maxi = Math.max(maxi, x);
//     }
//     console.log(maxi);
// });
// pointsGet();
//console.log(points);
// -------------------------------------------------------

// const d=new Date();
// console.log(d.getFullYear())

// Create a Set
// const letters = new Set();

// // Create Variables
// const a = "a";
// const b = "b";
// const c = "c";

// Add Variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);
// letters.add(a);
// letters.add(b);
// letters.add(c);
// letters.add(a);
// letters.add(b);
// letters.add(c);

// letters.forEach(function(value){
//     console.log(value);
// })

// ------------------------------------------------------
// // Errors handling
// let x = 50;
// try {
//   if (x == "") throw "empty";
//   if (isNaN(x)) throw "not a number";
//   x = Number(x);
//   if (x < 5) throw "too low";
//   if (x > 10) throw "too high";
// } catch (err) {
//   console.log(err.message);
// }finally{
//     console.log("me aise he print ho rha hu")
// }

// ------------------------------------------------------
///////////. Hoisting

// var x = 5; // Initialize x
// var y = 7; // Initialize y

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// var x = 5; // Initialize x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// var y = 7; // Initialize y

///-----------------------------------------------------------
///OOPS

// class car{
//     constructor(model, year)
//     {
//         this.model=model;
//         this.year=year;
//     }
//     howOld(){
//         let date= new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let myCar = new car("Ford mustang", 2019);
// console.log(`${myCar.howOld()} years old`);

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }

//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }

//   let myCar = new Model("Ford", "Mustang");
//   console.log(myCar.show());

///-----------------------------------------------------------

//////javascript to json

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//  let yehDekho = JSON.stringify(person);
//  console.log(yehDekho)

///-----------------------------------------------------------

//CALLBACK
// function functionOne(para)
// {
//     console.log(`Here is the sum : ${para}`);
// }
// function Secondfunction(num1, num2, callBack)
// {
//     let num=num1+num2;
//     callBack(num);
// }
// Secondfunction(10, 40, functionOne);

///-----------------------------------------------------------
// Promises

// function myDisplayer(some) {
//     console.log(some);
//   }

//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 1;

//   // The producing code (this may take some time)

//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });

//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

//****************/

// 3 states : Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Resolved successfully!");
//   } else {
//     reject("No! rejected the promise.");
//   }
// });
// console.log(myPromise);
// myPromise
//   .then((value) => {
//     return value;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("myNext Promise resolved");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });
// myPromise.then((value) => {
//   console.log(value);
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

//Async / Await

// const myUsers = {
//   userList: [],
// };
// const myfunction = async () => {
//   const Response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await Response.json();
//   return jsonUserData;
// };

// const returnJson = async () => {
//   const data = await myfunction();
//   myUsers.userList = data;
// };
// returnJson();
// console.log(myUsers.userList);

//************************ */
// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// ----------------- Examples
//Example 1

// const getAllUserEmail = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const userDataJson = await response.json();
//   const emailArrayOfUsers = userDataJson.map((user) => {
//     return user.email;
//   });

//   console.log(emailArrayOfUsers);
//   return emailArrayOfUsers;
// };
// getAllUserEmail();

//Example 2
// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const jsonJoke = await response.json();
//   console.log(jsonJoke.joke);
// };
// getDadJoke();
