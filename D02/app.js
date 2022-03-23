//null - reference to something that does not exist;
let username = null;

//undefined - a variable that has not been assigned
let age;

//strings
//declaration
let email = "baraka@exammple.com";
let message = "Hello, there";

//concatenation
let greeting = "Hello " + " There";
console.log(greeting);

//length
let lengthOfEmail = email.length;
console.log(lengthOfEmail);

//getting characters

let lang = "PYTHON";
console.log(lang[3]);
console.log(lang[lang.length - 1]);

let ucName = lang.toUpperCase();
let lcName = lang.toLowerCase();

let name1 = "Jack of all trades";
let name2 = name1.slice(4, 9);

console.log(name1);
console.log(name2);

//template string

let firstName = "Dwayne";

let sentence = `
Hello how are you ${firstName} 
${90 + 100}
`;
console.log(sentence);

let myApp = `
<div>
<h1>Hello I am Who ${firstName}</h1>
</div>
`;
document.write(myApp);

//string methods

/**
 * uppercase
 * length
 * indexOF
 * slice
 * substr
 * replace
 *
 */

//operators
/**
 * + - * ** / %
 */

//PEMDAS

//Type conversion
//type checking

//template strings -html

let a = 10;
let b = 34;

//addition
let sum = a + b;
console.log(sum);

//subtraction
let diff = a - b;
console.log(diff);

//multiplication
let product = a * b;
console.log(product);

//division
let result = a / b;
console.log(result);

//exponential
let exp = a ** b;
console.log(exp);

// modulus - remainder operator
let rem = a % b;
console.log(rem);

let userAge = prompt("What is your age? ");
console.log(userAge);

//write a program that asks the user to enter their age and outputs the year they were born in
