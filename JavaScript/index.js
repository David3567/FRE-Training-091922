// console.clear();
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
// super(name, age);
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
// 	Person.apply(this, [name, age]);
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

/** @class ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Day3
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

//^ ~~~~~~interview question~~~~~~~~~~~~
// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan' }
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];

// function mergeList(...args) {
//     let arr = []
//     for(let i=0; i < args.length; i++){
//         arr.push(...args[i])
//     }
//     const map = {};
//     arr.forEach(ele => {
//       map[ele.userid] = {
//         ...{userid: null, name: null, role: null},
//         ...map[ele.userid],
//         ...ele,
//       }
//     });
//     return Object.values(map);

// let m = new Map();

// for(let i=0; i < arr.length; i++){
//     if(m.has(arr[i].userid)) {
//       m.set(arr[i].userid, {
//         ...m.get(arr[i].userid),
//         ...arr[i]
//       })
//     } else {
//       m.set(arr[i].userid, {
//         ...{userid: null, name: null, role: null},
//         ...arr[i]
//       })
//     }
// }
// return Array.from(m.values());
// }
// {
//   2: { userid: 2, name: 'Velen' },
// }

// console.log(mergeList(first, second));
// [
//   { userid: 2, name: 'Velen', role: 'Mage' },
//   { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//   { userid: 44, name: 'Cenarius', role: null },
//   { userid: 87, name: null, role: 'Shaman' },
//   ...
// ]
// //^ ~~~~~~interview question~~~~~~~~~~~~
// const callback1 = (a) => a + 2; // 6
// const callback2 = (b) => b * 2; // 12
// const callback3 = (c) => c - 2; // 10

// console.log(runAll(4)(callback1, callback2, callback3)); // 18

// function runAll(...args) {

//   return function(n) {
//     return args.reduce((acc, curfn) => curfn(acc), n);
//     // let acc = num;
//     // while (cbs.length) {
//     //   const cb = cbs.shift();
//     //   acc = cb(res);
//     // }
//     // return acc;
//   }
// }

// console.log([1, 2, 3].reduce((acc, cur) => acc + cur, 90));

// function foo(num4) {
//   return function(num5) {
//     return num4 + num5
//   }
// }
// const bar = foo(4);
// console.log(bar(5)); // 4 + 5

//* iife
// (function () {
//   console.log(1111);
// })();
//* object copy: shallow, deep

// const a = {};
// const b = {};
// const c = new Map();

// c.set(a, 1234);
// c.set(b, 4567);

// console.log(c.get(a));

// const obj = {
//   name: 'Jojo',
//   age: 12,
//   address: {
//     zip: '123456'
//   },
//   foo: function() {},
//   // date: new Date()
// };
// console.log(obj);
// console.log(structuredClone(obj));

// Lodash | _.cloneDeep() Method

// const obj1 = JSON.parse(JSON.stringify(obj));
// const obj1 = {
//   ...obj,
//   // address: {...obj.address}
// };
// obj.address.zip = '000000';

// console.log(obj1.address.zip);

//* this -----> object
// this --- using inside a function;

// (function() {
//   console.log(this);
// })();
// const myObj = {
//   name: 'Dio'
// }
// const obj = {
//   name: 'Jojo',
//   foo: function() {
//     console.log('foo: ', this); // this for obj

//     function bar() {
//       console.log('bar: ', this);
//     }
//     bar(myObj); // this for obj
//     // (() => {
//     //   console.log('bar: ', this);
//     // })();
//   }
//   // bar: () => {
//   //   console.log(this);
//   // }
// };
// obj.foo();
//^ interview
// const question = () => {
// 	const setup = () => {
// 		two = {
// 			a: "one",
// 			b: { i: 1 },
// 		};
// 		const one = two;
// 	};
// 	setup();

// 	try {
// 		console.log("one: ", one);
// 	} catch (error) {}

// 	try {
// 		console.log("two: ", two);
// 	} catch (error) {}
// };
// question();

// function wee() {
//   help = 9;
// }
// wee();
// console.log(help)

// class Person {
//   name = 'Dio';

//   bar() {
//     console.log(this);
//   }
// }
// const p = new Person();
// p.bar();

// const myObj = {
//   name: 'Jojo'
// }

// function printName(a, b) { // 100
//   console.log(this.name, a + b);
// }
// const bindprint = printName.bind(myObj); // lazy
// bindprint('1', true);

// printName.call(myObj, '1', true); // eager : 1 + 100
// printName.apply(myObj, ['1', true]); // eager : 1 + [100]

// call, apply, bind

//* arrow function
// function foo() {}
// const bar = () => {}

// const arr = [1, 2, 3];
// arr.forEach(function(num) {
//   console.log(this.name, this.age);
// }, {name: 'Dio', age: 67})

// (function() {
//   console.log(arguments)
// })();
// (() => {
//   console.log(arguments)
// })();

/** @class ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Day4
 *
 * event loop
 *
 * XHR
 *
 * callback function; callback hell
 *
 * Promise
 *
 * MyPromise
 *
 * MyFetch
 */

//* event loop

