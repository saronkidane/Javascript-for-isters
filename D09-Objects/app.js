//objects
//key valued pairs (OOP)
/**
 * primitive data types
 * strings/numbers/null/undefined/boolean
 * objects are none-primitive
 */
//declare an object
let user = {
	name: "baraka mulumia",
	email: "barakamulumia@gmail.com",
	age: 23,
	likes: ["coding", "dancing", "learning"],
};
console.log(user);

//declare an object named student with properties studentID and course set to 782 and Full Stack respectively
let student = {
	studentID: 782,
	course: "Full stack",
	"hello there i am a property": 89,
};

//access properties of an object
console.log(student.studentID); // dot notation
console.log(student["studentID"]); // square bracket notation

//change the value
student.studentID = 8494;

//delete a property
delete student.studentID;

//methods - functions inside objects
let john = {
	fullName: "John the great",
	username: "john5472",
	phoneNo: 378259,
	login: function () {
		console.log("Has Logged in");
	},
	login2: () => {
		console.log("Has Logged in");
	},
	signUp() {
		console.log(this.fullName + " Has Logged in");
	},
	sendMessage() {
		console.log(`Message sent to ${this.phoneNo}`);
	},
};
//calling a method
john.sendMessage();

//create an object called animal that has a method named jump which logs on the console `I can jump`

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function sumSalaries(obj) {
	let total = 0;
	for (const key in obj) {
		total += obj[key];
	}
	return total;
}
sumSalaries(salaries);
