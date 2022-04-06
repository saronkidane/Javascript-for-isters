//A deeper dive into functions

//define (declare functions)
function showMessage() {
	alert("Hello Everyone!!!");
}

//call the function (execute/invoke)
showMessage();

//Scope - local and global variables

let age = 78; // global variable

function displayAge() {
	let age = 67; //local variable
	alert(age); //67
}
alert(age); //78
displayAge();

// parameters and arguments -
// you can have a default value
function sayHi(name = "Jayson") {
	alert(`${name} says hello`);
}

sayHi();
sayHi("Jack");

//write a function greetings that takes in two inputs [from, text] then displays an alert showing "text from"
//greetings("ann", "Hello")
// => hello ann
function greetings(from, text) {
	alert(`${text}, ${from}`);
}

greetings("ann", "hello");

//return statement
function add(a, b) {
	//the result of running this function
	return a + b;
}
let sum = add(4, 5);
console.log(sum);

//example 2

//Infinity is a number
// -Infinity
checkAge(78);

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return false;
	}
}

//function expressions
let sayHello = function (name) {
	alert(name);
};
sayHello();

//Arrow functions
function add(a, b) {
	return a + b;
}

//arrow function
const addTwo = (a, b) => a + b;

const checkAge2 = (age) => {
	if (age > 18) {
		return true;
	} else {
		return false;
	}
};
const checkAge3 = (age) => (age > 18 ? true : false);

function greetings(from, text) {
	alert(`${text}, ${from}`);
}
const greetings2 = (from, text) => {
	alert(`${text}, ${from}`);
};

//
