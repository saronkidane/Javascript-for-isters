let role = prompt("user role");

if (role == "admin") {
	console.log(101);
} else if (role == "student") {
	console.log(301);
} else if (role == "trainer") {
	console.log(406);
} else if (role == "faculty") {
	console.log(109);
} else {
	console.log(0);
}

//switch statement

switch (role) {
	case "admin":
		console.log(101);
		break;
	case "student":
		console.log(301);
		break;
	case "trainer":
		console.log(406);
		break;
	case "faculty":
		console.log(109);
		break;
	default:
		console.log(0);
}

// logical operators
//and operator (&&) - evaluates to true if all statements evaluate to true. if any of the statements is false the whole equation is false.

let age = 15;

if (age > 18 && age <= 35) {
	console.log("PASS");
}
let username = "baraka";
let password = "123Asd";
let usernameInput = prompt("Enter username");
let passwordInput = prompt("Enter Password");

if (usernameInput === username && passwordInput === password) {
	alert("Authenticated");
} else {
	alert("Something went wrong Please try again");
}

//or operator (||)
//evaluates to true if any of the statements is true, if all statements are false it will evaluate to false.
age = 15;
let hasParentalPermission = true;
if (age > 18 || hasParentalPermission) {
	alert("You are allowed");
} else {
	alert("Seek parental permission");
}

//Write a javascript program to process loans based on the following scenarios
//1. an applicant is eligible for a loan if they have a good credit score and high income
//2. an applicant is eligible for a loan if they have a good credit and do not have a criminal record
//3. an applicant is eligible for a loan if they have a good credit score or high income
//Not  (!) - negates(flips) the current value
let hasGoodCreditScore = true;
let hasCriminalRecord = false;
let hasHighIncome = true;
//1
if (hasGoodCreditScore && !hasCriminalRecord) {
	console.log("Eligible for a loan");
} else {
	console.log("NOT Eligible for a loan");
}

//1
if (hasGoodCreditScore && hasHighIncome) {
	console.log("Eligible for a loan");
} else {
	console.log("NOT Eligible for a loan");
}

//3
if (hasGoodCreditScore || hasHighIncome) {
	console.log("Eligible for a loan");
} else {
	console.log("NOT Eligible for a loan");
}

//Tenary operator (?)
if (age > 18) {
	console.log("Allowed");
} else {
	console.log("Not Allowed");
}

age > 18 ? console.log("Allowed") : console.log("Not Allowed");

//Re write the switch statement to use tenary operators
