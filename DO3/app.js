// comparisons
let a = 7;
let b = 6;

//gt
console.log("----gt----");
console.log(a > b);

//gte
console.log("----gte----");
console.log(a >= b);

//lt
console.log("----lt----");
console.log(a < b);

//lte
console.log("----lte----");
console.log(a <= b);

//eq
console.log("----eq----");
console.log(a == b);

//identical (strict equality)
console.log("----seq----");
console.log(a === b);

//conditional statements -- you cna be able to execute a certain block of code based on a condition (if)

/**
 * 
 if(condition){
  //this block of code will run only if the condition is truthy.
}
 */

let x = 50;
let y = 10;

if (x < y) {
  alert("Red");
} else {
  alert("Black");
}

let username = "baraka";
let password = "123Asd";

let usernameInput = prompt("Enter username");

// if (usernameInput == username) {
//   alert("You are correct, Enter the password");

//   //nested if

// } else {
//   alert("Wrong username please try again");
// }

// let passwordInput = prompt("Enter password");

// if (passwordInput == password) {
//   alert("Welcome ON BOARD");
// } else {
//   alert("Wrong password please try again");
// }

//if less than 18 - price 15
// if 18 and 35 - price = 20
// if above 35 - price = 50

let age = 10;
let price;

if (age < 18) {
  price = 15;
} else if (age < 35) {
  price = 20;
} else {
  price = 50;
}

//TASKS
