/* eslint-disable no-unused-vars */

// X Problem 1

export function sum(a, b) {
    let addend = a + b;
    return [addend, `The sum of ${a} and ${b} is ${addend}.`];
}

// X Problem 2

export function multiply(a, b) {
    let product = a * b;
    return [product, `The product of ${a} and ${b} is ${product}.`];
}

// X Problem 3

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    let sum1 = sum(a, b)[0];
    let addend = sum(sum1, c)[0];
    let ans1 = multiply(a, b)[0];
    let product = multiply(ans1, c)[0];
    return [addend, product, `${a} and ${b} and ${c} sum to ${addend}.`, `The product of ${a} and ${b} and ${c} is ${product}.`];
}

// X Problem 4

export function sumArrayWithThreeNumbers(sumArr) {
    let addend = 0;
    let numString = sumArr.join();
    for (let num of sumArr) {
        addend = sum(addend, num)[0];
    }
    return [addend, `${numString} was passed in as an array of numbers, and ${addend} is their sum.`];
}

// Problem 5

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    let product = 1;
    let numString = multArr.join();
    for (let num of multArr) {
        product = multiply(product, num)[0];
    }
    return [product, `The numbers ${numString} have a product of ${product}.`];
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

export function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
