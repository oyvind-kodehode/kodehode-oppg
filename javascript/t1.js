/*
 * t1.js
 * File ID: 6ca71966-9ee4-11ec-861b-73dad8051f7d
 */

"use strict";

function update_text(text) {
	if (typeof module !== 'undefined' && module.exports) {
		// in Node.js
		console.log(text);
	} else {
		// not in Node.js
		document.getElementById("skrift").innerHTML = text;
	}
}

function count(a) {
	var i;
	var text = "";

	for (i = 0; i < a; i++) {
		text += " " + i;
		update_text(text);
	}
}

if (typeof module !== 'undefined' && module.exports) {
	// in Node.js
	count(10);
}

// vim: set noet ts=8 sw=8 sts=8 :
