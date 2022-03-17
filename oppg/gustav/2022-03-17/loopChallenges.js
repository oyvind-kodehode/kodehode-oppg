// -------------------------------------------------------
 // EXERCISES FOR LOOPING
 // File ID: 234ea2ca-a5fb-11ec-9070-37964326b8ec
 // -------------------------------------------------------

"use strict";

let headerCount = 1;

function ex_header() {
	console.log("\nExercise " + headerCount + "\n");
	headerCount++;
}

// -------------------------------------------------------
// 1) Create a for loop that console logs the string 'hi' 4 times
//    Example output:
//    "hi"
//    "hi"
//    "hi"
//    "hi"
// -------------------------------------------------------

ex_header();

for (let i = 0; i < 4; i++)
	console.log("hi");

// -------------------------------------------------------
// 2) Create a for loop that console logs the numbers 2 - 22
//    Example output:
//    2 3 4 5 6 7 ...
// -------------------------------------------------------

ex_header();

for (let i = 2; i <= 22; i += 2)
	console.log(i);

// -------------------------------------------------------
// 3) Create a for loop that console each item in an array
//    Example array: const randomArr =  ['hi', 5, true, 'hopefully this worked']
//    Example output:
//    'hi' 5 true 'hopefully this worked'
// -------------------------------------------------------

ex_header();

const randomArr =  ['hi', 5, true, 'hopefully this worked'];

for (let i = 0; i < randomArr.length; i++)
	console.log(randomArr[i]);

// -------------------------------------------------------
// 4) Create a for loop that takes items from an array and console logs a sentence using each item in the array.
//    For example: const cuteAnimals = ["piggies", "puppies", "kitties", "birdies"]
//    Example output:
//    "piggies are cute" "puppies are cute" "kitties are cute" "birdies are cute"
// -------------------------------------------------------

ex_header();

// -------------------------------------------------------
// 5) Create a for loop that console logs the numbers 2 - 7 in reverse order
//    Example output:
//    7 6 5 4 3 2
// -------------------------------------------------------

ex_header();

// -------------------------------------------------------
// 6) Now take the loop from exercise 4 so the console logs are in reverse order
//    Example output:
//    "birdies are cute" "kitties are cute" "puppies are cute" "piggies are cute"
// -------------------------------------------------------

ex_header();

 // -------------------------------------------------------
 // 7) Using a function with parameter n, create a for loop which console log
 //    all even numbers up to and including n. Don’t include 0.
 //    let n = 22
 //    Example output:
 //    2 4 6 8 10 12 14 16 18 20 22
 // -------------------------------------------------------

ex_header();

 // -------------------------------------------------------
// 8) Use a for loop to get the sum of an array
//    Example output:
//    let arrOfNums = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
//    sumOfNums = 276
// -------------------------------------------------------

ex_header();

// -------------------------------------------------------
// 9) Get the sum of two arrays… actually the sum of all their elements.
//    Example output:
//    276 + 351 = 627

//    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
//    let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// -------------------------------------------------------

ex_header();

// -------------------------------------------------------
// 10) Create a multiplication table which multiplies all values of x and y. Each should range from 1 to 10.
//     Hint: start with making one loop that console logs the numbers 1 through 10.  Then think about
//     how you can use this to create a multiplication table by creating another loop
//     Example output:
//     x:1 y:1 multiple: 1
//     x:2 y:1 multiple: 2
//     x:3 y:1 multiple: 3
//     etc. with 1 also scaling each time x reaches 10
// -------------------------------------------------------

ex_header();

// -------------------------------------------------------
//  BONUS CHALLENGE: CREATE A FUNCTION THAT RECEIEVES 2 PARAMETERS, AN ARRAY OF PRODUCT COSTS AND A TAX
//                   AS PARAMETERS AND RETURNS A BILL OF ALL PRODUCTS + PRODUCT COSTS*TAX
//                   Example input: calculateTotalWithTax([1, 10, 19, 19, 2], .2)
// -------------------------------------------------------
