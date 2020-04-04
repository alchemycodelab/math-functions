/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

export function sum(a, b) {
    const array = [];
    array[0] = a + b;
    array[1] = `The sum of ${a} and ${b} is ${array[0]}.`;
    
    return array;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    const array = [];
    array[0] = a * b;
    array[1] = `The product of ${a} and ${b} is ${array[0]}.`;
    
    return array;
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
    const array = [];
    const firstSum = sum(a, b);
    const finalSum = sum(firstSum[0], c);
    
    const firstMultiply = multiply(a, b);
    const finalMultiply = multiply(firstMultiply[0], c);

    array[0] = finalSum[0];
    array[1] = finalMultiply[0];
    array[2] = `${a} and ${b} and ${c} sum to ${array[0]}.`;
    array[3] = `The product of ${a} and ${b} and ${c} is ${array[1]}.`;

    return array; 

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
    const array = [];
    const firstSum = sum(sumArr[0], sumArr[1]);
    const secondSum = sum(firstSum[0], sumArr[2]);
    const finalSum = secondSum[0];
    
    array[0] = finalSum;
    array[1] = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${finalSum} is their sum.`;

    return array;
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
    const array = [];
    const firstMultiply = multiply(multArr[0], multArr[1]);
    const finalMultiply = multiply(firstMultiply[0], multArr[2]);

    array[0] = finalMultiply[0];
    array[1] = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${finalMultiply[0]}.`;

    return array;
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
// */

// export function multiplyAnyArray(dynamicArray) { 
//     const array = [];
//     const firstMultiply = multiply(dynamicArray[0], dynamicArray[1]);
//     const secondMultiply = multiply(firstMultiply[0], dynamicArray[2]);
//     const thridMultiply = multiply(secondMultiply[0], dynamicArray[3]);
//     const finalMultiply = multiply(thridMultiply[0], dynamicArray[4]);

//     array[0] = finalMultiply[0];
//     array[1] = `The numbers ${dynamicArray[0]},${dynamicArray[1]},${dynamicArray[2]},${dynamicArray[3]},${dynamicArray[4]} have a product of ${finalMultiply[0]}.`;

// //  return array;

// }

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
