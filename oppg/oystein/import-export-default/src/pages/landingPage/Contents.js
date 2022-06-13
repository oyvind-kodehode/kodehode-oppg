/*
 * Contents.js
 * File ID: 21e5cae6-eb13-11ec-a9c1-5198a48a9eeb
 */

import React from 'react';

export const paragraphOne = "This is paragraph 1, paragraphOne.";
export const paragraphTwo = "And this is paragraphTwo.";

export function paragraphThree() {
	const array = [
		"This",
		"is",
		"paragraph",
		"three,",
		"exported",
		"function."
	];

	return array.join(' ');
}
