let user1 = {
	username: "jack",
	pwd: "123Asd",
};
let user2 = {
	username: "jane",
	pwd: "Asd123",
};
//CLASS - blueprint from which objects are derived

//defining a class
class User {
	//special method - constructor - this will be invoked when ypu create a new object (instance)
	constructor(username, password) {
		this.username = username;
		this.password = password;
	}
}
let jamie = new User("jamie", "23761237623");
let em = new User("emmen", "f8761237623");

console.log(em, jamie);
//define a class called animal that has two properties name and canJump
//create two instances of the animal class
class Animal {
	//special method - constructor - this will be invoked when ypu create a new object (instance)
	constructor(name, canJump) {
		this.name = name;
		this.canJump = canJump;
	}
}
let dog = new Animal("jamie", true);
let pig = new Animal("emmen", false);
console.log(dog, pig);

//with relevant examples illustrate how the concepts of methods and inheritance are applied using classes  in object oriented programming with javascript
