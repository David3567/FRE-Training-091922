/**
 * @class
 * what is javascript, ECMAScript, ES2015, ES6
 * javascript vs. nodejs vs. ECMAScript
 *
 * Primitive Data
 * Object Data or reference Data
 //* string, number, boolean, undefined, null, symbol
 *
 * coercion
 * equality == vs. ===
 *
 * var vs. let vs. const
 *
 * oop: Object oriented programming in JS
 * encapsulation; inheritance; Poly-morph-ism; abstraction;
 * constructer function, prototype chain
 */

// var num = 1; // number
// var num1 = num;
// var str = 'test'; // string
// var boo = true; // boolean
// var und = undefined;
// console.log(typeof null);
// transfer by value;

// var obj = {
//   name: 'Jojo'
// };
// var obj1 = obj; // shallow copy
// obj1.name = 'Dio';

// console.log(obj);
// function foo() {
//   num = 7;
// }
// foo();
// console.log(num);

// function foo(val) {
//   val.name = 'Dio';
// }
// foo(obj);
// console.log(obj.name);

//* coercion
//* equality == vs. ===

// console.log(1 - false); // 1
// console.log(undefined == null); //coercion
// console.log(typeof 1 + ''); //

// var num = 753245; // 542357
// var numreverse = +(num + '').split('').reverse().join('');
// console.log(typeof numreverse);

// console.log(NaN == NaN);
// if (NaN) {
//   console.log('inside if');
// }
// console.log((12).toString());

//* var vs. let vs. const vs. function
// scope function, block

// "use strict"
// num = 0;
// console.log();

// "use strict"
// function foo() {
// help = undefined;
// console.log(help);
// help = 100;
// console.log(this);
// }
// foo();
// console.log(global);
// console.log(this);

// var help = 4;
// console.log(window.help);

// console.log(foo());

// if (true) {
// 	function foo() {
// 		return 4;
// 	}
// }

// let num = 0;
// const url = 'http://localhost:3000'
// let obj = {
//   name: 'Jojo'
// };
// obj.name = 'Dio';

// mutable vs. immutable
// obj = {
//   name: 'Dio'
// }

//* oop: Object oriented programming in JS
//* encapsulation; inheritance; Poly-morph-ism; abstraction;

// class Person {
// 	#name = "Jojo";
// 	#age = 19;

// 	get name() {
// 		console.log("iam a getter");
// 		return this.#name;
// 	}
// 	set name(newname) {
// 		this.#age = 90;
// 		this.#name = newname;
// 	}

// 	constructor(name, age) {
// 		this.#name = name;
// 		this.#age = age;
// 	}

// 	printName() {
// 		console.log(this.name);
// 	}
// }
// const p = new Person("Dio", 200);
// console.log(p);

// p.name = "hello";



// class Employee extends Person {
//   constructor(name, age, company) {
//     super(name, age);
//     this.company = company;
//   }

//   printCompany() {
//     console.log(this.company);
//   }
// }

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
// Person.prototype.printName = function () {
// 	console.log(this.name);
// };

// function Employee(name, age, company) {
// 	Person.call(this, name, age);
// 	this.company = company;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.printCompany = function () {
// 	console.log(this.company);
// };

// const e = new Employee("David", 400, "Antra");
// console.log(e);
// e.printName();
// e.printCompany();

// Array.prototype.myForEach = function
