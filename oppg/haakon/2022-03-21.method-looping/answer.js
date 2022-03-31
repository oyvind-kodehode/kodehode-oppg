/*
 * oppg/haakon/2022-03-21.method-looping/answer.js
 * File ID: 1b95c8c8-ae67-11ec-9195-e35b2e392064
 */

"use strict";

let headerCount = 1;

/*
 * exHeader() - Print header before each exercise with the number and exercise 
 * text.
 *
 * Returns nothing.
 */

function exHeader(txt) {
	console.log("\nExercise %d: %s\n", headerCount++, txt);
}

/*****************************************************************************/

exHeader("sjekk om en lengre tekst du finner på nettet er over\n"
         + "en wordcount (antall tegn) du velger selv.");

/*
 * isShorter() - Check if the string `txt` is shorter than `length` and print 
 * out the result.
 *
 * Returns nothing.
 */

function isShorter(txt, length) {
	console.log("The text is%s shorter than %d characters.",
	             txt.length < length ? "" : " not", length);
}

// Copy+paste from <https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt>
const randText = "The licenses for most software are designed to take"
                 + " away your freedom to share and change it. By contrast,"
                 + " the GNU General Public License is intended to"
                 + " guarantee your freedom to share and change free"
                 + " software--to make sure the software is free for all"
                 + " its users. This General Public License applies to most"
                 + " of the Free Software Foundation's software and to any"
                 + " other program whose authors commit to using it. (Some"
                 + " other Free Software Foundation software is covered by"
                 + " the GNU Lesser General Public License instead.) You"
                 + " can apply it to your programs, too.\n"
                 + "\n"
                 + "When we speak of free software, we are referring to"
                 + " freedom, not price. Our General Public Licenses are"
                 + " designed to make sure that you have the freedom to"
                 + " distribute copies of free software (and charge for"
                 + " this service if you wish), that you receive source"
                 + " code or can get it if you want it, that you can change"
                 + " the software or use pieces of it in new free programs;"
                 + " and that you know you can do these things.\n"
                 + "\n"
                 + "To protect your rights, we need to make restrictions"
                 + " that forbid anyone to deny you these rights or to ask"
                 + " you to surrender the rights. These restrictions"
                 + " translate to certain responsibilities for you if you"
                 + " distribute copies of the software, or if you modify"
                 + " it.\n"
                 + "\n"
                 + "For example, if you distribute copies of such a"
                 + " program, whether gratis or for a fee, you must give"
                 + " the recipients all the rights that you have. You must"
                 + " make sure that they, too, receive or can get the"
                 + " source code. And you must show them these terms so"
                 + " they know their rights.\n"
                 + "\n"
                 + "We protect your rights with two steps: (1) copyright"
                 + " the software, and (2) offer you this license which"
                 + " gives you legal permission to copy, distribute and/or"
                 + " modify the software.\n"
                 + "\n"
                 + "Also, for each author's protection and ours, we want"
                 + " to make certain that everyone understands that there"
                 + " is no warranty for this free software. If the software"
                 + " is modified by someone else and passed on, we want its"
                 + " recipients to know that what they have is not the"
                 + " original, so that any problems introduced by others"
                 + " will not reflect on the original authors' reputations.\n"
                 + "\n"
                 + "Finally, any free program is threatened constantly by"
                 + " software patents. We wish to avoid the danger that"
                 + " redistributors of a free program will individually"
                 + " obtain patent licenses, in effect making the program"
                 + " proprietary. To prevent this, we have made it clear"
                 + " that any patent must be licensed for everyone's free"
                 + " use or not licensed at all.\n"
                 + "\n"
                 + "The precise terms and conditions for copying,"
                 + " distribution and modification follow.\n";

const textLen = randText.length;
console.log("Length of text: %d bytes", textLen);
isShorter(randText, textLen - 1);
isShorter(randText, textLen);
isShorter(randText, textLen + 1);

/*****************************************************************************/

exHeader("lag en loop som teller til 10");

for (let i = 1; i <= 10; i++)
	console.log(i);

/*****************************************************************************/

