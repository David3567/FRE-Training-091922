// let data: unknown = 6;
// data = "5";

// let data1: any = 7;
// data1.name = 342;

// type person = {name: string; age: number, salary?: number};

// const obj: person = {
//   name: "TT",
//   age: 45,
//   salary: 45,
//   company: 'Antra'
// } as person;

// let userRole: 'Admin' | 'Super' | 'User' = 'Super';

// type typefn = (x: string) => number;
// const foo: typefn = (x) => +x;

// const bar: typefn = function(x) {
//   return +x;
// }
// bar('t');

// interface interfacefn {
//   (x: string): number
// }
// interface fngroup {
//   foo(x: string): number,
//   bar: (y: string) => number
// }

// const foo = function (x: number): never {
//   throw Error()
// };
// foo(23)

// let userRole: "Admin" | "Super" | "User" = "Super";

// enum UserRole {
// 	ADMIN = "Admin",
// 	SUPER = 1,
// 	USER,
// }
// const str: UserRole = UserRole.SUPER;
// console.log(str === 1);

// interface Radio {
// 	openRadio(): void;
// }
// interface Battery {
// 	batteryStatus: () => void;
// }
// interface Keys {
// 	shift: string;
// 	enter: string;
// }
// class Mobile implements Radio, Battery, Keys {
//   shift: string;
// 	enter: string;

//   constructor() {}

// 	openRadio(): void {}
// 	batteryStatus: () => void;
// }

//* generic

// function toNumber(x: number, y: number): number[] {
// 	return [x, y];
// }
// function toString(x: string, y: string): string[] {
// 	return [x, y];
// }
// function toArray<T, R>(a: T, b: R): [T, R] {
// 	return [a, b];
// }
// // toArray<number>(5, 6);
// toArray<number, string>(5, "6");

// interface Queue<T> {
//   enqueue(item: T): void;
//   dequeue(): T;
//   getqueue(): T[]
// }
// // function foo(abc) {}

// class MyQueue<R> implements Queue<R> { // foo(34)
//     queue: R[];

//     enqueue(item: R): void {}

//     dequeue(): R {
//         throw new Error("Method not implemented.");
//     }
//     getqueue(): R[] {
//         throw new Error("Method not implemented.");
//     }
// }

//* decorator

function component(id: number) {
	return (trager: Function) => {
		trager.prototype.id = id;
	};
}

@component(200)
class Emplyee {
	id: number;
	printId() {
		console.log(this.id);
	}
}

console.log(new Emplyee().id);