// for (let i = 0; i < 5; i++) {
// 	setTimeout(() => console.log(i), (5 - i) * 1000);
// }
// 0, 1, 2, 3, 4

// call stack: []
/* 
async api & web api:  [
  () => console.log(i) ---- 5s, [v = 0]
  () => console.log(i) ---- 4s, [v = 1] 
  ...
]
*/
/**
task queue & message queue: [
  () => console.log(i), [v = 3],
  ...
]
 */

//* callback function; callback hell
// const foo = () => console.log("foo");
// const getRandomTime = () => Math.floor(Math.random() * 6);

// const callFnByRandomTime = (callback) => {
// 	const timer = getRandomTime();
// 	console.log(`wait for ${timer}s`);

// 	setTimeout(callback, timer * 1000);
// };

// callFnByRandomTime(() => {
// 	callFnByRandomTime(() => {
// 		callFnByRandomTime(() => {
// 			callFnByRandomTime(() => {
// 				callFnByRandomTime(() => {
// 					callFnByRandomTime(() => {
// 						callFnByRandomTime(() => {
// 							callFnByRandomTime(() => {
// 								callFnByRandomTime(() => {
// 									foo();
// 								});
// 							});
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });

// * XHR
// const print = data => console.log(data);
// function getTodo(id) {
// 	const url = "https://jsonplaceholder.typicode.com/todos/";

// 	return new Promise((resolve, reject) => {
// 		const xhttp = new XMLHttpRequest();
// 		xhttp.onreadystatechange = function () {
// 			if (this.readyState === 4 && this.status === 200) {
// 				//& ~~~~~resolve function
// 				resolve(JSON.parse(xhttp.response));
// 			}
// 		};
// 		xhttp.open("GET", url + id);
// 		xhttp.send();
// 	});
// }

// 15, 66, 2
// getTodo(15)  // 6s
//   .then(data => {
//     console.log(data);
//     return getTodo(66); // 4s
//   })
//   .then(data => {
//     console.log(data);
//     return getTodo(2); // 10s
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch()

//   // async await
// (async () => {
//   try {
//     // await getTodo(15).then(print);
//     // print(await getTodo(66));
//     // print(await getTodo(2).catch());

//     const resolvedArr = await Promise.all([getTodo(15), getTodo(66), getTodo(2)]);
//   } catch (error) {

//   }
// })();

// getTodo(15, (data) => {
// 	print(data);
// 	getTodo(66, (data) => {
// 		print(data);
// 		getTodo(2, (data) => {
// 			print(data);
// 		});
// 	});
// });

//* Promise

// class MyPromise {
//   #thenCallBackQueue = [];
//   #currentData = undefined;

// 	constructor(executor) {
// 		executor(this.#resolve, this.reject);
// 	}

// 	#resolve = (resData) => {
//     try {
//       setTimeout(() => {
//         this.#currentData = resData;
//         while (this.#thenCallBackQueue.length) {
//           const cb = this.#thenCallBackQueue.shift();
//           this.#currentData = cb(this.#currentData);
//         }
//       }, 0);
//     } catch (error) {
//       this.catch(error)
//     }

// 	};
// 	reject() {}

// 	then(thenFn) {
//     this.#thenCallBackQueue.push(thenFn);
//     return this;
//   }
//   catch(catchCallBack) {
//     if (typeof catchCallBack === 'function') {

//     } else {
//       console.log(catchCallBack);
//     }
//   }
// }

// new MyPromise((resolve, reject) => {
//   console.log(hello)
// 	resolve("hello");
// })
// 	.then((data) => {
// 		console.log(data);
// 		return "world";
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise3, promise2]).then((values) => {
//   console.log(values);
// });

//* myFetch

function myFetch(url, options) {
	return new Promise((resolve, reject) => {
		const method = options && options.method ? options.method : "GET";

    const xhttp = new XMLHttpRequest();
    xhttp.open(method, url);

		if (options && options.headers) {
			Object.entries(options.headers).forEach(([key, val]) => {
				xhttp.setRequestHeader(key, val);
			});
		}

		xhttp.onreadystatechange = function () {
			if (
        this.readyState === 4 &&
				this.status >= 200 &&
				this.status < 300
			) {
				//& ~~~~~resolve function
				resolve({
					json: function () {
						return JSON.parse(xhttp.response);
					},
				});
			}
		};

		options && options.body ? xhttp.send(options.body) : xhttp.send();
	});
}

// //& ~~~~~~~~~~~~~~ get
// myFetch("https://jsonplaceholder.typicode.com/todos/1")
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));
// //& ~~~~~~~~~~~~~~ post
// myFetch("https://jsonplaceholder.typicode.com/posts", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		title: "foo",
// 		body: "bar",
// 		userId: 1,
// 	}),
// 	headers: {
// 		"Content-type": "application/json; charset=UTF-8",
// 	},
// })
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));


//^ interview
// For example:
// If,
// const add = (a, b) => a + b
// const multiplyByTwo = (c) => c * 2
// Then,
// await promisifyFunction(add)(1, 1) should return 2
// await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7