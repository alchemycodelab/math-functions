/* eslint-disable no-unused-vars */

/////////////////////////////////////
//Problem 1

export function sum(a, b) {
    return [a + b, `The sum of ${a} and ${b} is ${a + b}.`];
}


/////////////////////////////////////
// Problem 2

export function multiply(a, b) {
    return [a * b, `The product of ${a} and ${b} is ${a * b}.`];
}

/////////////////////////////////////
// Problem 3

export function sumAndMultiplyThreeNumbers(a, b, c) { 
    const num = sum(a, b)[0];
    const prod = multiply(a, b)[0];

    return [sum(num, c)[0], multiply(prod, c)[0], `${a} and ${b} and ${c} sum to ${a + b + c}.`, `The product of ${a} and ${b} and ${c} is ${a * b * c}.`];
}
/////////////////////////////////////
// Problem 4

export function sumArrayWithThreeNumbers([a, b, c]) {
    let num = sum(a, b)[0];
    let sumNum = sum(num, c)[0];
    return [sumNum, `${a},${b},${c} was passed in as an array of numbers, and ${a + b + c} is their sum.`];
}

/////////////////////////////////////
// Problem 5


export function multiplyArrayWithThreeNumbers([a, b, c]) {
    let num = multiply(a, b)[0];
    let productNum = multiply(num, c)[0];
    return [productNum, `The numbers ${a},${b},${c} have a product of ${a * b * c}.`];

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:



IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/




// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
