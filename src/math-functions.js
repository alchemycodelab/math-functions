/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

export function sum(...args) {
  let sumValue = 0;
  let sumString = "";

  if (args.length === 2) {
    sumString = "The sum of ";
    for (let i = 0; i < args.length; i++) {
      sumValue += args[i];
      sumString += args[i];
      // add ' and ' between number values in sumString, and add ' is ${sum}.' at the end
      i < args.length - 1
        ? (sumString += " and ")
        : (sumString += ` is ${sumValue}.`);
    }
  } else {
    for (let i = 0; i < args.length; i++) {
      sumValue += args[i];
      sumString += args[i];
      // for whatever reason, we want a different style of string output if there are 3 numbers to sum, so here ya go!
      i < args.length - 1
        ? (sumString += " and ")
        : (sumString += ` sum to ${sumValue}.`);
    }
  }

  return [sumValue, sumString];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element 
// is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the 
// values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(...args) {
  let product = 1;
  let productString = "The product of ";

  for (let i = 0; i < args.length; i++) {
    product *= args[i];
    productString += args[i];
    // add ' and ' between number values in productString, and add ' is ${sum}.' at the end
    i < args.length - 1
      ? (productString += " and ")
      : (productString += ` is ${product}.`);
  }

  return [product, productString];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiplyThreeNumbers() that takes in three 
numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out 
how to do this. However, you may continue to use the + operator for string concatenation.
*/

export function sumAndMultiplyThreeNumbers(a, b, c) {
  //eslint-disable-line
  const sumArray = sum(a, b, c);
  const multiplyArray = multiply(a, b, c);
  
  return [sumArray[0], multiplyArray[0], sumArray[1], multiplyArray[1]];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArrayWithThreeNumbers() that takes in an array of numbers 
as its single argument and then returns an array where the first element is the sum 
of the numbers in the array, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're going to 
have to be resourceful to figure out how to do this. However, you may continue 
to use the + operator for string concatenation.
*/

export function sumArrayWithThreeNumbers(sumArr) {
  let sumValue = sum(...sumArr)[0];
  let sumString = '';

  for (let i = 0; i < sumArr.length; i++) {
    if (i !== sumArr.length - 1) {
      sumString += `${sumArr[i]},`
    } else {
      sumString += `${sumArr[i]} was passed in as an array of numbers, and ${sumValue} is their sum.`;
    }
  }

  return [sumValue, sumString];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArrayWithThreeNumbers() that takes an array of numbers 
as its argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. 
To do multiplication, use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements. However, 
you may continue to use the + operator for string concatenation.
*/

export function multiplyArrayWithThreeNumbers(multArr) {
  //eslint-disable-line
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/

export function multiplyAnyArray(dynamicArray) {
  //eslint-disable-line
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.
// You're done! Submit the link to the repo following the instructions in Canvas.
