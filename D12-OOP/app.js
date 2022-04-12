

//CLASSES
//In object oriented programming, a class is an extensible program-code template for creating objects, providing initial values for state(member variables -properties) and implementations of behavior (member functions - methods)
//it is a blue print for creating objects

//DRY
let user1 = {
  username: "mercy",
  password: "1231",
};
let user2 = {
  username: "Jack",
  password: "1231",
};

//definition a class
class User {
  //constructor method - special method -this gets invoked when you create an instance of class (User)
  constructor(username, password) {
    //refers to the created instance
    this.username = username;
    this.password = password;
  }
  //instance methods
  login() {
    console.log(`${this.username} has logged in`);
  }

  logout() {
    console.log(`${this.username} has logged out`);
  }

  sayHi(message) {
    console.log(`${this.username} says ${message} `);
  }
}

//instance
let youngHomie = new User("youngHomie", "@3eu43");
let beryl = new User("beryl67", "4732");

console.log(youngHomie);
console.log(beryl);
console.log(youngHomie.username);
console.log(beryl.username);

//this keyword refers to the object before the dot
youngHomie.login();
beryl.login();

youngHomie.sayHi("Habari yako");
beryl.sayHi("Bon appetit");

youngHomie.logout();
beryl.logout();

//inheritance - is a way of one class to extend functionality and properties from another class

class Student extends User {
  constructor(username, password, studentID) {
    super(username, password);
    this.studentID = studentID;
  }
  takeTest() {
    console.log(`${this.username} is taking a test`);
  }
}
let mercy = new Student("mercy33", "dwjdwh", 782);

class Trainer extends User {
  constructor(username, password, employeeID) {
    super(username, password);
    this.studentID = employeeID;
  }

  setTest() {
    console.log(`${this.username} is setting a test`);
  }
}
let baraka = new Trainer("baraka", "76543", 984387);

mercy.login();
mercy.sayHi("Hello there");
mercy.logout();
mercy.takeTest();

baraka.login();
baraka.sayHi("Hello there");
baraka.logout();
baraka.setTest();
