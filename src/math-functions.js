/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."e
*/

export function sum(a, b) {
    const sumOfParams = Number(a + b);
    const resultString = `The sum of ${a} and ${b} is ${sumOfParams}.`;
    let sumArray = [sumOfParams, resultString];

    return sumArray;

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    const multipliedNums = a * b;
    const resultString = `The product of ${a} and ${b} is ${multipliedNums}.`;
    let multiplyArray = [multipliedNums, resultString];

    return multiplyArray;

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

//Attempting to use .pop() method
/* export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    const sumOfAAndB = (sum(a, b)).pop();
    const sumResult = (sum(sumOfAAndB, c)).pop();

    const productOfAAndB = (multiply(a, b)).pop();
    const productResult = (multiply(productOfAAndB, c)).pop();

    let thirdElementString = `${a} and ${b} and ${c} sum to ${sumResult}.`;
    let fourthElementString = `The product of ${a} and ${b} and ${c} is ${productResult}.`;
    let resultArray = [sumResult, productResult, thirdElementString, fourthElementString];

    return resultArray;

}*/

/*export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    const sum1 = sum(a, b)[0];
    const sumResult = sum(sum1, c);
    const mul1 = multiply(a, b)[0];
    const mulResult = multiply(mul1, c);
    let myArray = [sumResult[0], mulResult[0], `${a} and ${b} and ${c} sum to ${sumResult[0]}.`, `The product of ${a} and ${b} and ${c} is ${mulResult[0]}.`];

    return myArray;
}*/

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    const sumOfAAndB = sum(a, b);
    const removedSumString = sum(sumOfAAndB[0], c);
    const sumResult = removedSumString[0];

    const productOfAAndB = multiply(a, b);
    const removedProductString = multiply(productOfAAndB[0], c);
    const productResult = removedProductString[0];

    let thirdElementString = `${a} and ${b} and ${c} sum to ${sumResult}.`;
    let fourthElementString = `The product of ${a} and ${b} and ${c} is ${productResult}.`;
    let resultArray = [sumResult, productResult, thirdElementString, fourthElementString];

    return resultArray;

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
    const sumOfFirstTwoNums = sum(sumArr[0], sumArr[1])[0];
    const totalSum = sum(sumOfFirstTwoNums, sumArr[2])[0];
    const resultString = `${sumArr} was passed in as an array of numbers, and ${totalSum} is their sum.`;
    const resultArray = [totalSum, resultString];

    return resultArray;
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

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    const productOfFirstTwoNums = multiply(multArr[0], multArr[1])[0];
    const product = multiply(productOfFirstTwoNums, multArr[2])[0];
    const resultString = `The numbers ${multArr} have a product of ${product}.`;
    const resultArray = [product, resultString];
    
    return resultArray;
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
