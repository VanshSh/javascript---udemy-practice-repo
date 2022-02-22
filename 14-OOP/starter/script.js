'use strict';
// console.log('Hello World');

// const Person = function (fullName, age) {
//   this.name = fullName;
//   this.age = age;
// };
// const vansh = new Person('Vansh Sharma', 22);
// const mohit = new Person('Mohit Jain', 21);
// console.log(vansh instanceof Person);

// Person.prototype.DOBYear = function () {
//   console.log(this.name, 2022 - this.age);
// };
// mohit.DOBYear();
// vansh.DOBYear();

// console.log(vansh.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(vansh));

// Person.prototype.species = 'Homo Sapiens';

// console.log(vansh.species);
// console.log(vansh.hasOwnProperty('name'));
// console.log(vansh.hasOwnProperty('species'));

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// const arr= [1,2,3,4,5,1,2,5,4,3,9,8,7,7,6,4]

// console.log(arr.unique())

//  Challenge

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
//     'speed' property. The 'speed' property is the current speed of the car in
//     km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
//     and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
//     the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
//     'brake' multiple times on each of them

// **Test data:**

// ```
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// ```

//  Solution

// const Car = function (make, speed) {
//   this.builtYear = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.builtYear} going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.builtYear} going at ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.brake();

////////////  ES6 Classes //////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Methods
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   get age() {
//     return `${this.firstName} is ${2022 - this.birthYear} years old`;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else console.log('Invalid name');
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   //  Static
//   static hey(name) {
//     console.log('Hello ' + this.name);
//   }
// }

// PersonCl.prototype.greeting = function () {
//   console.log(`Hello ${this.firstName}`);
// };

// PersonCl.hey('Vansh');
// const vansh = new PersonCl('Vansh Sharma', 22);

//  Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   initialValues(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   },
// };

// const vansh = Object.create(PersonProto);
// vansh.initialValues('Vansh Sharma', 22);
// vansh.calcAge();
// console.log(vansh);

//  Challenge 2

// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
//     by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
//     converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
//     methods, and with the getter and setter.

// console.log('Challenge 2');

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed}`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6 + ' mi/h';
//   }

//   set speedUS(speed) {
//     return this.speed * 1.6 + ' km/h';
//   }
// }

// const car1 = new CarCl('BMW', 120);
// console.log(car1.speedUS);
// car1.accelerate();
// car1.brake();
// car1.speedUS = 50;
// console.log(car1);

//  Inheritance b/w calsses: COnstructor function
// console.log('Lesson  ');
// const PersonCl = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// PersonCl.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   //  Repeating
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   PersonCl.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(PersonCl.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const vanshStudent = new Student('Vansh', 22, 'Web Development');
// console.log(vanshStudent);
// vanshStudent.calcAge();

// ### Coding Challenge #3

// **Your tasks:**

// 1. Use a constructor function to implement an Electric Car (called 'EV') as a **child**
//     **"class"** of 'Car'. Besides a make and current speed, the 'EV' also has the
//     current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
//     'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
//     and decrease the charge by 1%. Then log a message like this: _'Tesla going at 140_
//     _km/h, with a charge of 22%'_
// 4. Create an electric car object and experiment with calling 'accelerate',
//     'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
//     you 'accelerate'! **Hint:** Review the definiton of polymorphism 😉

// **Test data:**

// ```
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// ```
// #### GOOD LUCK 😀

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// //  Link prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery()

// Inheritance b/w classes: ES6 classes////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduction() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I am ${2022 - this.birthYear} years old but as a student I feel like ${
//         2022 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const vansh = new StudentCl('Vansh Sharma', 22, 'Web Development');
// console.log(vansh);
// vansh.calcAge();
// vansh.introduction();
// vansh.calcAge()

//  Inheritance b/w classes: Object.create()

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study in ${this.course}`);
// };

// const vansh = Object.create(StudentProto);
// console.log(vansh);
// vansh.init('Vansh', 22, 'Web Development');
// vansh.introduce();
// vansh.calcAge()

//  Another example of Classes

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     //  Protected property
//     this._movements = [];
//     this.locale = navigator.language;
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
// }

// const acc1 = new Account('Vansh', 'INR', 1234);
// acc1.deposit(1000);
// acc1.withdraw(500);
// console.log(acc1);

//  Private, Public, Protected classes and methods

class Account {
  //  Public fileds
  locale = navigator.language;

  //  Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan granted');
    }
  }
}

const acc1 = new Account('Vansh', 'INR', 1234);
// console.log(acc1.#movements);  // Truly private
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1.locale);