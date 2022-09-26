console.clear();
/**
 * @class ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Day1
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
// var numreverse = +[...(num + '')].reverse().join('');
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

/**
 * @class ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Day2
 * loop in JS: array, object
 * MyForeach, MyMap, MyFilter, MyReduce
 *
 * destructure
 *
 * rest parameter vs. spread operator
 *
 * object copy
 */

// //* destructure
// const {name, EmployeeIdInAntra: id} = {
//   name: 'Jojo',
//   EmployeeIdInAntra: 'front'
// };
// // const arr = ['hello', 1, true]
// const {h, num, boo} = arr;

// console.log(boo);
// console.log(id);

//* rest parameter vs. spread operator
// const arr = [1, 2, 4];
// const arrcopy = [0, ...arr, 5];
// let obj = {
//   name: 'Jojo',
//   age: 12
// };
// obj = {
//   ...obj,
//   company: 'Antra'
// };

// console.log(obj);
// console.log(arrcopy);

// const arr = [...'abcd'];

// function foo(num, ...args) {
//   console.log(args);
// }
// foo(1, 2, 3, 4, 5, true, 'hello');

// function foo(...args) {
//   return 1 + 2 + a + b + c + d + e;
// }
// function bar(a, b) {
//   return 67 + a;
// }
// function sameAsFoo(cb) {
//   return function(...args) { // rest
//     // console.log(cb);
//     return cb(...args) // spread
//   }
// }
// const sf = sameAsFoo(bar);
// console.log(sf(1));

//highorder function; curring

// const arr = [1, 2, 3];

// const tar = function(n) {

// return function(num) {
//     console.log(num + n);
//   } [n]

// }
// arr.forEach(tar(10));

// function foo() {
//   return 5;
// }

// const target = function (a, b) {
// 	console.log(a + b);
// };
// const target1 = function (a, b, c) {
// 	console.log(a + b * c);
// };
// const fn = limitedFn(4, target1);

// fn(2, 3, 0); // 5            [num: 1]
// fn(4, 5, 6); // 9            [limite: 2]
// fn(2, 5, 7); // over limited [limite: 3]
// fn(4, 7, 4); // over limited
// fn(3, 5, 5); // over limited
// fn(4, 6, 3); // over limited

// /*
//   @param [number, function] num, cb
//   @return [function]
// */
// function limitedFn(num, cb) {
// 	// let limit = -1;

// 	return function (...args) {

// 		if (num-- > 0) {
// 			return cb(...args);
// 		} else {
// 			console.log("Over Limit");
// 		}
// 	};
// }

// * loop in JS: array, object

// // console.log(arr['0']);

// for (let i = 0; i < arr.length; i++) {
//   break;
//   console.log(arr[i]);
// }
// const obj = {
// 	name: "Jojo",
// 	age: 18,
// };

// Object.entries(obj).forEach(([key, val]) => {
// 	console.log(key, val);
// });

// // obj.name
// // obj['name']
// for (const val in obj) {
// 	console.log(obj[val]);
// }
// for (const i in arr) {
//   console.log(arr[i]);
// }
// for (let ele of arr) {
//   console.log(ele);
// }
// const arr = new Array(41, 21, 35);

// Array.prototype.myReduce = function (...args) {
//   console.log(args);
// 	let [acc, index] = args.length === 1
//     ? [this[0], 1]
//     : [args[1], 0];

// 	for (let i = index; i < this.length; i++) {
// 		acc = args[0](acc, this[i], i, this);
// 	}
// 	return acc;
// };

// const numbers = [175, 50, 25];
// const res = numbers.myReduce((acc, cur) => {
//   return acc - cur;
// });
// console.log(res);

// console.log(
//   arr.reduce(function (ele, i, self) {
//     return ele > 40;
//   })
// );

// const str = 'abc';
// // ['a', 'b', 'c']
// console.log([...str].myReduce((acc, ele) => acc + ele + ele, '')); // 'aabbcc';
// //'' + 'a' + 'a' = 'aa' + b + b = aabb + c + c = aabbcc

// function foo(arr) {
// 	return arr.myReduce(
// 		(acc, cur) => ({ ...acc, [cur.name]: cur.age }),
// 		{}
// 	);
// 	// return arr.reduce((acc, cur) => {
// 	//   acc[cur.name] = cur.age;
// 	//   return acc;
// 	// }, {});
// 	// const obj = {};
// 	// for (let ele of arr) {
// 	//   obj[ele.name] = ele.age;
// 	// }
// 	// return obj;
// }
// const arr = [
// 	{ name: "TT", age: 12 },
// 	{ name: "DD", age: 32 },
// 	{ name: "RR", age: 82 },
// ];
// console.log(foo(arr));
// console.log({
// 	TT: 12,
// 	DD: 32,
// 	RR: 82,
// });

// console.log(arr);

// Array.prototype.myForEach = function (cb) {
// 	for (let i = 0; i < this.length; i++) {
// 		cb(this[i], i, this);
// 	}
// };
// Array.prototype.myMap = function (cb) {
//   const map = [];
// 	for (let i = 0; i < this.length; i++) {
// 		map.push(cb(this[i], i, this));
// 	}
//   return map;
// };
// Array.prototype.myFilter = function (cb) {
//   const map = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if(cb(this[i], i, this)) {
//       map.push(this[i]);
//     }
// 	}
//   return map;
// };

/** @class
 * iife
 * closure
 * currying
 *
 * this
 * call, apply, bind
 *
 * arrow function
 *
 * event loop
 */

