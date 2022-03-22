// svar.js
// File ID: 4435ade0-a9e2-11ec-8096-8d89054c0617

"use strict";

/*
 * processNumbers() - Add, subract, multiply or divide two numbers.
 *
 * Return value: answer or `undefined` if `b` is zero or an unknown operation 
 * is specified.
 */

function processNumbers(a, b, operation) {
	switch (operation) {
	case 'add':
		return a + b;
	case 'subtract':
		return a - b;
	case 'multiply':
		return a * b;
	case 'divide':
		if (!b) {
			console.error("Can't divide by zero");
			return undefined;
		}
		return a / b;
	default:
		console.error("%s: Unknown operation", operation);
		return undefined;
	}
}

/*
 * printNumbers() - Use processNumbers() with the four common operations: add, 
 * subtract, multiply and divide.
 *
 * Returns nothing.
 */

function printNumbers(a, b) {
	console.log("%d + %d = %d", a, b, processNumbers(a, b, 'add'));
	console.log("%d - %d = %d", a, b, processNumbers(a, b, 'subtract'));
	console.log("%d * %d = %d", a, b, processNumbers(a, b, 'multiply'));
	console.log("%d / %d = %d", a, b, processNumbers(a, b, 'divide'));
	console.log("");
}

printNumbers(15, 3);
printNumbers(99, 7);
printNumbers(69, 0);
printNumbers(-3, 7);