exHeader('finn ordene "if", "as", "and" i teksten du valgte\n'
         + 'og kutt ut de ordene pluss 5 tegn på hver side av ordene.\n'
         + 'Det trengs bare første instance av ordene.');

const charsWanted = 5; // Number of characters on each side of the string

/*
 * pickText() - Return `substr` with `numChars` extra characters before and 
 * after `substr` from the string `string`.
 */

function pickText(string, substr, numChars) {
	const pos = string.indexOf(substr);
	const start = pos - numChars < 0
	                ? 0
	                : pos - numChars;
	const end = pos + substr.length + numChars > string.length
	              ? string.length
	              : pos + substr.length + numChars;

	return string.slice(start, end);
}

const wordArray = [ "if", "as", "and" ];

for (let f of wordArray)
	console.log("%s: \"%s\"", f, pickText(randText, f, charsWanted));

/*****************************************************************************/

exHeader("sett sammen de nye stringene dine.");

let concatString = "";

for (let f of wordArray)
	concatString += pickText(randText, f, charsWanted);

console.log("Concatenated string: \"%s\"", concatString);

/*****************************************************************************/

exHeader("bytt ut de ordene med norske ord.");

/*
 * engToNor() - Return the Norwegian translation of some predefined English 
 * words or `undefined` if the word isn't defined.
 */

function engToNor(word) {
	switch (word) {
	case "if":
		return "hvis";
	case "as":
		return "som";
	case "and":
		return "og";
	default:
		return undefined;
	}
}

let replText = concatString;

console.log("Old string: %s", replText);
for (let f of wordArray)
	replText = replText.replace(f, engToNor(f));
console.log("New string: %s", replText);

/*****************************************************************************/

exHeader("lag et lite spill hvor spilleren har 3 liv.\n"
         + "Hint: while loops");

const tolerance = 3; // Can be this far from the answer and still be correct
const topNum = 10; // Highest random value to create

/*
 * createAnswer() - Return a random number from 1 to `topNum` (inclusive).
 */

function createAnswer() {
	return Math.ceil(Math.random() * topNum);
}

/*
 * getGuess() - Get an answer from the user and return it. To make it work 
 * everywhere it just guesses a random number for this exercise.
 */

function getGuess() {
	return createAnswer();
}

/*
 * isCorrect() - Check if the number the user guessed is within the allowed 
 * tolerance.
 *
 * Returns `true` or `false`.
 */

function isCorrect(guess, answer) {
	return Math.abs(answer - guess) < tolerance ? true : false;
}

/*
 * guessGame() - Main loop for the guessing game.
 *
 * Returns nothing.
 */

function guessGame() {
	let lives = 3;
	let maxLives = lives;

	console.log("Guess a number from 1 to %d.\n"
	            + "If your answer is less than %d integers away\n"
	            + "from the correct answer you'll earn a life,\n"
                    + "otherwise you'll lose a life.\n", topNum, tolerance);

	while (lives) {
		const answer = createAnswer();
		const guess = getGuess();
		const correct = isCorrect(guess, answer);

		lives += correct ? 1 : -1;
		console.log("You guessed %d, should be %d."
		            + " You %s a life, lives left: %d.",
		            guess, answer,
		            correct ? "earn" : "lose",
		            lives);
		if (lives > maxLives)
			maxLives = lives;
	}

	console.log("\nYou're dead, your maximum number of lives was %d.",
	            maxLives);
}

guessGame();

/*****************************************************************************/

exHeader("lag en array med 10 ord og en med 10 tall.");

let words = [ "it", "is", "easy", "to", "create", "an", "array",
              "with", "ten", "words" ];
let numbers = [ 3, 14, 159, 26, 535, 89, 793, 23, 84, 646 ];

console.log("words: %s", words);
console.log("numbers: %s", numbers);

/*****************************************************************************/

exHeader("sett alle tallene utenom det første og siste til å være\n"
         + "det samme tallet et tall om gangen");

for (let i = 1; i < numbers.length - 1; i++)
	numbers[i] = 9;

console.log("numbers: %s", numbers);
