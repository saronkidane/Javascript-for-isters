/**
 * Iteration and loops
 * --perform repetitive tasks
 * while loop
 * do while
 * for loop
 */

// start, condition , terminating statement
let i = 1;

while (i <= 10) {
	console.log(i);
	i = i + 1;
}

let j = 1;
while (j <= 10) {
	document.write('<img src="img.jpg" alt="" width="200px" height="200px" />');
	j++;
}

//for loop
for (let i = 0; i < 10; i++) {
	console.log(i);
}

for (let j = 1; j <= 10; j++) {
	document.write('<img src="img.jpg" alt="" width="200px" height="200px" />');
}

//using a for loop, the modulus operator, a comparison operator and if statements write a for loop to log on the console even numbers between 0 and 100
for (let i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

//write a program that iterates from 0 to 100 and
//1. if a number is divisible by 3 output "Fizz"
//2. if a number is divisible by 5 output "Buzz"
//3. if a number is divisible by both 5 and 3 output "FizzBuzz"
//4. if its divisible by neither output the number

for (let x = 1; x < 100; x++) {
	if (x % 5 == 0 && x % 3 == 0) {
		console.log("FizzBuzz");
	} else if (x % 5 == 0) {
		console.log("Buzz");
	} else if (x % 3 == 0) {
		console.log("Fizz");
	} else {
		console.log(x);
	}
}
//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

//The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

//Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

//do while  -
let v = 20;
do {
	console.log(v);
	v++;
} while (v <= 10);

let numberInput;

do {
	numberInput = prompt("Enter a number greater than 100 ", 0);
} while (numberInput <= 100 && numberInput);

//Bonus - Write a js program to find prime numbers
//Solution Day 05
let num;

do {
	num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//do while
let x = 20;
do {
	console.log(x);
	x++;
} while (x < 10);

//break -- break the loop
for (let i = 0; i <= 100; i++) {
	if (i > 50) {
		break;
	} else {
		console.log(i);
	}
}

//continue -- skip current iteration
for (let i = 0; i <= 5; i++) {
	if (i == 3) {
		continue;
	}
	console.log(i);
}

//ex2
for (let i = 0; i <= 100; i++) {
	if (i % 2 == 1) {
		continue;
	}
	console.log(i);
}
